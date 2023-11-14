import ImageRenderer from "../../../src/components/imageRenderer";
import GameObject from "../../../src/gameObject";
import BackgroundController from "../scripts/backgroundController";
import PipeMove from "../scripts/pipeMove";

export default class BackGroundGameObject extends GameObject{
    public name: string="background";
    public tag: string="background";
    constructor(){
        super();
        let ren=new ImageRenderer("background");
        ren.wrapMode="RepeatX";
        this.components.addComponent(ren);
        this.components.addComponent(new BackgroundController());

        //仮置き
        this.components.addComponent(new PipeMove());
    }
}