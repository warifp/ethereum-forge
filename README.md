# EtherForge

EtherForge is a simple Ethereum development project using Hardhat and Solidity for smart contracts. This project provides a basic structure for Ethereum development with an MVC architecture.

## Project Structure

```
EtherForge/
│
├── contracts/
│ ├── ERC20Token.sol
│ └── YourContract.sol
│
├── test/
│ ├── ERC20Token.test.js
│ └── YourContract.test.js
│
├── scripts/
│ ├── deploy.js
│ └── interact.js
│
└── README.md
```

- **`contracts/`**: Contains the Solidity smart contracts for Ethereum.
- **`test/`**: Houses test scripts for testing the smart contracts.
- **`scripts/`**: Scripts to deploy and interact with the contracts.

## Usage

### 1. Install Dependencies

```bash
npm install
```
### 2. Compile Contract
    
    npx hardhat compile

### 3. Run Tests
    
    npx hardhat test

### 4. Deploy Contract

    npx hardhat run scripts/deploy.js

### 5. Interact with Contract
    
    npx hardhat run scripts/interact.js

# Note
EtherForge is a simple Ethereum development project using Hardhat and Solidity for smart contracts. This project provides a basic structure for Ethereum development with an MVC architecture.