"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Klits__factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class Klits__factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Klits__factory = Klits__factory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "_externalURL",
                type: "string",
            },
        ],
        name: "setExternalURL",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "to",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "tos",
                type: "address[]",
            },
            {
                name: "ids",
                type: "uint256[]",
            },
        ],
        name: "bulkTransfer",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "from",
                type: "address",
            },
            {
                name: "to",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "owner",
                type: "address",
            },
            {
                name: "index",
                type: "uint256",
            },
        ],
        name: "tokenOfOwnerByIndex",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
            },
            {
                name: "_attributes",
                type: "string",
            },
        ],
        name: "setAttributes",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "unpause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "to",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "from",
                type: "address",
            },
            {
                name: "to",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "isPauser",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "index",
                type: "uint256",
            },
        ],
        name: "tokenByIndex",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "paused",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renouncePauser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "description",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "addPauser",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "pause",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "images",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "owner",
        outputs: [
            {
                name: "",
                type: "address",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "isOwner",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_description",
                type: "string",
            },
        ],
        name: "setDescription",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "addMinter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [],
        name: "renounceMinter",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "_basename",
                type: "string",
            },
        ],
        name: "setBasename",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "to",
                type: "address",
            },
            {
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "basename",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "account",
                type: "address",
            },
        ],
        name: "isMinter",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "from",
                type: "address",
            },
            {
                name: "to",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
            {
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "externalURL",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "tokenId",
                type: "uint256",
            },
            {
                name: "dataURL",
                type: "string",
            },
        ],
        name: "setImage",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "",
                type: "uint256",
            },
        ],
        name: "attributes",
        outputs: [
            {
                name: "",
                type: "string",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                name: "owner",
                type: "address",
            },
            {
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                name: "start",
                type: "uint256",
            },
            {
                name: "end",
                type: "uint256",
            },
        ],
        name: "massMint",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "account",
                type: "address",
            },
        ],
        name: "Paused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: "account",
                type: "address",
            },
        ],
        name: "Unpaused",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "PauserAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "PauserRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "MinterAdded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "account",
                type: "address",
            },
        ],
        name: "MinterRemoved",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                name: "tokenId",
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
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
];
const _bytecode = "0x60806040526040518060400160405280600781526020017f4b4c495453202300000000000000000000000000000000000000000000000000815250601090805190602001906200005192919062000678565b506040518060800160405280604681526020016200546760469139601190805190602001906200008392919062000678565b506040518060400160405280601281526020017f68747470733a2f2f6b6c6974732e78797a2f000000000000000000000000000081525060129080519060200190620000d192919062000678565b50604051806060016040528060258152602001620054cf602591396040518060400160405280600481526020017f4b494453000000000000000000000000000000000000000000000000000000008152508181336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3620001f86301ffc9a760e01b620002e960201b60201c565b620002106380ac58cd60e01b620002e960201b60201c565b6200022863780e9d6360e01b620002e960201b60201c565b81600a90805190602001906200024092919062000678565b5080600b90805190602001906200025992919062000678565b5062000272635b5e139f60e01b620002e960201b60201c565b505050506200028733620003f260201b60201c565b6200029f63eab83e2060e01b620002e960201b60201c565b620002b0336200045360201b60201c565b6000600f60006101000a81548160ff021916908315150217905550620002e3634d5507ff60e01b620002e960201b60201c565b62000727565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141562000386576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031333a20696e76616c696420696e74657266616365206964000000000081525060200191505060405180910390fd5b6001806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b6200040d81600d620004b460201b6200420f1790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b6200046e81600e620004b460201b6200420f1790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b620004c682826200059860201b60201c565b156200053a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000621576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180620054ad6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620006bb57805160ff1916838001178555620006ec565b82800160010185558215620006ec579182015b82811115620006eb578251825591602001919060010190620006ce565b5b509050620006fb9190620006ff565b5090565b6200072491905b808211156200072057600081600090555060010162000706565b5090565b90565b614d3080620007376000396000f3fe608060405234801561001057600080fd5b506004361061025e5760003560e01c806382dc1ec411610146578063a22cb465116100c3578063c87b56dd11610087578063c87b56dd14610f95578063c980c6261461103c578063d05dcc6a146110bf578063e985e9c514611166578063f2fde38b146111e2578063fa38675f146112265761025e565b8063a22cb46514610cde578063a60a07e314610d2e578063aa271e1a14610db1578063b88d4fde14610e0d578063b99edfb214610f125761025e565b806390c3f38f1161010a57806390c3f38f14610b1b57806395d89b4114610b94578063983b2d5614610c175780639865027514610c5b5780639d00a33314610c655761025e565b806382dc1ec4146109ba5780638456cb59146109fe5780638485648214610a085780638da5cb5b14610aaf5780638f32d59b14610af95761025e565b80633f4ba83a116101df5780635c975abb116101a35780635c975abb1461083b5780636352211e1461085d5780636ef8d66d146108cb57806370a08231146108d5578063715018a61461092d5780637284e416146109375761025e565b80633f4ba83a146106bf57806340c10f19146106c957806342842e0e1461072f57806346fbf68e1461079d5780634f6ccce7146107f95761025e565b8063153a1f3e11610226578063153a1f3e1461048057806318160ddd1461054e57806323b872dd1461056c5780632f745c59146105da5780633bdecd7b1461063c5761025e565b806301dbcd4a1461026357806301ffc9a7146102dc57806306fdde0314610341578063081812fc146103c4578063095ea7b314610432575b600080fd5b6102da6004803603602081101561027957600080fd5b810190808035906020019064010000000081111561029657600080fd5b8201836020820111156102a857600080fd5b803590602001918460018302840111640100000000831117156102ca57600080fd5b909192939192939050505061125e565b005b610327600480360360208110156102f257600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690602001909291905050506112ee565b604051808215151515815260200191505060405180910390f35b610349611356565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561038957808201518184015260208101905061036e565b50505050905090810190601f1680156103b65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103f0600480360360208110156103da57600080fd5b81019080803590602001909291905050506113f8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61047e6004803603604081101561044857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611493565b005b61054c6004803603604081101561049657600080fd5b81019080803590602001906401000000008111156104b357600080fd5b8201836020820111156104c557600080fd5b803590602001918460208302840111640100000000831117156104e757600080fd5b90919293919293908035906020019064010000000081111561050857600080fd5b82018360208201111561051a57600080fd5b8035906020019184602083028401116401000000008311171561053c57600080fd5b9091929391929390505050611524565b005b610556611592565b6040518082815260200191505060405180910390f35b6105d86004803603606081101561058257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061159f565b005b610626600480360360408110156105f057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611632565b6040518082815260200191505060405180910390f35b6106bd6004803603604081101561065257600080fd5b81019080803590602001909291908035906020019064010000000081111561067957600080fd5b82018360208201111561068b57600080fd5b803590602001918460018302840111640100000000831117156106ad57600080fd5b90919293919293905050506116f1565b005b6106c7611793565b005b610715600480360360408110156106df57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506118f3565b604051808215151515815260200191505060405180910390f35b61079b6004803603606081101561074557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611967565b005b6107df600480360360208110156107b357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611987565b604051808215151515815260200191505060405180910390f35b6108256004803603602081101561080f57600080fd5b81019080803590602001909291905050506119a4565b6040518082815260200191505060405180910390f35b610843611a24565b604051808215151515815260200191505060405180910390f35b6108896004803603602081101561087357600080fd5b8101908080359060200190929190505050611a3b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108d3611b03565b005b610917600480360360208110156108eb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611b0e565b6040518082815260200191505060405180910390f35b610935611be3565b005b61093f611d1c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561097f578082015181840152602081019050610964565b50505050905090810190601f1680156109ac5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6109fc600480360360208110156109d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611dba565b005b610a06611e24565b005b610a3460048036036020811015610a1e57600080fd5b8101908080359060200190929190505050611f85565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a74578082015181840152602081019050610a59565b50505050905090810190601f168015610aa15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610ab7612035565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610b0161205e565b604051808215151515815260200191505060405180910390f35b610b9260048036036020811015610b3157600080fd5b8101908080359060200190640100000000811115610b4e57600080fd5b820183602082011115610b6057600080fd5b80359060200191846001830284011164010000000083111715610b8257600080fd5b90919293919293905050506120b5565b005b610b9c612145565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610bdc578082015181840152602081019050610bc1565b50505050905090810190601f168015610c095780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610c5960048036036020811015610c2d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506121e7565b005b610c63612251565b005b610cdc60048036036020811015610c7b57600080fd5b8101908080359060200190640100000000811115610c9857600080fd5b820183602082011115610caa57600080fd5b80359060200191846001830284011164010000000083111715610ccc57600080fd5b909192939192939050505061225c565b005b610d2c60048036036040811015610cf457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035151590602001909291905050506122ec565b005b610d3661237d565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610d76578082015181840152602081019050610d5b565b50505050905090810190601f168015610da35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610df360048036036020811015610dc757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061241b565b604051808215151515815260200191505060405180910390f35b610f1060048036036080811015610e2357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610e8a57600080fd5b820183602082011115610e9c57600080fd5b80359060200191846001830284011164010000000083111715610ebe57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050612438565b005b610f1a6124aa565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610f5a578082015181840152602081019050610f3f565b50505050905090810190601f168015610f875780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610fc160048036036020811015610fab57600080fd5b8101908080359060200190929190505050612548565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611001578082015181840152602081019050610fe6565b50505050905090810190601f16801561102e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6110bd6004803603604081101561105257600080fd5b81019080803590602001909291908035906020019064010000000081111561107957600080fd5b82018360208201111561108b57600080fd5b803590602001918460018302840111640100000000831117156110ad57600080fd5b9091929391929390505050612a16565b005b6110eb600480360360208110156110d557600080fd5b8101908080359060200190929190505050612ab8565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561112b578082015181840152602081019050611110565b50505050905090810190601f1680156111585780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6111c86004803603604081101561117c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612b68565b604051808215151515815260200191505060405180910390f35b611224600480360360208110156111f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612bfc565b005b61125c6004803603604081101561123c57600080fd5b810190808035906020019092919080359060200190929190505050612c82565b005b61126661205e565b6112d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8181601291906112e99291906148f7565b505050565b600060016000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b6060600a8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156113ee5780601f106113c3576101008083540402835291602001916113ee565b820191906000526020600020905b8154815290600101906020018083116113d157829003601f168201915b5050505050905090565b600061140382612d08565b611458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180614c78602b913960400191505060405180910390fd5b6003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600f60009054906101000a900460ff1615611516576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6115208282612d7a565b5050565b600082829050905060008090505b8181101561158a5761157f3387878481811061154a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1686868581811061157357fe5b9050602002013561159f565b600181019050611532565b505050505050565b6000600880549050905090565b600f60009054906101000a900460ff1615611622576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b61162d838383612f70565b505050565b600061163d83611b0e565b8210611694576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180614a70602a913960400191505060405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481106116de57fe5b9060005260206000200154905092915050565b6116f961205e565b61176b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b818160146000868152602001908152602001600020919061178d9291906148f7565b50505050565b61179c33611987565b6117f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806149f76030913960400191505060405180910390fd5b600f60009054906101000a900460ff16611873576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b6000600f60006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b60006118fe3361241b565b611953576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180614a9a6030913960400191505060405180910390fd5b61195d8383612fdf565b6001905092915050565b61198283838360405180602001604052806000815250612438565b505050565b600061199d82600e61300090919063ffffffff16565b9050919050565b60006119ae611592565b8210611a05576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180614c4d602b913960400191505060405180910390fd5b60088281548110611a1257fe5b90600052602060002001549050919050565b6000600f60009054906101000a900460ff16905090565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611afa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180614b2b6028913960400191505060405180910390fd5b80915050919050565b611b0c336130de565b565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b95576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180614bfc6029913960400191505060405180910390fd5b611bdc600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020613138565b9050919050565b611beb61205e565b611c5d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60118054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611db25780601f10611d8757610100808354040283529160200191611db2565b820191906000526020600020905b815481529060010190602001808311611d9557829003601f168201915b505050505081565b611dc333611987565b611e18576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806149f76030913960400191505060405180910390fd5b611e2181613146565b50565b611e2d33611987565b611e82576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806149f76030913960400191505060405180910390fd5b600f60009054906101000a900460ff1615611f05576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600f60006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b60136020528060005260406000206000915090508054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561202d5780601f106120025761010080835404028352916020019161202d565b820191906000526020600020905b81548152906001019060200180831161201057829003601f168201915b505050505081565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6120bd61205e565b61212f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8181601191906121409291906148f7565b505050565b6060600b8054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156121dd5780601f106121b2576101008083540402835291602001916121dd565b820191906000526020600020905b8154815290600101906020018083116121c057829003601f168201915b5050505050905090565b6121f03361241b565b612245576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180614a9a6030913960400191505060405180910390fd5b61224e816131a0565b50565b61225a336131fa565b565b61226461205e565b6122d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8181601091906122e79291906148f7565b505050565b600f60009054906101000a900460ff161561236f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6123798282613254565b5050565b60108054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156124135780601f106123e857610100808354040283529160200191612413565b820191906000526020600020905b8154815290600101906020018083116123f657829003601f168201915b505050505081565b600061243182600d61300090919063ffffffff16565b9050919050565b61244384848461159f565b61244f848484846133f7565b6124a4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180614bcc6030913960400191505060405180910390fd5b50505050565b60128054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156125405780601f1061251557610100808354040283529160200191612540565b820191906000526020600020905b81548152906001019060200180831161252357829003601f168201915b505050505081565b606061255382612d08565b6125a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806149c9602e913960400191505060405180910390fd5b61297d60106125b684613959565b6011601261266e601360008981526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156126645780601f1061263957610100808354040283529160200191612664565b820191906000526020600020905b81548152906001019060200180831161264757829003601f168201915b5050505050613a7c565b6014600089815260200190815260200160002060405160200180807f7b226e616d65223a202200000000000000000000000000000000000000000000815250600a01878054600181600116156101000203166002900480156127075780601f106126e5576101008083540402835291820191612707565b820191906000526020600020905b8154815290600101906020018083116126f3575b505086805190602001908083835b602083106127385780518252602082019150602081019050602083039250612715565b6001836020036101000a038019825116818451168082178552505050505050905001807f222c20226465736372697074696f6e223a202200000000000000000000000000815250601301858054600181600116156101000203166002900480156127d95780601f106127b75761010080835404028352918201916127d9565b820191906000526020600020905b8154815290600101906020018083116127c5575b5050807f222c202265787465726e616c5f75726c223a20220000000000000000000000008152506014018480546001816001161561010002031660029004801561285a5780601f1061283857610100808354040283529182019161285a565b820191906000526020600020905b815481529060010190602001808311612846575b505080614ba56027913960270183805190602001908083835b602083106128965780518252602082019150602081019050602083039250612873565b6001836020036101000a038019825116818451168082178552505050505050905001807f222c2261747472696275746573223a0000000000000000000000000000000000815250600f01828054600181600116156101000203166002900480156129375780601f10612915576101008083540402835291820191612937565b820191906000526020600020905b815481529060010190602001808311612923575b5050807f7d000000000000000000000000000000000000000000000000000000000000008152506001019650505050505050604051602081830303815290604052613a7c565b60405160200180807f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815250601d0182805190602001908083835b602083106129db57805182526020820191506020810190506020830392506129b8565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040529050919050565b612a1e61205e565b612a90576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8181601360008681526020019081526020016000209190612ab29291906148f7565b50505050565b60146020528060005260406000206000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015612b605780601f10612b3557610100808354040283529160200191612b60565b820191906000526020600020905b815481529060010190602001808311612b4357829003601f168201915b505050505081565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b612c0461205e565b612c76576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b612c7f81613bcb565b50565b612c8b3361241b565b612ce0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180614a9a6030913960400191505060405180910390fd5b60008290505b818111612d0357612cf733826118f3565b50600181019050612ce6565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000612d8582611a3b565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612e29576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4b495031373a20617070726f76616c20746f2063757272656e74206f776e657281525060200191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480612e695750612e688133612b68565b5b612ebe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180614ca36037913960400191505060405180910390fd5b826003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a4505050565b612f7a3382613d0f565b612fcf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180614b536030913960400191505060405180910390fd5b612fda838383613e03565b505050565b612fe98282613e27565b612ff3828261403f565b612ffc81614106565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415613087576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180614b836022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6130f281600e61415290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e60405160405180910390a250565b600081600001549050919050565b61315a81600e61420f90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b6131b481600d61420f90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b61320e81600d61415290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156132f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f4b495031373a20617070726f766520746f2063616c6c6572000000000000000081525060200191505060405180910390fd5b80600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b600080606061341b8673ffffffffffffffffffffffffffffffffffffffff166142ea565b61342a57600192505050613951565b8573ffffffffffffffffffffffffffffffffffffffff1663150b7a0260e01b33898888604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156134fa5780820151818401526020810190506134df565b50505050905090810190601f1680156135275780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106135bf578051825260208201915060208101905060208303925061359c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114613621576040519150601f19603f3d011682016040523d82523d6000602084013e613626565b606091505b50809250819350505060008151141580156136aa575063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681806020019051602081101561367857600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b156136ba57600192505050613951565b8573ffffffffffffffffffffffffffffffffffffffff16636745782b60e01b33898888604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561378a57808201518184015260208101905061376f565b50505050905090810190601f1680156137b75780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061384f578051825260208201915060208101905060208303925061382c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146138b1576040519150601f19603f3d011682016040523d82523d6000602084013e6138b6565b606091505b508092508193505050600081511415801561393a5750636745782b60e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681806020019051602081101561390857600080fd5b81019080805190602001909291905050507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b1561394a57600192505050613951565b6000925050505b949350505050565b606060008214156139a1576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050613a77565b600082905060005b600082146139cb578080600101915050600a82816139c357fe5b0491506139a9565b6060816040519080825280601f01601f191660200182016040528015613a005781602001600182028038833980820191505090505b5090505b60008514613a7057600182039150600a8581613a1c57fe5b0660300160f81b818381518110613a2f57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8581613a6857fe5b049450613a04565b8093505050505b919050565b6060600082511415613a9f57604051806020016040528060008152509050613bc6565b6060604051806060016040528060408152602001614aeb60409139905060006003600285510181613acc57fe5b0460040290506060602082016040519080825280601f01601f191660200182016040528015613b0a5781602001600182028038833980820191505090505b509050818152600183018586518101602084015b81831015613b85576003830192508251603f8160121c1685015160f81b8252600182019150603f81600c1c1685015160f81b8252600182019150603f8160061c1685015160f81b8252600182019150603f811685015160f81b825260018201915050613b1e565b600389510660018114613b9f5760028114613baf57613bba565b613d3d60f01b6002830352613bba565b603d60f81b60018303525b50505050508093505050505b919050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415613c51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180614a276026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000613d1a82612d08565b613d6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180614cda602b913960400191505060405180910390fd5b6000613d7a83611a3b565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480613de957508373ffffffffffffffffffffffffffffffffffffffff16613dd1846113f8565b73ffffffffffffffffffffffffffffffffffffffff16145b80613dfa5750613df98185612b68565b5b91505092915050565b613e0e8383836142fd565b613e188382614558565b613e22828261403f565b505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415613eca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4b495031373a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b613ed381612d08565b15613f46576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4b495031373a20746f6b656e20616c7265616479206d696e746564000000000081525060200191505060405180910390fd5b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613fdf600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206146f6565b808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506007600083815260200190815260200160002081905550600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505090600182039060005260206000200160009091929091909150555050565b61415c8282613000565b6141b1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180614aca6021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6142198282613000565b1561428c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080823b905060008111915050919050565b8273ffffffffffffffffffffffffffffffffffffffff1661431d82611a3b565b73ffffffffffffffffffffffffffffffffffffffff1614614389576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180614c256028913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561440f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180614a4d6023913960400191505060405180910390fd5b6144188161470c565b61445f600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206147ca565b6144a6600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206146f6565b816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006145b06001600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506147ed90919063ffffffff16565b905060006007600084815260200190815260200160002054905081811461469d576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061461d57fe5b9060005260206000200154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020838154811061467557fe5b9060005260206000200181905550816007600083815260200190815260200160002081905550505b600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036146ef9190614977565b5050505050565b6001816000016000828254019250508190555050565b600073ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146147c75760006003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b50565b6147e2600182600001546147ed90919063ffffffff16565b816000018190555050565b600061482f83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250614837565b905092915050565b60008383111582906148e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156148a957808201518184015260208101905061488e565b50505050905090810190601f1680156148d65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061493857803560ff1916838001178555614966565b82800160010185558215614966579182015b8281111561496557823582559160200191906001019061494a565b5b50905061497391906149a3565b5090565b81548183558181111561499e5781836000526020600020918201910161499d91906149a3565b5b505050565b6149c591905b808211156149c15760008160009055506001016149a9565b5090565b9056fe4b495031374d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c654f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734b495031373a207472616e7366657220746f20746865207a65726f20616464726573734b49503137456e756d657261626c653a206f776e657220696e646578206f7574206f6620626f756e64734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2f4b495031373a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373222c2022696d616765223a2022646174613a696d6167652f7376672b786d6c3b6261736536342c4b495031373a207472616e7366657220746f206e6f6e204b49503137526563656976657220696d706c656d656e7465724b495031373a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734b495031373a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4b49503137456e756d657261626c653a20676c6f62616c20696e646578206f7574206f6620626f756e64734b495031373a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4b495031373a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4b495031373a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656ea165627a7a723058208da5962ddd763f9ebdc9961fc76c3ccce10ca475356419e9fb447eb8979a478800294b6c69747320697320612066756c6c79206f6e2d636861696e2c2067656e65726174697665204e46542e204e6f20495046532e204e6f204150492e204a75737420636f64652e526f6c65733a206163636f756e7420697320746865207a65726f20616464726573734b4c495453202d204b696473204c6976696e6720496e205468652053696d756c6174696f6e";
//# sourceMappingURL=Klits__factory.js.map