import ImageRenderer from "../../../src/components/imageRenderer";
import IUnitLibComponents from "../../../src/interfaces/IUnitLibComponents";
import UnitBehaviour from "../../../src/unitBehaviour";
import BirdController from "./birdController";

export default class UiProvider extends UnitBehaviour{
    public gameOverHandled=false;
    private time=0;
    private animTime=0;
    public start(context: IUnitLibComponents) {
        throw new Error("Method not implemented.");
    }
    public update(context: IUnitLibComponents) {
        this.time+=context.time.deltaTime;
        let birdHit=context.gameObject.findWithTag("player").components.getComponent(BirdController);
        if(birdHit?.isHit && !this.gameOverHandled){
            try{
                this.animTime=0;
                let asset: ImageBitmap=context.assets.get("gameover");
                context.transform.localScale.set(5);
                context.transform.position.x=context.screen.width/2-asset.width*context.transform.localScale.x/2;
                this.gameOverHandled=true;
                let ren=new ImageRenderer("gameover")
                context.components.addComponent(new ImageRenderer("gameover"));
            }catch{}
        }
        if(this.gameOverHandled){
            this.animTime+=context.time.deltaTime;
            context.transform.position.y=context.screen.height-(context.screen.height-200)*this.easeOutExpo(this.animTime/2);
        }
    }
    private easeOutExpo(x: number): number{
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    }
    
}