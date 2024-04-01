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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface IVictimInterface extends utils.Interface {
  functions: {
    "drainedMethod()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "drainedMethod" | "drainedMethod()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "drainedMethod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "drainedMethod()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "drainedMethod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "drainedMethod()",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IVictim extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVictimInterface;

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
    drainedMethod(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "drainedMethod()"(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  drainedMethod(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "drainedMethod()"(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    drainedMethod(overrides?: CallOverrides): Promise<void>;

    "drainedMethod()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    drainedMethod(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "drainedMethod()"(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    drainedMethod(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "drainedMethod()"(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}