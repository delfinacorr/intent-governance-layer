
Conditional payments for AI agents on Stellar
# Intent Governance Layer 🚀
Conditional payments for AI agents on Stellar

## 📌 Problem
AI agents can already execute payments and coordinate tasks with USDC.

But when deliverables are complex or high-value, trust based solely on automation or reputation falls short.

Pure automation doesn't handle subjectivity.

Reputation systems are time-consuming to build and can be manipulated.

Result: locked capital + disputes without reliable resolution.

## 💡 Solution
Intent Governance Layer: an infrastructure on Stellar that adds governance and trust to agentic payments.

Adaptive escrow based on reputation (score 300–900).

Autonomous dispute resolution (fast track, standard, complex).

Immutable auditing in Stellar.

Roles and pre-validations (RBAC/admission controllers).

Network policies to limit interactions between agents.

## 🛠️ Architecture
[Agente A] --crea tarea--> [Frontend]
      |                          |
      v                          v
 [Backend Node.js] --escrow--> [Stellar Blockchain]
      |
      v
[Agente B] --ejecuta tarea--> [Backend]
      |
      v
[Validación] --aprobada--> [Escrow libera pago]
      |
      v
[Stellar Blockchain] --registro--> [Audit log]

* **smartcontract** : https://stellar.expert/explorer/testnet/tx/8637767642820608

## Project Structure

```
intent-governance-layer/
├── backend/                          # Node.js Express API
│   ├── index.js                      # Main server entry point
│   ├── package.json                  # Backend dependencies
│   ├── .env                          # Environment variables
│   └── node_modules/                 # Dependencies
│
├── frontend/                         # Next.js React Application
│   ├── app/                          # Next.js app directory
│   │   ├── page.tsx                  # Home page
│   │   ├── layout.tsx                # Root layout
│   │   └── globals.css               # Global styles
│   ├── components/
│   │   ├── dashboard/                # Dashboard components
│   │   │   ├── stats-cards.tsx       # Statistics cards
│   │   │   ├── activity-feed.tsx     # Activity log
│   │   │   ├── orchestration-table.tsx # Payment orchestration
│   │   │   ├── sidebar.tsx           # Navigation sidebar
│   │   │   └── header.tsx            # Dashboard header
│   │   ├── ui/                       # Shadcn UI components (40+ files)
│   │   │   ├── button.tsx, card.tsx, badge.tsx
│   │   │   ├── dialog.tsx, sheet.tsx, drawer.tsx
│   │   │   ├── table.tsx, tabs.tsx, accordion.tsx
│   │   │   ├── chart.tsx, progress.tsx, slider.tsx
│   │   │   └── ... (responsive UI components)
│   │   └── theme-provider.tsx        # Dark/Light theme support
│   ├── public/                       # Static assets
│   ├── package.json                  # Frontend dependencies
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── next.config.ts                # Next.js configuration
│   ├── postcss.config.mjs            # PostCSS configuration
│   ├── eslint.config.mjs             # ESLint rules
│   ├── next-env.d.ts                 # Next.js type definitions
│   ├── AGENTS.md                     # Copilot agents configuration
│   └── CLAUDE.md                     # Claude AI instructions
│
├── contracts/                        # Rust Smart Contracts
│   ├── src/
│   │   └── lib.rs                    # Intent Escrow contract implementation
│   ├── Cargo.toml                    # Rust dependencies & configuration
│   └── target/                       # Build output
│
├── docs/                             # Documentation 
│   └── [documentation files]
│
├── .git/                             # Git repository
├── .gitignore                        # Git ignore rules
└── README.md                         # This file
```
## Roadmap
* Phase 1 — MVP (Hackathon) ✅

 Basic Soroban escrow contract
 Simple audit with hash anchored to memo
 Minimal frontend dashboard

* Phase 2 — Short Term

 Adaptive escrow by reputation score
 Multi-sig for shared treasury
 Basic disputes panel

* Phase 3 — Medium Term

 RBAC and admission controllers
 Network policies between agents
 Decentralized dispute resolution with staked panels

* Phase 4 — Long Term

 Full governance toolkit for agents
 Cross-chain escrow via CCTP
 Marketplace and DAO integrations
 
License
MIT © 2026 Intent Governance Layer Contributors
