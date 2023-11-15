import ImageRenderer from "../../../src/components/imageRenderer";
import IUnitLibComponents from "../../../src/interfaces/IUnitLibComponents";
import UnitBehaviour from "../../../src/unitBehaviour";
import BirdController from "./birdController";

export default class GroundController extends UnitBehaviour{
    public groundSpeed=150;
    public start(context: IUnitLibComponents) {
        throw new Error("Method not implemented.");
    }
    public update(context: IUnitLibComponents) {
        try{
            let asset: ImageBitmap=context.assets.get("ground");
                context.transform.localScale.set(
                    150/asset.height
                )
                context.transform.position.y=context.screen.height-asset.height*context.transform.localScale.y;

                let ren=context.components.getComponent(ImageRenderer);
                context.transform.position.x-=context.time.deltaTime*this.groundSpeed;
                if(ren)context.transform.position.x%=ren.actualWidth;
        }catch{}
        let bird=context.gameObject.findWithTag("player");
        if(bird?.components.getComponent(BirdController)?.isHit)this.groundSpeed=0;
    }
}