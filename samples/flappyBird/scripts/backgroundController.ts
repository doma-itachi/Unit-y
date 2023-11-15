import IUnitLibComponents from "../../../src/interfaces/IUnitLibComponents";
import UnitBehaviour from "../../../src/unitBehaviour";

export default class BackgroundController extends UnitBehaviour{
    public start(context: IUnitLibComponents) {
        throw new Error("Method not implemented.");
    }
    public update(context: IUnitLibComponents) {
        //テクスタの高さをあわせる
        try{
            let asset: ImageBitmap=context.assets.get("background");
            context.transform.localScale.set(
                context.screen.height/asset.height
            )
        }catch{};
    }
}