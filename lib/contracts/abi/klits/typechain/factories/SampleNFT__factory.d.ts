import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { SampleNFT } from "../SampleNFT";
export declare class SampleNFT__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<SampleNFT>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): SampleNFT;
    connect(signer: Signer): SampleNFT__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): SampleNFT;
}
//# sourceMappingURL=SampleNFT__factory.d.ts.map