const express = require('express');
const cors = require('cors');
// Cambiamos la forma de importar para evitar el error de "Constructor"
const { Horizon, Keypair, TransactionBuilder, Networks, Operation, Asset } = require('@stellar/stellar-sdk');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Nueva forma de instanciar el servidor en la v13+
const server = new Horizon.Server('https://horizon-testnet.stellar.org');
const escrowKeypair = Keypair.fromSecret(process.env.ESCROW_SECRET_KEY);

// DB en memoria para el MVP
let db = [];

app.get('/', (req, res) => res.send('Intent API is Live 🚀'));

// 1. Crear Escrow (Registra la intención de pago)
app.post('/create-escrow', (req, res) => {
    const { amount, sender, recipient, note } = req.body;
    
    const newEscrow = {
        id: db.length + 1,
        amount,
        sender,
        recipient,
        note,
        status: 'LOCKED',
        txHash: null
    };

    db.push(newEscrow);
    console.log(`✅ Escrow creado localmente: ID ${newEscrow.id}`);
    res.json(newEscrow);
});

// 2. Aprobar Pago
app.post('/approve', async (req, res) => {
    const { id } = req.body;
    const item = db.find(e => e.id === id);

    if (!item) return res.status(404).json({ error: "Escrow no encontrado" });

    try {
        const account = await server.loadAccount(escrowKeypair.publicKey());
        
        const transaction = new TransactionBuilder(account, {
            fee: '1000',
            networkPassphrase: Networks.TESTNET
        })
        .addOperation(Operation.payment({
            destination: item.recipient,
            asset: Asset.native(), // Native = XLM
            amount: item.amount
        }))
        .setTimeout(30)
        .build();

        transaction.sign(escrowKeypair);
        const result = await server.submitTransaction(transaction);

        item.status = 'RELEASED';
        item.txHash = result.hash;

        console.log(`💸 Pago liberado en Stellar: ${result.hash}`);
        res.json(item);
    } catch (error) {
        console.error("❌ Error en Stellar:", error);
        res.status(500).json({ error: error.message });
    }
});

// 3. Rechazar Pago
app.post('/reject', async (req, res) => {
    const { id } = req.body;
    const item = db.find(e => e.id === id);

    if (!item) return res.status(404).json({ error: "Escrow no encontrado" });

    try {
        const account = await server.loadAccount(escrowKeypair.publicKey());
        
        const transaction = new TransactionBuilder(account, {
            fee: '1000',
            networkPassphrase: Networks.TESTNET
        })
        .addOperation(Operation.payment({
            destination: item.sender,
            asset: Asset.native(),
            amount: item.amount
        }))
        .setTimeout(30)
        .build();

        transaction.sign(escrowKeypair);
        const result = await server.submitTransaction(transaction);

        item.status = 'REFUNDED';
        item.txHash = result.hash;

        res.json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Intent Backend activo en puerto ${PORT}`));