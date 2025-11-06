# 🧠 SkillLink – Decentralized Job Portal

SkillLink is a **Web3-powered recruitment platform** designed to eliminate fake job listings, centralized manipulation, and data opacity.  
It leverages **Ethereum smart contracts**, **MetaMask wallet authentication**, and **decentralized storage (IPFS)** to provide a transparent, secure, and verifiable hiring process.

## 📂 Project Structure
```
SkillLink/
├── .gitignore
├── docs
│   ├── DEPLOYMENT.md
│   └── README.md
├── frontend
│   ├── app.js
│   ├── dashboard.html
│   ├── employer.html
│   ├── index.html
│   ├── jobs.html
│   └── style.css
└── smart-contract
├── SkillLink.sol
├── contract-config.json
└── deploy.js
```

- **/docs** → Documentation and deployment guides  
- **/frontend** → Web interface built with HTML, CSS, and JavaScript (Ethers.js integration)  
- **/smart-contract** → Solidity contract, deployment script, and configuration files  
- **.gitignore** → Ignores build cache, logs, and local environment files  

## 🏗️ Project Overview

SkillLink demonstrates how **decentralized applications (dApps)** can streamline digital recruitment by using blockchain for:
- **Authenticity** – Every job post and application is immutable and verifiable on-chain.  
- **Transparency** – Employers and applicants interact directly, without intermediaries.  
- **Security** – Wallet-based authentication ensures user identity and data integrity.  

## 🧩 Updated Tech Stack

| Layer | Technology | Purpose |
|:------|:------------|:---------|
| **Smart Contract** | Solidity (v0.8.19) | Defines job, application, and event logic |
| **Blockchain Network** | Ethereum Sepolia Testnet | Test environment for decentralized transactions |
| **Frontend** | HTML, CSS, JavaScript | User interface for employers and applicants |
| **Web3 Connector** | Ethers.js | Facilitates blockchain read/write interactions |
| **Wallet** | MetaMask | Wallet-based authentication and transaction signing |
| **Storage** | IPFS | Off-chain decentralized file storage for resumes |
| **Indexing Layer** | The Graph | High-speed, indexed data retrieval for job listings |
| **Deployment Tools** | Remix IDE, Hardhat | Contract compilation, deployment, and testing |

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/skilllink.git
cd skilllink
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Deploy the Smart Contract

* Open `smart-contract/SkillLink.sol` in **Remix IDE**
* Compile with Solidity **0.8.19**
* Connect **MetaMask** to the **Sepolia Test Network**
* Deploy and copy the **contract address**

Alternatively, you can deploy via Hardhat:

```bash
npx hardhat run smart-contract/deploy.js --network sepolia
```

### 4. Configure Frontend

Edit `frontend/app.js` and update:

```js
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
```

### 5. Run Frontend Locally

Open `frontend/index.html` in your browser or use a local server:

```bash
npx live-server frontend
```

Connect MetaMask when prompted to start interacting with the DApp.

## 🔄 Core Workflows

### 👨‍💼 Employer

1. Connect wallet via MetaMask.
2. Fill job details and submit using `postJob()`.
3. Confirm the transaction to store job on-chain.
4. Toggle job visibility via `toggleJobStatus()`.

### 👩‍💻 Applicant

1. Browse job listings (fetched from **The Graph**).
2. Connect wallet and attach resume stored on **IPFS**.
3. Submit application via `applyJob()`; transaction is recorded on-chain.
4. Employer verifies applicants directly through the contract.

## 🧱 Smart Contract Summary

**Contract:** `SkillLink.sol`
**Functions:**

* `postJob()` – Add a new job listing.
* `applyJob()` – Apply for an active job.
* `toggleJobStatus()` – Activate/deactivate job posts.
* `getAllJobs()` / `getActiveJobs()` – Retrieve job data.
* `getJobApplications()` – View applicants for a job.

**Events:**

* `JobPosted`
* `JobApplicationSubmitted`
* `JobStatusUpdated`

**License:** MIT

## 🧠 Methodology

1. **Development Tools:** Remix, Hardhat, and MetaMask for seamless testing and deployment.
2. **Hybrid Architecture:** Combines **on-chain** smart contracts with **off-chain** storage and indexing.
3. **Workflow Validation:** Tested end-to-end user scenarios (job posting & applying).
4. **Goal:** Demonstrate transparency, usability, and viability of decentralized recruitment.

## 📈 Future Enhancements

* Integration of **Decentralized Identity (DID)** for verified applicant profiles.
* **AI-powered recommendation system** for employers.
* **Polygon network migration** for scalability and reduced gas fees.
* **Role-based dashboards** for improved user management.

## 📁 Documentation

See detailed deployment and integration steps in:
* `docs/README.md`

## 🧾 License

This project is licensed under the **MIT License** — see the LICENSE file for more details.
