import UnitContext from "./unitContext";
import GameObject from "./gameObject";
import UnitBehaviour from "./unitBehaviour";
import Scene from "./scene";

//レンダラー
import TextRenderer from "./components/textRenderer";

let UnitLib={
    UnitContext,
    GameObject,
    UnitBehaviour: UnitBehaviour,
    Scene,
    renderer: {
        TextRenderer
    }
}
export default UnitLib;