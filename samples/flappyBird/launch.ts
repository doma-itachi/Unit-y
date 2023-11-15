import { Webview } from "https://deno.land/x/webview/mod.ts";
const port=1234;

declare global{
    const Deno: any;
}
const parcel=Deno.run({cmd:["cmd", "/c", "parcel", "./index.html"]});

const webview = new Webview();

webview.title="アプリケーションの実行中 - PC スタンドアロン - Unit-y 2023.1.1f1 個人用 <CanvasRenderingContext2D>"
webview.navigate(`http://localhost:${port}`);
webview.run();