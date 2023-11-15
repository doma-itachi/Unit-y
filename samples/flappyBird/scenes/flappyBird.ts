import Scene from "../../../src/scene";
import Background from "../gameObjects/background";
import BirdGameObject from "../gameObjects/bird";
import GroundGameObject from "../gameObjects/ground";
import Ui from "../gameObjects/ui";

declare function require(path: string);

export default class FlappyBird extends Scene{
    public initialize() {
        this.assetManager.regist("background", require("../assets/sprites/background_loop.png"));
        this.assetManager.regist("ground", require("../assets/sprites/ground.png"));
        this.assetManager.regist("pipeTop", require("../assets/sprites/pipe_top.png"));
        this.assetManager.regist("pipeBottom", require("../assets/sprites/pipe_bottom.png"));
        this.assetManager.regist("bird", require("../assets/sprites/bird1.png"));
        this.assetManager.regist("gameover", require("../assets/sprites/gameover.png"));
        this.assetManager.regist("logo", require("../assets/sprites/flappy_logo.png"));

        this.instantiate(new Background());
        this.instantiate(new GroundGameObject());
        this.instantiate(new BirdGameObject());
        this.instantiate(new Ui());
    }
}