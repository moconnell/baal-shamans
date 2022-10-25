/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  Loot,
  LootInterface,
} from "../../../../../../contracts/fixtures/Baal/contracts/LootERC20.sol/Loot";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Snapshot",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "snapshotId",
        type: "uint256",
      },
    ],
    name: "balanceOfAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    name: "setUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "snapshot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "snapshotId",
        type: "uint256",
      },
    ],
    name: "totalSupplyAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060601b6080523480156200001857600080fd5b506200002362000029565b620000eb565b600054610100900460ff1615620000965760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015620000e9576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b60805160601c61283962000126600039600081816105d20152818161061b015281816107370152818161077701526107ef01526128396000f3fe6080604052600436106101825760003560e01c80635c975abb116100d75780639711715a116100855780639711715a146103f1578063981b24d0146104065780639dc29fac14610426578063a457c2d714610446578063a9059cbb14610466578063d505accf14610486578063dd62ed3e146104a6578063f2fde38b146104c657600080fd5b80635c975abb1461033157806370a0823114610349578063715018a6146103695780637ecebe001461037e5780638456cb591461039e5780638da5cb5b146103b357806395d89b41146103dc57600080fd5b8063395093511161013457806339509351146102745780633f4ba83a1461029457806340c10f19146102a95780634ee2cd7e146102c95780634f1ef286146102e957806352d1902d146102fc578063562d190d1461031157600080fd5b806306fdde0314610187578063095ea7b3146101b257806318160ddd146101e257806323b872dd14610201578063313ce567146102215780633644e5151461023d5780633659cfe614610252575b600080fd5b34801561019357600080fd5b5061019c6104e6565b6040516101a9919061257c565b60405180910390f35b3480156101be57600080fd5b506101d26101cd3660046124aa565b610578565b60405190151581526020016101a9565b3480156101ee57600080fd5b506035545b6040519081526020016101a9565b34801561020d57600080fd5b506101d261021c366004612399565b610592565b34801561022d57600080fd5b50604051601281526020016101a9565b34801561024957600080fd5b506101f36105b8565b34801561025e57600080fd5b5061027261026d36600461234b565b6105c7565b005b34801561028057600080fd5b506101d261028f3660046124aa565b610699565b3480156102a057600080fd5b506102726106bb565b3480156102b557600080fd5b506102726102c43660046124aa565b6106cd565b3480156102d557600080fd5b506101f36102e43660046124aa565b6106e3565b6102726102f7366004612448565b61072c565b34801561030857600080fd5b506101f36107e2565b34801561031d57600080fd5b5061027261032c3660046124ed565b610890565b34801561033d57600080fd5b5060fe5460ff166101d2565b34801561035557600080fd5b506101f361036436600461234b565b610a38565b34801561037557600080fd5b50610272610a53565b34801561038a57600080fd5b506101f361039936600461234b565b610a65565b3480156103aa57600080fd5b50610272610a83565b3480156103bf57600080fd5b50610130546040516001600160a01b0390911681526020016101a9565b3480156103e857600080fd5b5061019c610a93565b3480156103fd57600080fd5b50610272610aa2565b34801561041257600080fd5b506101f3610421366004612547565b610ab2565b34801561043257600080fd5b506102726104413660046124aa565b610add565b34801561045257600080fd5b506101d26104613660046124aa565b610aef565b34801561047257600080fd5b506101d26104813660046124aa565b610b75565b34801561049257600080fd5b506102726104a13660046123d5565b610b83565b3480156104b257600080fd5b506101f36104c1366004612366565b610ce7565b3480156104d257600080fd5b506102726104e136600461234b565b610d12565b6060603680546104f59061270f565b80601f01602080910402602001604051908101604052809291908181526020018280546105219061270f565b801561056e5780601f106105435761010080835404028352916020019161056e565b820191906000526020600020905b81548152906001019060200180831161055157829003601f168201915b5050505050905090565b600033610586818585610d88565b60019150505b92915050565b6000336105a0858285610eac565b6105ab858585610f26565b60019150505b9392505050565b60006105c26110ed565b905090565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156106195760405162461bcd60e51b8152600401610610906125af565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661064b611168565b6001600160a01b0316146106715760405162461bcd60e51b8152600401610610906125fb565b61067a81611184565b604080516000808252602082019092526106969183919061118c565b50565b6000336105868185856106ac8383610ce7565b6106b69190612692565b610d88565b6106c3611306565b6106cb611361565b565b6106d5611306565b6106df82826113b3565b5050565b6001600160a01b03821660009081526065602052604081208190819061070a90859061148c565b91509150816107215761071c85610a38565b610723565b805b95945050505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156107755760405162461bcd60e51b8152600401610610906125af565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107a7611168565b6001600160a01b0316146107cd5760405162461bcd60e51b8152600401610610906125fb565b6107d682611184565b6106df8282600161118c565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461087d5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c6044820152771b1959081d1a1c9bdd59da0819195b1959d85d1958d85b1b60421b6064820152608401610610565b5060008051602061279d83398151915290565b600054610100900460ff16158080156108b05750600054600160ff909116105b806108ca5750303b1580156108ca575060005460ff166001145b61092d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610610565b6000805460ff191660011790558015610950576000805461ff0019166101001790555b825161098c5760405162461bcd60e51b815260206004820152600b60248201526a4c6e616d6520656d70747960a81b6044820152606401610610565b81516109ca5760405162461bcd60e51b815260206004820152600d60248201526c4c73796d626f6c20656d70747960981b6044820152606401610610565b6109d48383611583565b6109dd836115b4565b6109e56115fe565b6109ed61162d565b8015610a33576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b6001600160a01b031660009081526033602052604090205490565b610a5b611306565b6106cb600061165c565b6001600160a01b038116600090815260cb602052604081205461058c565b610a8b611306565b6106cb6116af565b6060603780546104f59061270f565b610aaa611306565b6106966116ec565b6000806000610ac284606661148c565b9150915081610ad357603554610ad5565b805b949350505050565b610ae5611306565b6106df8282611746565b60003381610afd8286610ce7565b905083811015610b5d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610610565b610b6a8286868403610d88565b506001949350505050565b600033610586818585610f26565b83421115610bd35760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610610565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610c028c61188e565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610c5d826118b6565b90506000610c6d82878787611904565b9050896001600160a01b0316816001600160a01b031614610cd05760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610610565b610cdb8a8a8a610d88565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b610d1a611306565b6001600160a01b038116610d7f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610610565b6106968161165c565b6001600160a01b038316610dea5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610610565b6001600160a01b038216610e4b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610610565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610eb88484610ce7565b90506000198114610f205781811015610f135760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610610565b610f208484848403610d88565b50505050565b6001600160a01b038316610f8a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610610565b6001600160a01b038216610fec5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610610565b610ff783838361192c565b6001600160a01b0383166000908152603360205260409020548181101561106f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610610565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906110a6908490612692565b92505081905550826001600160a01b0316846001600160a01b03166000805160206127e4833981519152846040516110e091815260200190565b60405180910390a3610f20565b60006105c27f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61111c60975490565b6098546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b60008051602061279d833981519152546001600160a01b031690565b610696611306565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156111bf57610a33836119b4565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156111f857600080fd5b505afa925050508015611228575060408051601f3d908101601f19168201909252611225918101906124d4565b60015b61128b5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610610565b60008051602061279d83398151915281146112fa5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610610565b50610a33838383611a50565b610130546001600160a01b031633146106cb5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610610565b611369611a75565b60fe805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0382166114095760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610610565b6114156000838361192c565b80603560008282546114279190612692565b90915550506001600160a01b03821660009081526033602052604081208054839290611454908490612692565b90915550506040518181526001600160a01b038316906000906000805160206127e48339815191529060200160405180910390a35050565b600080600084116114d85760405162461bcd60e51b815260206004820152601660248201527504552433230536e617073686f743a20696420697320360541b6044820152606401610610565b6114e0611abe565b84111561152f5760405162461bcd60e51b815260206004820152601d60248201527f4552433230536e617073686f743a206e6f6e6578697374656e742069640000006044820152606401610610565b600061153b8486611ac9565b845490915081141561155457600080925092505061157c565b600184600101828154811061156b5761156b612770565b906000526020600020015492509250505b9250929050565b600054610100900460ff166115aa5760405162461bcd60e51b815260040161061090612647565b6106df8282611b8c565b600054610100900460ff166115db5760405162461bcd60e51b815260040161061090612647565b61069681604051806040016040528060018152602001603160f81b815250611bda565b600054610100900460ff166116255760405162461bcd60e51b815260040161061090612647565b6106cb611c1b565b600054610100900460ff166116545760405162461bcd60e51b815260040161061090612647565b6106cb611c4e565b61013080546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6116b7611c7e565b60fe805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113963390565b60006116fc606880546001019055565b6000611706611abe565b90507f8030e83b04d87bef53480e26263266d6ca66863aa8506aca6f2559d18aa1cb678160405161173991815260200190565b60405180910390a1919050565b6001600160a01b0382166117a65760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610610565b6117b28260008361192c565b6001600160a01b038216600090815260336020526040902054818110156118265760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610610565b6001600160a01b03831660009081526033602052604081208383039055603580548492906118559084906126cc565b90915550506040518281526000906001600160a01b038516906000805160206127e48339815191529060200160405180910390a3505050565b6001600160a01b038116600090815260cb602052604090208054600181018255905b50919050565b600061058c6118c36110ed565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061191587878787611cc4565b9150915061192281611da7565b5095945050505050565b611937838383611f5d565b6001600160a01b038316158061196a5750610130546001600160a01b03163314801561196a57506001600160a01b038216155b80611978575060fe5460ff16155b610a335760405162461bcd60e51b815260206004820152600d60248201526c217472616e7366657261626c6560981b6044820152606401610610565b6001600160a01b0381163b611a215760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610610565b60008051602061279d83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b611a5983611fa5565b600082511180611a665750805b15610a3357610f208383611fe5565b60fe5460ff166106cb5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610610565b60006105c260685490565b8154600090611ada5750600061058c565b82546000905b80821015611b36576000611af4838361200a565b905084868281548110611b0957611b09612770565b90600052602060002001541115611b2257809150611b30565b611b2d816001612692565b92505b50611ae0565b600082118015611b6b57508385611b4e6001856126cc565b81548110611b5e57611b5e612770565b9060005260206000200154145b15611b8457611b7b6001836126cc565b9250505061058c565b50905061058c565b600054610100900460ff16611bb35760405162461bcd60e51b815260040161061090612647565b8151611bc6906036906020850190612205565b508051610a33906037906020840190612205565b600054610100900460ff16611c015760405162461bcd60e51b815260040161061090612647565b815160209283012081519190920120609791909155609855565b600054610100900460ff16611c425760405162461bcd60e51b815260040161061090612647565b60fe805460ff19169055565b600054610100900460ff16611c755760405162461bcd60e51b815260040161061090612647565b6106cb3361165c565b60fe5460ff16156106cb5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610610565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b03831115611cf15750600090506003611d9e565b8460ff16601b14158015611d0957508460ff16601c14155b15611d1a5750600090506004611d9e565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611d6e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611d9757600060019250925050611d9e565b9150600090505b94509492505050565b6000816004811115611dbb57611dbb61275a565b1415611dc45750565b6001816004811115611dd857611dd861275a565b1415611e215760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610610565b6002816004811115611e3557611e3561275a565b1415611e835760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610610565b6003816004811115611e9757611e9761275a565b1415611ef05760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610610565b6004816004811115611f0457611f0461275a565b14156106965760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610610565b6001600160a01b038316611f7c57611f7482612025565b610a3361204f565b6001600160a01b038216611f9357611f7483612025565b611f9c83612025565b610a3382612025565b611fae816119b4565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606105b183836040518060600160405280602781526020016127bd6027913961205d565b600061201960028484186126aa565b6105b190848416612692565b6001600160a01b03811660009081526065602052604090206106969061204a83610a38565b61213a565b6106cb606661204a60355490565b60606001600160a01b0384163b6120c55760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610610565b600080856001600160a01b0316856040516120e09190612560565b600060405180830381855af49150503d806000811461211b576040519150601f19603f3d011682016040523d82523d6000602084013e612120565b606091505b5091509150612130828286612184565b9695505050505050565b6000612144611abe565b905080612150846121bd565b1015610a33578254600180820185556000858152602080822090930193909355938401805494850181558252902090910155565b606083156121935750816105b1565b8251156121a35782518084602001fd5b8160405162461bcd60e51b8152600401610610919061257c565b80546000906121ce57506000919050565b815482906121de906001906126cc565b815481106121ee576121ee612770565b90600052602060002001549050919050565b919050565b8280546122119061270f565b90600052602060002090601f0160209004810192826122335760008555612279565b82601f1061224c57805160ff1916838001178555612279565b82800160010185558215612279579182015b8281111561227957825182559160200191906001019061225e565b50612285929150612289565b5090565b5b80821115612285576000815560010161228a565b600067ffffffffffffffff808411156122b9576122b9612786565b604051601f8501601f19908116603f011681019082821181831017156122e1576122e1612786565b816040528093508581528686860111156122fa57600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b038116811461220057600080fd5b600082601f83011261233c57600080fd5b6105b18383356020850161229e565b60006020828403121561235d57600080fd5b6105b182612314565b6000806040838503121561237957600080fd5b61238283612314565b915061239060208401612314565b90509250929050565b6000806000606084860312156123ae57600080fd5b6123b784612314565b92506123c560208501612314565b9150604084013590509250925092565b600080600080600080600060e0888a0312156123f057600080fd5b6123f988612314565b965061240760208901612314565b95506040880135945060608801359350608088013560ff8116811461242b57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561245b57600080fd5b61246483612314565b9150602083013567ffffffffffffffff81111561248057600080fd5b8301601f8101851361249157600080fd5b6124a08582356020840161229e565b9150509250929050565b600080604083850312156124bd57600080fd5b6124c683612314565b946020939093013593505050565b6000602082840312156124e657600080fd5b5051919050565b6000806040838503121561250057600080fd5b823567ffffffffffffffff8082111561251857600080fd5b6125248683870161232b565b9350602085013591508082111561253a57600080fd5b506124a08582860161232b565b60006020828403121561255957600080fd5b5035919050565b600082516125728184602087016126e3565b9190910192915050565b602081526000825180602084015261259b8160408501602087016126e3565b601f01601f19169190910160400192915050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600082198211156126a5576126a5612744565b500190565b6000826126c757634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156126de576126de612744565b500390565b60005b838110156126fe5781810151838201526020016126e6565b83811115610f205750506000910152565b600181811c9082168061272357607f821691505b602082108114156118b057634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220731f3ca6f8568e251a829e1c42ee04d7cea8406c041f50d547eed2749d77e97a64736f6c63430008070033";

type LootConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LootConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Loot__factory extends ContractFactory {
  constructor(...args: LootConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Loot> {
    return super.deploy(overrides || {}) as Promise<Loot>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Loot {
    return super.attach(address) as Loot;
  }
  override connect(signer: Signer): Loot__factory {
    return super.connect(signer) as Loot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LootInterface {
    return new utils.Interface(_abi) as LootInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Loot {
    return new Contract(address, _abi, signerOrProvider) as Loot;
  }
}
