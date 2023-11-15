import BoxCollider from "../../../src/components/boxCollider";
import ImageRenderer from "../../../src/components/imageRenderer";
import GameObject from "../../../src/gameObject";
import BirdController from "../scripts/birdController";

export default class BirdGameObject extends GameObject{
    public name: string="bird";
    public tag: string="player";
    constructor(){
        super();
        this.transform.position.set(500, 300);

        this.components.addComponent(new ImageRenderer("bird"));
        this.components.addComponent(new BoxCollider());
        this.components.addComponent(new BirdController());
    }
}