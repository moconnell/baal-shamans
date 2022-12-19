/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SubscriptionShaman,
  SubscriptionShamanInterface,
} from "../../../../contracts/subscriptions/Subscriptions.sol/SubscriptionShaman";

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
        name: "contributorAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "baal",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lootToGive",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lootToPlatform",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "starDate",
        type: "uint256",
      },
    ],
    name: "Subscription",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "amounts",
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
    name: "baal",
    outputs: [
      {
        internalType: "contract IBAAL",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "cuts",
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
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lootPerPeriod",
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
    name: "periodLength",
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
    name: "priceActivation",
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
    name: "pricePerPeriod",
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
    name: "shares",
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
    name: "subscribe",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "subscriberIdxs",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "subscribers",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "starDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastPaymentDate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "streak",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isActive",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "subscriber",
        type: "address",
      },
    ],
    name: "triggerPayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526001600b553480156200001657600080fd5b506001600081905554610100900460ff16158080156200003a57506001805460ff16105b8062000069575062000057306200014160201b62000df01760201c565b1580156200006957506001805460ff16145b620000d15760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6001805460ff1916811790558015620000f4576001805461ff0019166101001790555b80156200013a576001805461ff00191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5062000150565b6001600160a01b03163b151590565b6115fb80620001606000396000f3fe6080604052600436106100d35760003560e01c80638f449a051161007a5780638f449a0514610210578063a4fe8a1814610218578063b27fb3111461022e578063d2ca211514610266578063e5a2a2a51461027c578063ea8a1af01461029c578063f972ed45146102b1578063fc0c546a146102d157600080fd5b806303314efa146100d857806306661abd1461010757806309e411351461012b57806324be10631461015857806345f0a44f1461017a57806359221a681461019a57806383651ef3146101e45780638d31d3b7146101fa575b600080fd5b3480156100e457600080fd5b506006546100f29060ff1681565b60405190151581526020015b60405180910390f35b34801561011357600080fd5b5061011d600b5481565b6040519081526020016100fe565b34801561013757600080fd5b5061011d6101463660046112e1565b600d6020526000908152604090205481565b34801561016457600080fd5b50610178610173366004611322565b6102f1565b005b34801561018657600080fd5b5061011d610195366004611400565b610485565b3480156101a657600080fd5b506101ba6101b5366004611400565b6104a6565b6040805195865260208601949094529284019190915260608301521515608082015260a0016100fe565b3480156101f057600080fd5b5061011d60045481565b34801561020657600080fd5b5061011d60025481565b6101786104ea565b34801561022457600080fd5b5061011d60035481565b34801561023a57600080fd5b5061024e610249366004611400565b6109ff565b6040516001600160a01b0390911681526020016100fe565b34801561027257600080fd5b5061011d60055481565b34801561028857600080fd5b5060095461024e906001600160a01b031681565b3480156102a857600080fd5b50610178610a29565b3480156102bd57600080fd5b506101786102cc3660046112e1565b610b13565b3480156102dd57600080fd5b50600a5461024e906001600160a01b031681565b600154610100900460ff161580801561030e57506001805460ff16105b8061032e575061031d30610df0565b15801561032e57506001805460ff16145b6103965760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6001805460ff19168117905580156103b8576001805461ff0019166101001790555b600980546001600160a01b03808d166001600160a01b031992831617909255600a8054928c169290911691909117905560028890556003879055600486905560058590556006805485151560ff19909116179055825161041f906007906020860190611141565b5081516104339060089060208501906111a6565b508015610479576001805461ff00191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050505050505050565b6008818154811061049557600080fd5b600091825260209091200154905081565b600c81815481106104b657600080fd5b6000918252602090912060059091020180546001820154600283015460038401546004909401549294509092909160ff1685565b336000908152600d602052604090205480158061052e5750600c818154811061051557610515611573565b600091825260209091206004600590920201015460ff16155b61056b5760405162461bcd60e51b815260206004820152600e60248201526d616c72656164792061637469766560901b604482015260640161038d565b34600254146105b35760405162461bcd60e51b815260206004820152601460248201527377726f6e672061637469766174696f6e2066656560601b604482015260640161038d565b60095460408051636a5c1cc960e11b815290516000926001600160a01b03169163d4b8399291600480830192602092919082900301818787803b1580156105f957600080fd5b505af115801561060d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106319190611305565b6001600160a01b031660025460405160006040518083038185875af1925050503d806000811461067d576040519150601f19603f3d011682016040523d82523d6000602084013e610682565b606091505b50509050806106c55760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b604482015260640161038d565b600a5460095460408051636a5c1cc960e11b815290516000936001600160a01b03908116936323b872dd933393919092169163d4b8399291600480830192602092919082900301818a87803b15801561071d57600080fd5b505af1158015610731573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107559190611305565b6003546040518463ffffffff1660e01b815260040161077693929190611419565b602060405180830381600087803b15801561079057600080fd5b505af11580156107a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c891906113e3565b9050806108105760405162461bcd60e51b8152602060048201526016602482015275195c98cc8c0e88151c985b9cd9995c8819985a5b195960521b604482015260640161038d565b8261094b57600b8054336000908152600d60209081526040808320849055805160a0810182529384524291840182815290840191825260016060850181815260808601828152600c80549384018155865295517fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c760059093029283015591517fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c882015591517fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c9830155517fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8ca82015591517fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8cb909201805460ff1916921515929092179091558154919061094183611542565b91905055506109f1565b6001600c610959828661152b565b8154811061096957610969611573565b60009182526020909120600590910201600401805460ff191691151591909117905542600c61099960018661152b565b815481106109a9576109a9611573565b60009182526020909120600260059092020101556001600c6109cb828661152b565b815481106109db576109db611573565b9060005260206000209060050201600301819055505b6109fa33610dff565b505050565b60078181548110610a0f57600080fd5b6000918252602090912001546001600160a01b0316905081565b336000908152600d6020526040812054610a459060019061152b565b9050600c8181548110610a5a57610a5a611573565b600091825260209091206004600590920201015460ff161515600114610aaf5760405162461bcd60e51b815260206004820152600a6024820152696e6f742061637469766560b01b604482015260640161038d565b6000600c8281548110610ac457610ac4611573565b60009182526020822060059190910201600401805460ff191692151592909217909155600c805483908110610afb57610afb611573565b90600052602060002090600502016003018190555050565b6001600160a01b0381166000908152600d6020526040812054610b389060019061152b565b9050600c8181548110610b4d57610b4d611573565b600091825260209091206004600590920201015460ff16610ba15760405162461bcd60e51b815260206004820152600e60248201526d10b0b1ba34bb329036b2b6b132b960911b604482015260640161038d565b6000600c8281548110610bb657610bb6611573565b90600052602060002090600502016002015442610bd3919061152b565b90506005548111156109fa57600060055482610bef9190611509565b905060005b81811015610dc057600a5460095460408051636a5c1cc960e11b815290516000936001600160a01b03908116936323b872dd938b93919092169163d4b8399291600480830192602092919082900301818a87803b158015610c5457600080fd5b505af1158015610c68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8c9190611305565b6003546040518463ffffffff1660e01b8152600401610cad93929190611419565b602060405180830381600087803b158015610cc757600080fd5b505af1158015610cdb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cff91906113e3565b905080610d6d576000600c8681548110610d1b57610d1b611573565b60009182526020822060059190910201600401805460ff191692151592909217909155600c805487908110610d5257610d52611573565b90600052602060002090600502016003018190555050610dc0565b610d7686610dff565b600c8581548110610d8957610d89611573565b600091825260208220600360059092020101805491610da783611542565b9190505550508080610db890611542565b915050610bf4565b5042600c8481548110610dd557610dd5611573565b90600052602060002090600502016002018190555050505050565b6001600160a01b03163b151590565b604080516001808252818301909252600091602080830190803683370190505090508181600081518110610e3557610e35611573565b6001600160a01b03929092166020928302919091019091015260408051600180825281830190925260009181602001602082028036833701905050905060045481600081518110610e8857610e88611573565b602090810291909101015260065460ff1615610f0757600954604051632c78fd0360e21b81526001600160a01b039091169063b1e3f40c90610ed0908590859060040161143d565b600060405180830381600087803b158015610eea57600080fd5b505af1158015610efe573d6000803e3d6000fd5b50505050610f6c565b6009546040516322936c2360e11b81526001600160a01b0390911690634526d84690610f39908590859060040161143d565b600060405180830381600087803b158015610f5357600080fd5b505af1158015610f67573d6000803e3d6000fd5b505050505b60075460009067ffffffffffffffff811115610f8a57610f8a611589565b604051908082528060200260200182016040528015610fb3578160200160208202803683370190505b50905060005b6007548110156110305760078181548110610fd657610fd6611573565b9060005260206000200160009054906101000a90046001600160a01b031682828151811061100657611006611573565b6001600160a01b03909216602092830291909101909101528061102881611542565b915050610fb9565b5060085460009067ffffffffffffffff81111561104f5761104f611589565b604051908082528060200260200182016040528015611078578160200160208202803683370190505b50905060005b6008548110156110d5576008818154811061109b5761109b611573565b90600052602060002001548282815181106110b8576110b8611573565b6020908102919091010152806110cd81611542565b91505061107e565b506009546040516322936c2360e11b81526001600160a01b0390911690634526d84690611108908790879060040161143d565b600060405180830381600087803b15801561112257600080fd5b505af1158015611136573d6000803e3d6000fd5b505050505050505050565b828054828255906000526020600020908101928215611196579160200282015b8281111561119657825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611161565b506111a29291506111e1565b5090565b828054828255906000526020600020908101928215611196579160200282015b828111156111965782518255916020019190600101906111c6565b5b808211156111a257600081556001016111e2565b600082601f83011261120757600080fd5b8135602061121c611217836114e5565b6114b4565b80838252828201915082860187848660051b890101111561123c57600080fd5b60005b858110156112645781356112528161159f565b8452928401929084019060010161123f565b5090979650505050505050565b600082601f83011261128257600080fd5b81356020611292611217836114e5565b80838252828201915082860187848660051b89010111156112b257600080fd5b60005b85811015611264578135845292840192908401906001016112b5565b80356112dc816115b7565b919050565b6000602082840312156112f357600080fd5b81356112fe8161159f565b9392505050565b60006020828403121561131757600080fd5b81516112fe8161159f565b60008060008060008060008060006101208a8c03121561134157600080fd5b893561134c8161159f565b985060208a013561135c8161159f565b975060408a0135965060608a0135955060808a0135945060a08a0135935061138660c08b016112d1565b925060e08a013567ffffffffffffffff808211156113a357600080fd5b6113af8d838e016111f6565b93506101008c01359150808211156113c657600080fd5b506113d38c828d01611271565b9150509295985092959850929598565b6000602082840312156113f557600080fd5b81516112fe816115b7565b60006020828403121561141257600080fd5b5035919050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b604080825283519082018190526000906020906060840190828701845b8281101561147f5781516001600160a01b03168452928401929084019060010161145a565b5050508381038285015284518082528583019183019060005b8181101561126457835183529284019291840191600101611498565b604051601f8201601f1916810167ffffffffffffffff811182821017156114dd576114dd611589565b604052919050565b600067ffffffffffffffff8211156114ff576114ff611589565b5060051b60200190565b60008261152657634e487b7160e01b600052601260045260246000fd5b500490565b60008282101561153d5761153d61155d565b500390565b60006000198214156115565761155661155d565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146115b457600080fd5b50565b80151581146115b457600080fdfea2646970667358221220d535d0a4db302a3cb7185cc354d5ee87c6c40c2fb2e5ac391fdcf236bae240aa64736f6c63430008070033";

type SubscriptionShamanConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubscriptionShamanConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SubscriptionShaman__factory extends ContractFactory {
  constructor(...args: SubscriptionShamanConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SubscriptionShaman> {
    return super.deploy(overrides || {}) as Promise<SubscriptionShaman>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SubscriptionShaman {
    return super.attach(address) as SubscriptionShaman;
  }
  override connect(signer: Signer): SubscriptionShaman__factory {
    return super.connect(signer) as SubscriptionShaman__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubscriptionShamanInterface {
    return new utils.Interface(_abi) as SubscriptionShamanInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SubscriptionShaman {
    return new Contract(address, _abi, signerOrProvider) as SubscriptionShaman;
  }
}
