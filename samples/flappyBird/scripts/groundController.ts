import IUnitLibComponents from "../../../src/interfaces/IUnitLibComponents";
import UnitBehaviour from "../../../src/unitBehaviour";

export default class GroundController extends UnitBehaviour{
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
        }catch{}
    }
    
}