/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface ILayerInterface extends utils.Interface {
  functions: {
    "afterCallValidation(bytes,bytes4,address,uint256,bytes,bytes)": FunctionFragment;
    "beforeCallValidation(bytes,bytes4,address,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "afterCallValidation"
      | "afterCallValidation(bytes,bytes4,address,uint256,bytes,bytes)"
      | "beforeCallValidation"
      | "beforeCallValidation(bytes,bytes4,address,uint256,bytes)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "afterCallValidation",
    values: [BytesLike, BytesLike, string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "afterCallValidation(bytes,bytes4,address,uint256,bytes,bytes)",
    values: [BytesLike, BytesLike, string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeCallValidation",
    values: [BytesLike, BytesLike, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeCallValidation(bytes,bytes4,address,uint256,bytes)",
    values: [BytesLike, BytesLike, string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "afterCallValidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterCallValidation(bytes,bytes4,address,uint256,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeCallValidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeCallValidation(bytes,bytes4,address,uint256,bytes)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ILayer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ILayerInterface;

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
    afterCallValidation(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      beforeCallResult: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "afterCallValidation(bytes,bytes4,address,uint256,bytes,bytes)"(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      beforeCallResult: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    beforeCallValidation(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "beforeCallValidation(bytes,bytes4,address,uint256,bytes)"(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  afterCallValidation(
    layerConfig: BytesLike,
    selector: BytesLike,
    sender: string,
    value: BigNumberish,
    data: BytesLike,
    beforeCallResult: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "afterCallValidation(bytes,bytes4,address,uint256,bytes,bytes)"(
    layerConfig: BytesLike,
    selector: BytesLike,
    sender: string,
    value: BigNumberish,
    data: BytesLike,
    beforeCallResult: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  beforeCallValidation(
    layerConfig: BytesLike,
    selector: BytesLike,
    sender: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "beforeCallValidation(bytes,bytes4,address,uint256,bytes)"(
    layerConfig: BytesLike,
    selector: BytesLike,
    sender: string,
    value: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    afterCallValidation(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      beforeCallResult: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "afterCallValidation(bytes,bytes4,address,uint256,bytes,bytes)"(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      beforeCallResult: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    beforeCallValidation(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "beforeCallValidation(bytes,bytes4,address,uint256,bytes)"(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    afterCallValidation(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      beforeCallResult: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "afterCallValidation(bytes,bytes4,address,uint256,bytes,bytes)"(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      beforeCallResult: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    beforeCallValidation(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "beforeCallValidation(bytes,bytes4,address,uint256,bytes)"(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    afterCallValidation(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      beforeCallResult: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "afterCallValidation(bytes,bytes4,address,uint256,bytes,bytes)"(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      beforeCallResult: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    beforeCallValidation(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "beforeCallValidation(bytes,bytes4,address,uint256,bytes)"(
      layerConfig: BytesLike,
      selector: BytesLike,
      sender: string,
      value: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
