import ImageRenderer from "../../../src/components/imageRenderer";
import GameObject from "../../../src/gameObject";
import GroundController from "../scripts/groundController";

export default class GroundGameObject extends GameObject{
    public name: string="ground";
    public tag: string="ground";
    constructor(){
        super();
        let ren=new ImageRenderer("ground");
        ren.wrapMode="RepeatX";
        this.components.addComponent(ren);
        this.components.addComponent(new GroundController());
    }
}