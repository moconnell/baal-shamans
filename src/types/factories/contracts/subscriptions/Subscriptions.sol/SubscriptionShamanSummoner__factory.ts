/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SubscriptionShamanSummoner,
  SubscriptionShamanSummonerInterface,
} from "../../../../contracts/subscriptions/Subscriptions.sol/SubscriptionShamanSummoner";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_template",
        type: "address",
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
        name: "baal",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "onboarder",
        type: "address",
      },
    ],
    name: "SummonComplete",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_moloch",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_priceActivation",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pricePer",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lootPerUnit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_periodLength",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_shares",
        type: "bool",
      },
      {
        internalType: "address[]",
        name: "_cuts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "summonSubscription",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "template",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516105c53803806105c583398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610532806100936000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301e8a1e71461003b5780636f2ddd931461006a575b600080fd5b61004e6100493660046102dd565b61007d565b6040516001600160a01b03909116815260200160405180910390f35b60005461004e906001600160a01b031681565b600080548190610095906001600160a01b0316610154565b6040516324be106360e01b81529091506001600160a01b038216906324be1063906100d4908e908e908e908e908e908e908e908e908e906004016103d9565b600060405180830381600087803b1580156100ee57600080fd5b505af1158015610102573d6000803e3d6000fd5b50506040516001600160a01b0384811682528e1692507fbe67542a0d2584e637bb4a443f46b840f339fe74336ae26c28e7d2126a05c420915060200160405180910390a29a9950505050505050505050565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f090506001600160a01b0381166101ed5760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b604482015260640160405180910390fd5b919050565b600082601f83011261020357600080fd5b81356020610218610213836104aa565b610479565b80838252828201915082860187848660051b890101111561023857600080fd5b60005b8581101561026057813561024e816104e4565b8452928401929084019060010161023b565b5090979650505050505050565b600082601f83011261027e57600080fd5b8135602061028e610213836104aa565b80838252828201915082860187848660051b89010111156102ae57600080fd5b60005b85811015610260578135845292840192908401906001016102b1565b803580151581146101ed57600080fd5b60008060008060008060008060006101208a8c0312156102fc57600080fd5b8935610307816104e4565b985060208a0135610317816104e4565b975060408a0135965060608a0135955060808a0135945060a08a0135935061034160c08b016102cd565b925060e08a013567ffffffffffffffff8082111561035e57600080fd5b61036a8d838e016101f2565b93506101008c013591508082111561038157600080fd5b5061038e8c828d0161026d565b9150509295985092959850929598565b600081518084526020808501945080840160005b838110156103ce578151875295820195908201906001016103b2565b509495945050505050565b600061012080830160018060a01b03808e1685526020818e16818701528c60408701528b60608701528a60808701528960a087015288151560c08701528360e0870152829350875180845261014087019450818901935060005b81811015610451578451841686529482019493820193600101610433565b5050505050828103610100840152610469818561039e565b9c9b505050505050505050505050565b604051601f8201601f1916810167ffffffffffffffff811182821017156104a2576104a26104ce565b604052919050565b600067ffffffffffffffff8211156104c4576104c46104ce565b5060051b60200190565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146104f957600080fd5b5056fea26469706673582212204c9d9c1d10670418d46e2d4ae4df8e7a8cc55df4aacb7e859b12e6c37f8caf9764736f6c63430008070033";

type SubscriptionShamanSummonerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubscriptionShamanSummonerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SubscriptionShamanSummoner__factory extends ContractFactory {
  constructor(...args: SubscriptionShamanSummonerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _template: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SubscriptionShamanSummoner> {
    return super.deploy(
      _template,
      overrides || {}
    ) as Promise<SubscriptionShamanSummoner>;
  }
  override getDeployTransaction(
    _template: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_template, overrides || {});
  }
  override attach(address: string): SubscriptionShamanSummoner {
    return super.attach(address) as SubscriptionShamanSummoner;
  }
  override connect(signer: Signer): SubscriptionShamanSummoner__factory {
    return super.connect(signer) as SubscriptionShamanSummoner__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubscriptionShamanSummonerInterface {
    return new utils.Interface(_abi) as SubscriptionShamanSummonerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SubscriptionShamanSummoner {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SubscriptionShamanSummoner;
  }
}
