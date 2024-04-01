/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RecoverableFuse,
  RecoverableFuseInterface,
} from "../../../src/SampleLayer2.sol/RecoverableFuse";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "layerConfig",
        type: "bytes",
      },
      {
        internalType: "bytes4",
        name: "messageSig",
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
    stateMutability: "view",
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
        name: "messageSig",
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
  "0x608060405234801561001057600080fd5b506105da806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633a3cbe1d1461003b578063a08e25f714610050575b600080fd5b61004e610049366004610372565b610079565b005b61006361005e366004610424565b610137565b60405161007091906104b3565b60405180910390f35b60006100848761051f565b336000908152602081815260408083207fffffffff000000000000000000000000000000000000000000000000000000008b168452909152902054909150811161012e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4f7574206f662071756f7461207468697320626c6f636b000000000000000000604482015260640160405180910390fd5b50505050505050565b3360009081526001602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000008816845290915290205460609043146101d557336000818152602081815260408083207fffffffff000000000000000000000000000000000000000000000000000000008a168085529083528184208490559383526001825280832093835292905220439055610226565b336000908152602081815260408083207fffffffff00000000000000000000000000000000000000000000000000000000891684529091528120805460019290610220908490610564565b90915550505b5060408051602081019091526000815295945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261027f57600080fd5b813567ffffffffffffffff8082111561029a5761029a61023f565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156102e0576102e061023f565b816040528381528660208588010111156102f957600080fd5b836020870160208301376000602085830101528094505050505092915050565b80357fffffffff000000000000000000000000000000000000000000000000000000008116811461034957600080fd5b919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461034957600080fd5b60008060008060008060c0878903121561038b57600080fd5b863567ffffffffffffffff808211156103a357600080fd5b6103af8a838b0161026e565b97506103bd60208a01610319565b96506103cb60408a0161034e565b95506060890135945060808901359150808211156103e857600080fd5b6103f48a838b0161026e565b935060a089013591508082111561040a57600080fd5b5061041789828a0161026e565b9150509295509295509295565b600080600080600060a0868803121561043c57600080fd5b853567ffffffffffffffff8082111561045457600080fd5b61046089838a0161026e565b965061046e60208901610319565b955061047c6040890161034e565b945060608801359350608088013591508082111561049957600080fd5b506104a68882890161026e565b9150509295509295909350565b600060208083528351808285015260005b818110156104e0578581018301518582016040015282016104c4565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b8051602080830151919081101561055e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8160200360031b1b821691505b50919050565b8082018082111561059e577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9291505056fea2646970667358221220aa2513173791d8d788c6bba1f449857b1b04f8269165868e5cfac20986ea72be64736f6c63430008140033";

type RecoverableFuseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RecoverableFuseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RecoverableFuse__factory extends ContractFactory {
  constructor(...args: RecoverableFuseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<RecoverableFuse> {
    return super.deploy(overrides || {}) as Promise<RecoverableFuse>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RecoverableFuse {
    return super.attach(address) as RecoverableFuse;
  }
  override connect(signer: Signer): RecoverableFuse__factory {
    return super.connect(signer) as RecoverableFuse__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RecoverableFuseInterface {
    return new utils.Interface(_abi) as RecoverableFuseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RecoverableFuse {
    return new Contract(address, _abi, signerOrProvider) as RecoverableFuse;
  }
}
