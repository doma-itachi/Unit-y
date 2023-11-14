import UnitLib from "../../../../src/main";
import Player from "../gameObjects/player";
import Score from "../gameObjects/score";

export default class SceneTest extends UnitLib.Scene{
    public initialize() {
        this.instantiate(new Player);
        // this.gameObjects.push(new Score);
    }
}