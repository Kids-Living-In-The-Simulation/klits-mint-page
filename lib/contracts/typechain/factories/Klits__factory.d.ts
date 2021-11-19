import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides } from "@ethersproject/contracts";
import type { Klits } from "../Klits";
export declare class Klits__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides): Promise<Klits>;
    getDeployTransaction(overrides?: Overrides): TransactionRequest;
    attach(address: string): Klits;
    connect(signer: Signer): Klits__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Klits;
}
//# sourceMappingURL=Klits__factory.d.ts.map