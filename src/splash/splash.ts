import TextRenderer from "../components/textRenderer";
import GameObject from "../gameObject";
import SetTextPos from "./setTextPos";
import Transition from "./splashTransition";

export default class SplashGameObject extends GameObject{
    public tag: string="splashText";
    public name: string="splash";
    constructor(){
        super();
        this.components.addComponent(new TextRenderer);
        this.components.addComponent(new SetTextPos);
        this.components.addComponent(new Transition);
        let text=this.components.getComponent(TextRenderer);
        if(text){
            text.size=30;
            text.font="Arial";
            text.text="Made with";
        }
    }
}