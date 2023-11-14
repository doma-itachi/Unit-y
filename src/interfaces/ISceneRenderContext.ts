import InputManager from "../inputManager";
import SceneManager from "../sceneManager";
import IScreenInfo from "./IScreenInfo";
import ITime from "./ITime";

export default interface ISceneRenderContext{
    renderingContext: CanvasRenderingContext2D;
    inputManager: InputManager;
    screen: IScreenInfo;
    sceneManager: SceneManager;
    time: ITime;
}