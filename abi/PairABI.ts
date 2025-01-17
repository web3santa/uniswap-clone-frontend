export const PairABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
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
        "name": "operator",
        "type": "address",
        "indexed": true
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool",
        "indexed": false
      }
    ],
    "type": "event",
    "name": "ApprovalForAll",
    "anonymous": false
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address",
        "indexed": true
      },
      {
        "internalType": "bool",
        "name": "isToken0",
        "type": "bool",
        "indexed": true
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256",
        "indexed": false
      },
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256",
        "indexed": false
      },
      {
        "internalType": "uint256",
        "name": "token0Amt",
        "type": "uint256",
        "indexed": false
      },
      {
        "internalType": "uint256",
        "name": "token1Amt",
        "type": "uint256",
        "indexed": false
      },
      {
        "internalType": "uint256",
        "name": "due",
        "type": "uint256",
        "indexed": false
      }
    ],
    "type": "event",
    "name": "Deposit",
    "anonymous": false
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "token0Amt",
        "type": "uint256",
        "indexed": false
      },
      {
        "internalType": "uint256",
        "name": "token1Amt",
        "type": "uint256",
        "indexed": false
      }
    ],
    "type": "event",
    "name": "FeeCollected",
    "anonymous": false
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address",
        "indexed": true
      },
      {
        "internalType": "bool",
        "name": "isSwap0",
        "type": "bool",
        "indexed": true
      },
      {
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256",
        "indexed": false
      },
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256",
        "indexed": false
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
        "indexed": true
      }
    ],
    "type": "event",
    "name": "Swap",
    "anonymous": false
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address",
        "indexed": true
      },
      {
        "internalType": "bool",
        "name": "isToken0",
        "type": "bool",
        "indexed": true
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256",
        "indexed": false
      },
      {
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256",
        "indexed": false
      }
    ],
    "type": "event",
    "name": "Withdraw",
    "anonymous": false
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "APPROVE_TYPEHASH",
    "outputs": [
      { "internalType": "bytes32", "name": "", "type": "bytes32" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "DOMAIN_SEPARATOR",
    "outputs": [
      { "internalType": "bytes32", "name": "", "type": "bytes32" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "basis",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "_oldFeeRatio",
        "type": "uint64"
      },
      {
        "internalType": "uint256",
        "name": "_elapsedTime",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "calcNewFeeRatio",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "_newFeeRatio",
        "type": "uint64"
      }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "collectFee"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "input", "type": "uint256" },
      {
        "internalType": "uint256",
        "name": "minOutput",
        "type": "uint256"
      },
      { "internalType": "uint256", "name": "time", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "deposit0",
    "outputs": [
      { "internalType": "uint256", "name": "output", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "input", "type": "uint256" },
      {
        "internalType": "uint256",
        "name": "minOutput",
        "type": "uint256"
      },
      { "internalType": "uint256", "name": "time", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "deposit1",
    "outputs": [
      { "internalType": "uint256", "name": "output", "type": "uint256" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "factory",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "farm",
    "outputs": [
      { "internalType": "contract IFarm", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "feeTo",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "getFeeRatio",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "_feeRatio0",
        "type": "uint64"
      },
      { "internalType": "uint64", "name": "_feeRatio1", "type": "uint64" }
    ]
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "time", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "getPremium",
    "outputs": [
      { "internalType": "uint256", "name": "premium", "type": "uint256" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "getReserves",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "reserve0",
        "type": "uint256"
      },
      { "internalType": "uint256", "name": "reserve1", "type": "uint256" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "halfLife",
    "outputs": [
      { "internalType": "uint64", "name": "", "type": "uint64" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_token0", "type": "address" },
      { "internalType": "address", "name": "_token1", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "initialize"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "nonces",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "noteCount",
    "outputs": [
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256", "name": "", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "notes",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "token0Amt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "token1Amt",
        "type": "uint256"
      },
      { "internalType": "uint256", "name": "due", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "operatorApprovals",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "rescueERC20"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      { "internalType": "bool", "name": "approved", "type": "bool" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "setApprovalForAll"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      { "internalType": "bool", "name": "approved", "type": "bool" },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      { "internalType": "bytes", "name": "sig", "type": "bytes" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "setApprovalForAllWithSig"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_basis", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "setBasis"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_farm", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "setFarm"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_feeTo", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "setFeeTo"
  },
  {
    "inputs": [
      { "internalType": "uint64", "name": "_halfLife", "type": "uint64" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "setHalfLife"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "input", "type": "uint256" },
      {
        "internalType": "uint256",
        "name": "minOutput",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "swap0in",
    "outputs": [
      { "internalType": "uint256", "name": "output", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "input", "type": "uint256" },
      {
        "internalType": "uint256",
        "name": "minOutput",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "swap1in",
    "outputs": [
      { "internalType": "uint256", "name": "output", "type": "uint256" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "token0",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "token1",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "index", "type": "uint256" },
      { "internalType": "address", "name": "to", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "withdraw",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "token0Amt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "token1Amt",
        "type": "uint256"
      }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "from", "type": "address" },
      { "internalType": "uint256", "name": "index", "type": "uint256" },
      { "internalType": "address", "name": "to", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "withdrawFrom",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "token0Amt",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "token1Amt",
        "type": "uint256"
      }
    ]
  }
] as const