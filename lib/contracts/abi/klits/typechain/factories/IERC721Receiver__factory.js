"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IERC721Receiver__factory = void 0;
const ethers_1 = require("ethers");
class IERC721Receiver__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IERC721Receiver__factory = IERC721Receiver__factory;
const _abi = [
    {
        constant: false,
        inputs: [
            {
                name: "operator",
                type: "address",
            },
            {
                name: "from",
                type: "address",
            },
            {
                name: "tokenId",
                type: "uint256",
            },
            {
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
        outputs: [
            {
                name: "",
                type: "bytes4",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
//# sourceMappingURL=IERC721Receiver__factory.js.map