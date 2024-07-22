export const IERC20ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address",
        "indexed": true
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address",
        "indexed": true
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256",
        "indexed": false
      }
    ],
    "type": "event",
    "name": "Approval",
    "anonymous": false
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address",
        "indexed": true
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
        "indexed": true
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256",
        "indexed": false
      }
    ],
    "type": "event",
    "name": "Transfer",
    "anonymous": false
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "address", "name": "spender", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "allowance",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "spender", "type": "address" },
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "approve",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "balanceOf",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "decimals",
    "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "name",
    "outputs": [
      { "internalType": "string", "name": "", "type": "string" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "symbol",
    "outputs": [
      { "internalType": "string", "name": "", "type": "string" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "totalSupply",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "transfer",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "from", "type": "address" },
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "transferFrom",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
  }
] as const