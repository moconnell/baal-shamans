/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface ExampleManagerShamanInterface extends utils.Interface {
  functions: {
    "baal()": FunctionFragment;
    "claim()": FunctionFragment;
    "claims(address)": FunctionFragment;
    "perPeriod()": FunctionFragment;
    "period()": FunctionFragment;
    "shares()": FunctionFragment;
    "token()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "baal"
      | "claim"
      | "claims"
      | "perPeriod"
      | "period"
      | "shares"
      | "token"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "baal", values?: undefined): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claims",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "perPeriod", values?: undefined): string;
  encodeFunctionData(functionFragment: "period", values?: undefined): string;
  encodeFunctionData(functionFragment: "shares", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "baal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claims", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "perPeriod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "period", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "Claim(address,uint256)": EventFragment;
    "SetMember(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Claim"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetMember"): EventFragment;
}

export interface ClaimEventObject {
  account: string;
  timestamp: BigNumber;
}
export type ClaimEvent = TypedEvent<[string, BigNumber], ClaimEventObject>;

export type ClaimEventFilter = TypedEventFilter<ClaimEvent>;

export interface SetMemberEventObject {
  account: string;
}
export type SetMemberEvent = TypedEvent<[string], SetMemberEventObject>;

export type SetMemberEventFilter = TypedEventFilter<SetMemberEvent>;

export interface ExampleManagerShaman extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExampleManagerShamanInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    baal(overrides?: CallOverrides): Promise<[string]>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claims(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    perPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    period(overrides?: CallOverrides): Promise<[BigNumber]>;

    shares(overrides?: CallOverrides): Promise<[boolean]>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  baal(overrides?: CallOverrides): Promise<string>;

  claim(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claims(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  perPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  period(overrides?: CallOverrides): Promise<BigNumber>;

  shares(overrides?: CallOverrides): Promise<boolean>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    baal(overrides?: CallOverrides): Promise<string>;

    claim(overrides?: CallOverrides): Promise<void>;

    claims(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    perPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    period(overrides?: CallOverrides): Promise<BigNumber>;

    shares(overrides?: CallOverrides): Promise<boolean>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Claim(address,uint256)"(
      account?: null,
      timestamp?: null
    ): ClaimEventFilter;
    Claim(account?: null, timestamp?: null): ClaimEventFilter;

    "SetMember(address)"(account?: null): SetMemberEventFilter;
    SetMember(account?: null): SetMemberEventFilter;
  };

  estimateGas: {
    baal(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claims(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    perPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    period(overrides?: CallOverrides): Promise<BigNumber>;

    shares(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    baal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claims(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    perPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    period(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
