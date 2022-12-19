/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  MockBaal,
  MockBaalInterface,
} from "../../../../../../contracts/fixtures/Baal/contracts/mock/MockBaal";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_lootSingleton",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burnLoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lootPaused",
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
    inputs: [],
    name: "lootToken",
    outputs: [
      {
        internalType: "contract IBaalToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintLoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "paused",
        type: "bool",
      },
    ],
    name: "setLootPaused",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516108c13803806108c183398101604081905261002f91610238565b6100428361010c60201b6103ac1760201c565b60008054610100600160a81b0319166101006001600160a01b039384168102919091179182905560405191049091169063562d190d906100869085906020016102e6565b604051602081830303815290604052836040516020016100a6919061030f565b6040516020818303038152906040526040518363ffffffff1660e01b81526004016100d2929190610338565b600060405180830381600087803b1580156100ec57600080fd5b505af1158015610100573d6000803e3d6000fd5b505050505050506103ac565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f090506001600160a01b0381166101ac5760405162461bcd60e51b815260206004820152601660248201527f455243313136373a20637265617465206661696c656400000000000000000000604482015260640160405180910390fd5b919050565b600082601f8301126101c257600080fd5b81516001600160401b03808211156101dc576101dc610396565b604051601f8301601f19908116603f0116810190828211818310171561020457610204610396565b8160405283815286602085880101111561021d57600080fd5b61022e846020830160208901610366565b9695505050505050565b60008060006060848603121561024d57600080fd5b83516001600160a01b038116811461026457600080fd5b60208501519093506001600160401b038082111561028157600080fd5b61028d878388016101b1565b935060408601519150808211156102a357600080fd5b506102b0868287016101b1565b9150509250925092565b600081518084526102d2816020860160208601610366565b601f01601f19169290920160200192915050565b600082516102f8818460208701610366565b64081313d3d560da1b920191825250600501919050565b60008251610321818460208701610366565b640b5313d3d560da1b920191825250600501919050565b60408152600061034b60408301856102ba565b828103602084015261035d81856102ba565b95945050505050565b60005b83811015610381578181015183820152602001610369565b83811115610390576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b610506806103bb6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630ac419b21461005c5780632cdc48fc1461007e57806359cb2f06146100935780639bceb7f1146100a6578063f460124d146100b9575b600080fd5b6000546100699060ff1681565b60405190151581526020015b60405180910390f35b61009161008c366004610482565b6100e9565b005b6100916100a136600461044a565b6102fc565b6100916100b436600461044a565b61036d565b6000546100d19061010090046001600160a01b031681565b6040516001600160a01b039091168152602001610075565b600060019054906101000a90046001600160a01b03166001600160a01b0316635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561013757600080fd5b505afa15801561014b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016f91906104a6565b1580156101795750805b156101eb57600060019054906101000a90046001600160a01b03166001600160a01b0316638456cb596040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156101ce57600080fd5b505af11580156101e2573d6000803e3d6000fd5b505050506102e9565b600060019054906101000a90046001600160a01b03166001600160a01b0316635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561023957600080fd5b505afa15801561024d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027191906104a6565b801561027b575080155b156102e957600060019054906101000a90046001600160a01b03166001600160a01b0316633f4ba83a6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156102d057600080fd5b505af11580156102e4573d6000803e3d6000fd5b505050505b6000805460ff1916911515919091179055565b6000546040516340c10f1960e01b81526001600160a01b03848116600483015260248201849052610100909204909116906340c10f19906044015b600060405180830381600087803b15801561035157600080fd5b505af1158015610365573d6000803e3d6000fd5b505050505050565b600054604051632770a7eb60e21b81526001600160a01b0384811660048301526024820184905261010090920490911690639dc29fac90604401610337565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f090506001600160a01b0381166104455760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b604482015260640160405180910390fd5b919050565b6000806040838503121561045d57600080fd5b82356001600160a01b038116811461047457600080fd5b946020939093013593505050565b60006020828403121561049457600080fd5b813561049f816104bf565b9392505050565b6000602082840312156104b857600080fd5b815161049f815b80151581146104cd57600080fd5b5056fea2646970667358221220f19e9ac5f72835c7e7e870dbf1d939300666d3eb2fc3a59da57c750f3d26b67264736f6c63430008070033";

type MockBaalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockBaalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockBaal__factory extends ContractFactory {
  constructor(...args: MockBaalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _lootSingleton: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockBaal> {
    return super.deploy(
      _lootSingleton,
      _name,
      _symbol,
      overrides || {}
    ) as Promise<MockBaal>;
  }
  override getDeployTransaction(
    _lootSingleton: PromiseOrValue<string>,
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lootSingleton,
      _name,
      _symbol,
      overrides || {}
    );
  }
  override attach(address: string): MockBaal {
    return super.attach(address) as MockBaal;
  }
  override connect(signer: Signer): MockBaal__factory {
    return super.connect(signer) as MockBaal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockBaalInterface {
    return new utils.Interface(_abi) as MockBaalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockBaal {
    return new Contract(address, _abi, signerOrProvider) as MockBaal;
  }
}
