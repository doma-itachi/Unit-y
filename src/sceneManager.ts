import Scene from "./scene";

export default class SceneManager{
    public currentScene: Scene;
    public sceneLoaded: boolean=false;
    public loadScene(scene: Scene){
        this.currentScene=scene;
        this.sceneLoaded=true;
    }
}