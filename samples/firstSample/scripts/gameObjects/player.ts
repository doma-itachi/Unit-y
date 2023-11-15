import TextRenderer from "../../../../src/components/textRenderer";
import UnitLib from "../../../../src/main";
import UnitBehaviour from "../../../../src/unitBehaviour";
import KeyTest from "../scripts/keyTest";

export default class Player extends UnitLib.GameObject{
    public name: string = "Player";
    public tag: string="player";
    constructor(){
        super();

        this.components.addComponent(new TextRenderer());
        this.components.addComponent(new KeyTest());
        let textComponent=this.components.getComponent(TextRenderer);
        if(textComponent){
            textComponent.text="Hello World!";
        }
    }
}