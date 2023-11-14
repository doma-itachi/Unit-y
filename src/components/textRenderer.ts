import IUnitLibComponents from "../interfaces/IUnitLibComponents";
import UnitBehaviour from "../unitBehaviour";
import Renderer from "./renderer";

export default class TextRenderer extends Renderer{
    public text: string;
    public size: number=24;
    public font: string="Arial";
    public baseline: CanvasTextBaseline="top";
    public align: CanvasTextAlign="left";
    public start(context: IUnitLibComponents) {
        
    }

    public update(context: IUnitLibComponents) {
        context.renderingContext.save();
        context.renderingContext.globalAlpha=this.alpha;
        context.renderingContext.translate(context.transform.position.x, context.transform.position.y);
        context.renderingContext.rotate(context.transform.rotation*Math.PI/180);
        context.renderingContext.fillStyle="white";
        context.renderingContext.textAlign=this.align;
        context.renderingContext.font=`${this.size}px ${this.font}`;
        context.renderingContext.textBaseline=this.baseline;
        context.renderingContext.fillText(this.text, 0, 0);
        context.renderingContext.restore();
    }
}