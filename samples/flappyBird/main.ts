import UnitLib from "../../src/main";
import FlappyBird from "./scenes/flappyBird";

let unitctx=new UnitLib.UnitContext(
    document.querySelector("canvas"),
    new FlappyBird()
)