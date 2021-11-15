import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class Home implements View {

    private container: DomNode;
    private interval: any;

    constructor() {
        this.container = el(".home-view",
            el(".mint-price", "mint price: 20 MIX"),
            el("img.logo", { src: "/images/logo.png" }),
            el("button.connect", "Connect Wallet"),
            el(".input-container", el(".label", "Address"), el("input.address")),
            el(".input-container", el(".label", "Mint Limit"), el("input.mint-limit")),
            el(".bottom-container", el("a.go-klubs", el("img", { src: "/images/klubs.png" }), el("a.link", "Go to Klubs")), el(".progress", el(".progress__bar"), el(".text-container", el(".progress-text", "mint progress"), el(".progress-text", "1/10,000"))), el("a", el("a.go-home"), el("img", { src: "/images/home.png" }), el("a.link", "Go to Home")))
        ).appendTo(BodyNode);
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        clearInterval(this.interval);
        this.container.delete();
    }
}