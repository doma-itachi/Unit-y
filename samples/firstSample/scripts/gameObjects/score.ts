import TextRenderer from "../../../../src/components/textRenderer";
import GameObject from "../../../../src/gameObject";
import UnitLib from "../../../../src/main";

export default class Score extends GameObject{
    public name: string="score";
    constructor(){
        super();
        this.components.addComponents(new UnitLib.renderer.TextRenderer());
        let com=this.components.getComponents(TextRenderer);
        com?com.text="score":null;
    }
}