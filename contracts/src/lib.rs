#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env, token, symbol_short, Symbol};

#[contract]
pub struct IntentEscrow;

#[contractimpl]
impl IntentEscrow {
    // 1. Inicializar el depósito (Bloquear fondos)
    // El agente deposita USDC/XLM en el contrato
    pub fn deposit(env: Env, from: Address, token: Address, amount: i128) {
        from.require_auth();
        let client = token::Client::new(&env, &token);
        
        // Transferir del Agente al Contrato
        client.transfer(&from, &env.current_contract_address(), &amount);
        
        // Guardar quién es el dueño original para devoluciones
        env.storage().persistent().set(&symbol_short!("owner"), &from);
    }

    // 2. Liberar fondos (Aprobado por la Capa de Gobernanza)
    // Solo se llama cuando el Intent Backend valida que la tarea se cumplió
    pub fn release(env: Env, gov_auth: Address, token: Address, recipient: Address, amount: i128) {
        // Validación de autoridad de Gobernanza
        gov_auth.require_auth();

        let client = token::Client::new(&env, &token);
        client.transfer(&env.current_contract_address(), &recipient, &amount);
    }

    // 3. Devolución (Refund)
    // Si la tarea falla o no hay confianza, se devuelve al owner
    pub fn refund(env: Env, gov_auth: Address, token: Address, amount: i128) {
        gov_auth.require_auth();

        let owner: Address = env.storage().persistent().get(&symbol_short!("owner")).unwrap();
        let client = token::Client::new(&env, &token);
        client.transfer(&env.current_contract_address(), &owner, &amount);
    }
}