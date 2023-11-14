import Texture from "../common/texture";
import IUnitLibComponents from "../interfaces/IUnitLibComponents";
import UnitBehaviour from "../unitBehaviour";
import Vector2 from "../vector2";
import Renderer from "./renderer";

// enum pivot
type WrapMode="NoWrap" | "Repeat" | "RepeatX" | "RepeatY";
export default class ImageRenderer extends Renderer{

    public texture: ImageBitmap;
    public assetKey: string;
    public wrapMode: WrapMode="NoWrap";
    public offset: Vector2=new Vector2();
    public actualWidth: number;
    public actualHeight: number;

    constructor(key?){
        super();
        if(key)this.assetKey=key;
    }
    public start(context: IUnitLibComponents) {
        throw new Error("Method not implemented.");
    }
    public update(context: IUnitLibComponents) {
        // if(!this.texture){
        //     throw new Error("Texture not found")
        // }
        context.renderingContext.save();
        context.renderingContext.globalAlpha=this.alpha;
        try{
            let src: ImageBitmap=context.assets.get(this.assetKey);
            this.actualWidth=src.width*context.transform.localScale.x;
            this.actualHeight=src.height*context.transform.localScale.y;
            // context.renderingContext.drawImage(
            //     src,
            //     context.transform.position.x,
            //     context.transform.position.y,
            //     this.actualWidth,
            //     this.actualHeight
            // )
            context.renderingContext.imageSmoothingEnabled=false;
            for(let y=context.transform.position.y+this.offset.y;y<context.screen.height;y+=this.actualHeight){
                for(let x=context.transform.position.x+this.offset.x;x<context.screen.width;x+=this.actualWidth){
                    context.renderingContext.drawImage(
                        src,
                        x,
                        y,
                        this.actualWidth,
                        this.actualHeight
                    );
                    if(this.wrapMode=="NoWrap")break;
                }
                if(this.wrapMode=="NoWrap" || this.wrapMode=="RepeatX")break;
            }
        }catch(e){}
        context.renderingContext.restore();
    }
    
}