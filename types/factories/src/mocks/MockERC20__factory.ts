/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockERC20,
  MockERC20Interface,
} from "../../../src/mocks/MockERC20";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
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
        name: "value",
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
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burnFrom",
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
        name: "value",
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
        name: "value",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5033604051806040016040528060048152602001634d6f636b60e01b815250604051806040016040528060038152602001624d434b60e81b81525081600390816200005d9190620001a7565b5060046200006c8282620001a7565b5050506001600160a01b0381166200009e57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b620000a981620000b0565b5062000273565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200012d57607f821691505b6020821081036200014e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001a257600081815260208120601f850160051c810160208610156200017d5750805b601f850160051c820191505b818110156200019e5782815560010162000189565b5050505b505050565b81516001600160401b03811115620001c357620001c362000102565b620001db81620001d4845462000118565b8462000154565b602080601f831160018114620002135760008415620001fa5750858301515b600019600386901b1c1916600185901b1785556200019e565b600085815260208120601f198616915b82811015620002445788860151825594840194600190910190840162000223565b5085821015620002635787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610d7b80620002836000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a082311161009757806395d89b411161006657806395d89b4114610210578063a9059cbb14610218578063dd62ed3e1461022b578063f2fde38b1461027157600080fd5b806370a0823114610197578063715018a6146101cd57806379cc6790146101d55780638da5cb5b146101e857600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce5671461016057806340c10f191461016f57806342966c681461018457600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610284565b60405161010f9190610b4f565b60405180910390f35b61012b610126366004610be4565b610316565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610c0e565b610330565b6040516012815260200161010f565b61018261017d366004610be4565b610354565b005b610182610192366004610c4a565b61049a565b61013f6101a5366004610c63565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6101826104a7565b6101826101e3366004610be4565b6104bb565b60055460405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010f565b6101026104d0565b61012b610226366004610be4565b6104df565b61013f610239366004610c85565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b61018261027f366004610c63565b6104ed565b60606003805461029390610cb8565b80601f01602080910402602001604051908101604052809291908181526020018280546102bf90610cb8565b801561030c5780601f106102e15761010080835404028352916020019161030c565b820191906000526020600020905b8154815290600101906020018083116102ef57829003601f168201915b5050505050905090565b60003361032481858561054e565b60019150505b92915050565b60003361033e858285610560565b61034985858561062f565b506001949350505050565b73ffffffffffffffffffffffffffffffffffffffff82166103fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4d6f636b45524332302d3e6d696e743a2041646472657373206e6f742073706560448201527f636966696564000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b8060000361048c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4d6f636b45524332302d3e6d696e743a20616d6f756e74206e6f74207370656360448201527f696669656400000000000000000000000000000000000000000000000000000060648201526084016103f3565b61049682826106da565b5050565b6104a43382610736565b50565b6104af610792565b6104b960006107e5565b565b6104c6823383610560565b6104968282610736565b60606004805461029390610cb8565b60003361032481858561062f565b6104f5610792565b73ffffffffffffffffffffffffffffffffffffffff8116610545576040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600060048201526024016103f3565b6104a4816107e5565b61055b838383600161085c565b505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610629578181101561061a576040517ffb8f41b200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260248101829052604481018390526064016103f3565b6106298484848403600061085c565b50505050565b73ffffffffffffffffffffffffffffffffffffffff831661067f576040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600060048201526024016103f3565b73ffffffffffffffffffffffffffffffffffffffff82166106cf576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103f3565b61055b8383836109a4565b73ffffffffffffffffffffffffffffffffffffffff821661072a576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103f3565b610496600083836109a4565b73ffffffffffffffffffffffffffffffffffffffff8216610786576040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600060048201526024016103f3565b610496826000836109a4565b60055473ffffffffffffffffffffffffffffffffffffffff1633146104b9576040517f118cdaa70000000000000000000000000000000000000000000000000000000081523360048201526024016103f3565b6005805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b73ffffffffffffffffffffffffffffffffffffffff84166108ac576040517fe602df05000000000000000000000000000000000000000000000000000000008152600060048201526024016103f3565b73ffffffffffffffffffffffffffffffffffffffff83166108fc576040517f94280d62000000000000000000000000000000000000000000000000000000008152600060048201526024016103f3565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526001602090815260408083209387168352929052208290558015610629578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161099691815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff83166109dc5780600260008282546109d19190610d0b565b90915550610a8e9050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610a62576040517fe450d38c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8516600482015260248101829052604481018390526064016103f3565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020819052604090209082900390555b73ffffffffffffffffffffffffffffffffffffffff8216610ab757600280548290039055610ae3565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090208054820190555b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610b4291815260200190565b60405180910390a3505050565b600060208083528351808285015260005b81811015610b7c57858101830151858201604001528201610b60565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610bdf57600080fd5b919050565b60008060408385031215610bf757600080fd5b610c0083610bbb565b946020939093013593505050565b600080600060608486031215610c2357600080fd5b610c2c84610bbb565b9250610c3a60208501610bbb565b9150604084013590509250925092565b600060208284031215610c5c57600080fd5b5035919050565b600060208284031215610c7557600080fd5b610c7e82610bbb565b9392505050565b60008060408385031215610c9857600080fd5b610ca183610bbb565b9150610caf60208401610bbb565b90509250929050565b600181811c90821680610ccc57607f821691505b602082108103610d05577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8082018082111561032a577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122047a8af671e707121c0d3505d70394bfd373f6e2570674680e87bf4d85de3197d64736f6c63430008140033";

type MockERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC20__factory extends ContractFactory {
  constructor(...args: MockERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<MockERC20> {
    return super.deploy(overrides || {}) as Promise<MockERC20>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockERC20 {
    return super.attach(address) as MockERC20;
  }
  override connect(signer: Signer): MockERC20__factory {
    return super.connect(signer) as MockERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20Interface {
    return new utils.Interface(_abi) as MockERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC20 {
    return new Contract(address, _abi, signerOrProvider) as MockERC20;
  }
}
