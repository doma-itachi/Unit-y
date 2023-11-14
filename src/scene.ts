import AssetManager from "./assetManager";
import GameObject from "./gameObject";
import ISceneRenderContext from "./interfaces/ISceneRenderContext";
import UnitContext from "./unitContext";

export default abstract class Scene{
    constructor(){
        this.initialize();
    }

    public abstract initialize();
    private gameObjects: GameObject[]=[];
    protected assetManager: AssetManager=new AssetManager();

    public render(context: ISceneRenderContext){
        for(let i=0;i<this.gameObjects.length;i++){
            if(this.gameObjects[i].destroyAlready){
                this.gameObjects.splice(i, 1);
                i-=1;
                continue;
            }
            let e=this.gameObjects[i];
            e.components.componentList.forEach(c=>{
                c.update({
                    renderingContext: context.renderingContext,
                    transform: e.transform,
                    input: context.inputManager,
                    components: e.components,
                    assets: this.assetManager,
                    screen: context.screen,
                    time: context.time,
                    sceneManager: context.sceneManager,
                    gameObject: {
                        gameObject: e,
                        instantiate: this.instantiate.bind(this),
                        findWithTag: this.findWithTag.bind(this),
                        findAllWithTag: this.findAllWithTag.bind(this)
                    }
                })
            });
        }
            // this.gameObjects.forEach(e=>{
            //     e.components.componentList.forEach(c=>{
            //         c.update({
            //             renderingContext: context.renderingContext,
            //             transform: e.transform,
            //             input: context.inputManager,
            //             components: e.components,
            //             assets: this.assetManager,
            //             screen: context.screen,
            //             time: context.time,
            //             sceneManager: context.sceneManager,
            //             gameObject: {
            //                 instantiate: this.instantiate.bind(this),
            //                 findWithTag: this.findWithTag.bind(this),
            //                 findAllWithTag: this.findAllWithTag.bind(this)
            //             }
            //         })
            //     });
            // })
    }
    
    public instantiate(instance: GameObject){
        this.gameObjects.push(instance);
    }
    public findWithTag(tag: string): GameObject|null{
        for(let go of this.gameObjects){
            if(go.tag==tag){
                return go;
            }
        }
        return null;
    }
    public findAllWithTag(tag: string): GameObject[]{
        let goList: GameObject[]=[];
        for(let go of this.gameObjects){
            if(go.tag==tag){
                goList.push(go);
            }
        }
        return goList;
    }
    // private signalHandler(context: ISceneRenderContext, func: Function){
    //     this.gameObjects.forEach(e=>{
    //         e.components.componentList.forEach(c=>{
    //             c.update({
    //                 renderingContext: context.renderingContext,
    //                 transform: e.transform,
    //                 input: context.inputManager,
    //                 components: e.components,
    //                 assets: this.assetManager,
    //                 screen: context.screen,
    //                 time: context.time,
    //                 sceneManager: context.sceneManager
    //             })
    //         });
    //     });
    // }

    //assetManagement
}