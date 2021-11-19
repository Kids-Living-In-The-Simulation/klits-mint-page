import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { KlitsMinter } from "../KlitsMinter";
export declare class KlitsMinter__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<KlitsMinter>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): KlitsMinter;
    connect(signer: Signer): KlitsMinter__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): KlitsMinter;
}
//# sourceMappingURL=KlitsMinter__factory.d.ts.map