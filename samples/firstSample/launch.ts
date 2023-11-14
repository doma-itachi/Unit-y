import { Webview } from "https://deno.land/x/webview/mod.ts";
const port=1234;

const parcel=Deno.run({cmd:["cmd", "/c", "parcel", "./index.html"]});

const webview = new Webview();

webview.navigate(`http://localhost:${port}`);
webview.run();