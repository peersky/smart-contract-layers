/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SampleLayer, SampleLayerInterface } from "../../src/SampleLayer";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "afterCallValidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "beforeCallValidation",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610505806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633a3cbe1d1461003b578063a08e25f714610050575b600080fd5b61004e6100493660046102c3565b610079565b005b61006361005e366004610375565b610089565b6040516100709190610404565b60405180910390f35b6100816100ba565b505050505050565b60606100936100d1565b60408051602081019290925201604051602081830303815290604052905095945050505050565b600180549060006100ca83610470565b9190505550565b60015460009081526020819052604081205460ff1615610151576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f7265656e7472616e637920636175676874210000000000000000000000000000604482015260640160405180910390fd5b5060018054600090815260208190526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016821790555490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126101d057600080fd5b813567ffffffffffffffff808211156101eb576101eb610190565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561023157610231610190565b8160405283815286602085880101111561024a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b80357fffffffff000000000000000000000000000000000000000000000000000000008116811461029a57600080fd5b919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461029a57600080fd5b60008060008060008060c087890312156102dc57600080fd5b863567ffffffffffffffff808211156102f457600080fd5b6103008a838b016101bf565b975061030e60208a0161026a565b965061031c60408a0161029f565b955060608901359450608089013591508082111561033957600080fd5b6103458a838b016101bf565b935060a089013591508082111561035b57600080fd5b5061036889828a016101bf565b9150509295509295509295565b600080600080600060a0868803121561038d57600080fd5b853567ffffffffffffffff808211156103a557600080fd5b6103b189838a016101bf565b96506103bf6020890161026a565b95506103cd6040890161029f565b94506060880135935060808801359150808211156103ea57600080fd5b506103f7888289016101bf565b9150509295509295909350565b600060208083528351808285015260005b8181101561043157858101830151858201604001528201610415565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036104c8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea26469706673582212201894fd39182f4fb70b964e3d297d07284e8f79860d8fdf6b2598c664b34c168664736f6c63430008140033";

type SampleLayerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SampleLayerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SampleLayer__factory extends ContractFactory {
  constructor(...args: SampleLayerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<SampleLayer> {
    return super.deploy(overrides || {}) as Promise<SampleLayer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SampleLayer {
    return super.attach(address) as SampleLayer;
  }
  override connect(signer: Signer): SampleLayer__factory {
    return super.connect(signer) as SampleLayer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SampleLayerInterface {
    return new utils.Interface(_abi) as SampleLayerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SampleLayer {
    return new Contract(address, _abi, signerOrProvider) as SampleLayer;
  }
}
