/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MyToken,
  MyTokenInterface,
} from "../../../contracts/mock/MyToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "to",
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
    name: "renounceOwnership",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000ee538038062000ee583398101604081905262000034916200032b565b6040518060400160405280600781526020016626bcaa37b5b2b760c91b815250604051806040016040528060038152602001624d544b60e81b81525081600390805190602001906200008892919062000285565b5080516200009e90600490602084019062000285565b505050620000bb620000b5620000ce60201b60201c565b620000d2565b620000c7338262000124565b50620003a9565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6200012e6200013e565b6200013a8282620001a0565b5050565b6005546001600160a01b031633146200019e5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b565b6001600160a01b038216620001f85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640162000195565b80600260008282546200020c919062000345565b90915550506001600160a01b038216600090815260208190526040812080548392906200023b90849062000345565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b82805462000293906200036c565b90600052602060002090601f016020900481019282620002b7576000855562000302565b82601f10620002d257805160ff191683800117855562000302565b8280016001018555821562000302579182015b8281111562000302578251825591602001919060010190620002e5565b506200031092915062000314565b5090565b5b8082111562000310576000815560010162000315565b6000602082840312156200033e57600080fd5b5051919050565b600082198211156200036757634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200038157607f821691505b60208210811415620003a357634e487b7160e01b600052602260045260246000fd5b50919050565b610b2c80620003b96000396000f3fe608060405234801561001057600080fd5b50600436106100d55760003560e01c806370a082311161008757806370a0823114610177578063715018a6146101a05780638da5cb5b146101a857806395d89b41146101c3578063a457c2d7146101cb578063a9059cbb146101de578063dd62ed3e146101f1578063f2fde38b1461020457600080fd5b806306fdde03146100da578063095ea7b3146100f857806318160ddd1461011b57806323b872dd1461012d578063313ce56714610140578063395093511461014f57806340c10f1914610162575b600080fd5b6100e2610217565b6040516100ef9190610a40565b60405180910390f35b61010b610106366004610a16565b6102a9565b60405190151581526020016100ef565b6002545b6040519081526020016100ef565b61010b61013b3660046109da565b6102c1565b604051601281526020016100ef565b61010b61015d366004610a16565b6102e5565b610175610170366004610a16565b610307565b005b61011f610185366004610985565b6001600160a01b031660009081526020819052604090205490565b61017561031d565b6005546040516001600160a01b0390911681526020016100ef565b6100e2610331565b61010b6101d9366004610a16565b610340565b61010b6101ec366004610a16565b6103c0565b61011f6101ff3660046109a7565b6103ce565b610175610212366004610985565b6103f9565b60606003805461022690610abb565b80601f016020809104026020016040519081016040528092919081815260200182805461025290610abb565b801561029f5780601f106102745761010080835404028352916020019161029f565b820191906000526020600020905b81548152906001019060200180831161028257829003601f168201915b5050505050905090565b6000336102b7818585610472565b5060019392505050565b6000336102cf858285610596565b6102da858585610610565b506001949350505050565b6000336102b78185856102f883836103ce565b6103029190610a95565b610472565b61030f6107de565b6103198282610838565b5050565b6103256107de565b61032f6000610917565b565b60606004805461022690610abb565b6000338161034e82866103ce565b9050838110156103b35760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102da8286868403610472565b6000336102b7818585610610565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6104016107de565b6001600160a01b0381166104665760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103aa565b61046f81610917565b50565b6001600160a01b0383166104d45760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103aa565b6001600160a01b0382166105355760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103aa565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006105a284846103ce565b9050600019811461060a57818110156105fd5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103aa565b61060a8484848403610472565b50505050565b6001600160a01b0383166106745760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103aa565b6001600160a01b0382166106d65760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103aa565b6001600160a01b0383166000908152602081905260409020548181101561074e5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103aa565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610785908490610a95565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107d191815260200190565b60405180910390a361060a565b6005546001600160a01b0316331461032f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103aa565b6001600160a01b03821661088e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103aa565b80600260008282546108a09190610a95565b90915550506001600160a01b038216600090815260208190526040812080548392906108cd908490610a95565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80356001600160a01b038116811461098057600080fd5b919050565b60006020828403121561099757600080fd5b6109a082610969565b9392505050565b600080604083850312156109ba57600080fd5b6109c383610969565b91506109d160208401610969565b90509250929050565b6000806000606084860312156109ef57600080fd5b6109f884610969565b9250610a0660208501610969565b9150604084013590509250925092565b60008060408385031215610a2957600080fd5b610a3283610969565b946020939093013593505050565b600060208083528351808285015260005b81811015610a6d57858101830151858201604001528201610a51565b81811115610a7f576000604083870101525b50601f01601f1916929092016040019392505050565b60008219821115610ab657634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680610acf57607f821691505b60208210811415610af057634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220678965612d52b83bb5b79c233f72a88528be412e6e7655d9cabf363347b97e2c64736f6c63430008070033";

type MyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyToken__factory extends ContractFactory {
  constructor(...args: MyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MyToken> {
    return super.deploy(amount, overrides || {}) as Promise<MyToken>;
  }
  override getDeployTransaction(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(amount, overrides || {});
  }
  override attach(address: string): MyToken {
    return super.attach(address) as MyToken;
  }
  override connect(signer: Signer): MyToken__factory {
    return super.connect(signer) as MyToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenInterface {
    return new utils.Interface(_abi) as MyTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyToken {
    return new Contract(address, _abi, signerOrProvider) as MyToken;
  }
}