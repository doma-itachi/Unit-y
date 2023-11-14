import GameObject from "../../../src/gameObject";
import IUnitLibComponents from "../../../src/interfaces/IUnitLibComponents";
import UnitBehaviour from "../../../src/unitBehaviour";
import UiProvider from "../scripts/uiProvider";

export default class Ui extends GameObject{
    public name: string="UIProvider";
    public tag: string="ui";

    constructor(){
        super();
        this.components.addComponent(new UiProvider());
    }
}