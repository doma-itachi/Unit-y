import AssetManager from "../assetManager";
import Components from "../components";
import InputManager from "../inputManager";
import SceneManager from "../sceneManager";
import Transform from "../transform";
import IGameObjectController from "./IGameObjectController";
import IScreenInfo from "./IScreenInfo";
import ITime from "./ITime";

export default interface IUnitLibComponents{
    renderingContext: CanvasRenderingContext2D;
    transform: Transform;
    input: InputManager;
    components: Components;
    assets: AssetManager;
    screen: IScreenInfo;
    sceneManager: SceneManager;
    time: ITime;
    gameObject: IGameObjectController;
}