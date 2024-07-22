export const RouterABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "_WETH", "type": "address" },
      { "internalType": "address", "name": "_owner", "type": "address" },
      { "internalType": "address", "name": "_factory", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address",
        "indexed": false
      }
    ],
    "type": "event",
    "name": "TransferOwnership",
    "anonymous": false
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "CODE_HASH",
    "outputs": [
      { "internalType": "bytes32", "name": "", "type": "bytes32" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "DYSON_FACTORY",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "WETH",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "tokenIn", "type": "address" },
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      { "internalType": "uint256", "name": "index", "type": "uint256" },
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
    "name": "deposit",
    "outputs": [
      { "internalType": "uint256", "name": "output", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      { "internalType": "uint256", "name": "index", "type": "uint256" },
      { "internalType": "address", "name": "to", "type": "address" },
      {
        "internalType": "uint256",
        "name": "minOutput",
        "type": "uint256"
      },
      { "internalType": "uint256", "name": "time", "type": "uint256" }
    ],
    "stateMutability": "payable",
    "type": "function",
    "name": "depositETH",
    "outputs": [
      { "internalType": "uint256", "name": "output", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "pair", "type": "address" },
      {
        "internalType": "uint256",
        "name": "token0Amt",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "name": "fairPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "token1Amt",
        "type": "uint256"
      }
    ]
  },
  {
    "inputs": [
      { "internalType": "bytes[]", "name": "data", "type": "bytes[]" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "multicall",
    "outputs": [
      { "internalType": "bytes[]", "name": "results", "type": "bytes[]" }
    ]
  },
  {
    "inputs": [],
    "stateMutability": "view",
    "type": "function",
    "name": "owner",
    "outputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ]
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "contractAddress",
        "type": "address"
      },
      { "internalType": "bool", "name": "enable", "type": "bool" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "rely"
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
      { "internalType": "address", "name": "token", "type": "address" },
      { "internalType": "uint256", "name": "value", "type": "uint256" },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      },
      { "internalType": "uint8", "name": "v", "type": "uint8" },
      { "internalType": "bytes32", "name": "r", "type": "bytes32" },
      { "internalType": "bytes32", "name": "s", "type": "bytes32" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "selfPermit"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "pair", "type": "address" },
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
      { "internalType": "address", "name": "tokenIn", "type": "address" },
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      { "internalType": "uint256", "name": "index", "type": "uint256" },
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
    "name": "swap",
    "outputs": [
      { "internalType": "uint256", "name": "output", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokenOut",
        "type": "address"
      },
      { "internalType": "uint256", "name": "index", "type": "uint256" },
      { "internalType": "address", "name": "to", "type": "address" },
      {
        "internalType": "uint256",
        "name": "minOutput",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function",
    "name": "swapETHIn",
    "outputs": [
      { "internalType": "uint256", "name": "output", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "tokens",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "indexes",
        "type": "uint256[]"
      },
      { "internalType": "address", "name": "to", "type": "address" },
      {
        "internalType": "uint256",
        "name": "minOutput",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function",
    "name": "swapETHInWithMultiHops",
    "outputs": [
      { "internalType": "uint256", "name": "output", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "tokenIn", "type": "address" },
      { "internalType": "uint256", "name": "index", "type": "uint256" },
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
    "name": "swapETHOut",
    "outputs": [
      { "internalType": "uint256", "name": "output", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "tokens",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "indexes",
        "type": "uint256[]"
      },
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
    "name": "swapETHOutWithMultiHops",
    "outputs": [
      { "internalType": "uint256", "name": "output", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "tokens",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "indexes",
        "type": "uint256[]"
      },
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
    "name": "swapWithMultiHops",
    "outputs": [
      { "internalType": "uint256", "name": "output", "type": "uint256" }
    ]
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "transferOwnership"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "pair", "type": "address" },
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
      { "internalType": "address", "name": "pair", "type": "address" },
      { "internalType": "uint256", "name": "index", "type": "uint256" },
      { "internalType": "address", "name": "to", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "withdrawETH",
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
      {
        "internalType": "address[]",
        "name": "pairs",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "indexes",
        "type": "uint256[]"
      },
      { "internalType": "address[]", "name": "tos", "type": "address[]" }
    ],
    "stateMutability": "nonpayable",
    "type": "function",
    "name": "withdrawMultiPositions",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "token0Amounts",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "token1Amounts",
        "type": "uint256[]"
      }
    ]
  },
  { "inputs": [], "stateMutability": "payable", "type": "receive" }
] as const