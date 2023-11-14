import BoxCollider from "../../../src/components/boxCollider";
import ImageRenderer from "../../../src/components/imageRenderer";
import IUnitLibComponents from "../../../src/interfaces/IUnitLibComponents";
import UnitBehaviour from "../../../src/unitBehaviour";

export default class PipeController extends UnitBehaviour{
    public holeSize: number=5;
    public isStarted=false;
    public start(context: IUnitLibComponents) {
        throw new Error("Method not implemented.");
    }
    public update(context: IUnitLibComponents) {
        let renders=context.components.getComponents(ImageRenderer);
        let pipeTop=renders[0];
        let pipeBottom=renders[1];
        try{
            //画面左に行ったら自動で消去
            if(context.transform.position.x+pipeTop.actualWidth<0){
                context.gameObject.gameObject.destroyAlready=true;
            }

            let asset: ImageBitmap=context.assets.get("pipeTop");
            context.transform.localScale.set(
                100/asset.width
            )

            if(!this.isStarted){
                context.transform.position.y-=asset.height*context.transform.localScale.y;
                this.isStarted=true;
            }

            pipeBottom.offset.y=pipeTop.actualHeight+this.holeSize;

            //コライダーの設定
            let cols=context.components.getComponents(BoxCollider);
            if(cols[0]){
                cols[0].size.set(asset.width, asset.height);
                cols[1].size=cols[0].size;
                cols[1].center.y=pipeTop.actualHeight+this.holeSize;
            }
        }catch{}
    }
    
}