import ImageRenderer from "../components/imageRenderer";
import TextRenderer from "../components/textRenderer";
import GameObject from "../gameObject";
import IUnitLibComponents from "../interfaces/IUnitLibComponents";
import Scene from "../scene";
import UnitBehaviour from "../unitBehaviour";

export default class SplashTransition extends UnitBehaviour{
    public text: GameObject;
    public logo: GameObject;
    public gameScene: Scene;
    public fadeSpeed: number=1.1;

    private alpha=0;
    private time: number=0;
    private isHide=false;

    public start(context: IUnitLibComponents) {
    }
    public update(context: IUnitLibComponents) {
        this.time+=context.time.deltaTime;

        let renText=this.text.components.getComponent(TextRenderer);
        let renImage=this.logo.components.getComponent(ImageRenderer);
        
        if(renText&&renImage){
            if(this.alpha<1&&!this.isHide)this.alpha+=this.fadeSpeed*context.time.deltaTime;
            if(this.time>3)this.isHide=true;
            if(this.isHide){
                this.alpha-=this.fadeSpeed*context.time.deltaTime;
                if(this.alpha<=0){
                    context.sceneManager.loadScene(this.gameScene);
                }
            }
            renText.alpha=this.alpha;
            renImage.alpha=this.alpha;
        }
    }
    
}