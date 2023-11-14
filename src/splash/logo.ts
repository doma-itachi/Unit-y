import ImageRenderer from "../components/imageRenderer";
import GameObject from "../gameObject";
import Scene from "../scene";
import SetPos from "./setPos";

export default class LogoGameObject extends GameObject{
    public tag: string="logo";
    public name: string="logoImage";
    constructor(){
        super();
        this.components.addComponent(new ImageRenderer("logo"));
        let setPos=new SetPos();
        this.components.addComponent(setPos);
    }
}