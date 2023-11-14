import BoxCollider from "../../../src/components/boxCollider";
import ImageRenderer from "../../../src/components/imageRenderer";
import GameObject from "../../../src/gameObject";
import PipeController from "../scripts/pipeController";

export default class PipeGameObject extends GameObject{
    public name: string="pipe";
    public tag: string="pipe";
    constructor(pipeAltitude: number, holeSize: number){
        super();
        this.transform.position.y=pipeAltitude;
        this.components.addComponent(new ImageRenderer("pipeTop"));
        this.components.addComponent(new ImageRenderer("pipeBottom"));

        //コライダー
        this.components.addComponent(new BoxCollider());//上
        this.components.addComponent(new BoxCollider());//下

        let controller=new PipeController();
        controller.holeSize=holeSize;
        this.components.addComponent(controller);
    }
}