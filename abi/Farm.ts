export const FarmABI = [
    {
      "inputs": [
        { "internalType": "address", "name": "_owner", "type": "address" }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
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
          "internalType": "address",
          "name": "poolId",
          "type": "address",
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
        }
      ],
      "type": "event",
      "name": "GrantSP",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "poolId",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "uint256",
          "name": "rewardRate",
          "type": "uint256",
          "indexed": false
        },
        {
          "internalType": "uint256",
          "name": "weight",
          "type": "uint256",
          "indexed": false
        }
      ],
      "type": "event",
      "name": "RateUpdated",
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
          "internalType": "address",
          "name": "parent",
          "type": "address",
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
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "balanceOf",
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
      "name": "cooldown",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "getCurrentGlobalReserve",
      "outputs": [
        { "internalType": "uint256", "name": "reserve", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "poolId", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "getCurrentPoolReserve",
      "outputs": [
        { "internalType": "uint256", "name": "reserve", "type": "uint256" }
      ]
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "globalPool",
      "outputs": [
        { "internalType": "uint256", "name": "weight", "type": "uint256" },
        {
          "internalType": "uint256",
          "name": "rewardRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastUpdateTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastReserve",
          "type": "uint256"
        }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "grantSP"
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
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "pools",
      "outputs": [
        { "internalType": "uint256", "name": "weight", "type": "uint256" },
        {
          "internalType": "uint256",
          "name": "rewardRate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastUpdateTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastReserve",
          "type": "uint256"
        }
      ]
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
          "internalType": "uint256",
          "name": "rewardRate",
          "type": "uint256"
        },
        { "internalType": "uint256", "name": "weight", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "setGlobalRewardRate"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "poolId", "type": "address" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "setPool"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "poolId", "type": "address" },
        {
          "internalType": "uint256",
          "name": "rewardRate",
          "type": "uint256"
        },
        { "internalType": "uint256", "name": "weight", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "setPoolRewardRate"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_owner", "type": "address" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "transferOwnership"
    }
  ] as const