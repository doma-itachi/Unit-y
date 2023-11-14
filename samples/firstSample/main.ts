import UnitLib from "../../src/main";
import SceneTest from "./scripts/scenes/sceneTest";

let unitctx=new UnitLib.UnitContext(
    document.querySelector("canvas"),
    new SceneTest()
)
// unitctx.sceneManager.loadScene(new SceneTest());
