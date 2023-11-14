import Scene from "../scene";
import LogoGameObject from "./logo";
import SplashGameObject from "./splash";
import SplashTransition from "./splashTransition";
declare function require(path: string);

export default class SplashScene extends Scene{
    public gameScene: Scene;
    constructor(gameScene: Scene){
        super();
        let logoGameObject=new LogoGameObject();
        logoGameObject.transform.localScale.set(0.2);
        this.instantiate(logoGameObject);

        let splashGameObject=new SplashGameObject();
        this.instantiate(splashGameObject);
        let transition=splashGameObject.components.getComponent(SplashTransition);
        if(transition){
            transition.logo=logoGameObject;
            transition.text=splashGameObject;
            transition.gameScene=gameScene;
        }
    }
    public async initialize() {
        this.assetManager.regist("logo", require("./logo_white.png"));

    }
}