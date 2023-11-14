import TextRenderer from "../components/textRenderer";
import IUnitLibComponents from "../interfaces/IUnitLibComponents";
import UnitBehaviour from "../unitBehaviour";

export default class SetTextPos extends UnitBehaviour{
    public start(context: IUnitLibComponents) {
        throw new Error("Method not implemented.");
    }
    public update(context: IUnitLibComponents) {
        let ren=context.components.getComponent(TextRenderer);
        if(ren){
            ren.align="right";
            ren.size=50;
            ren.baseline="middle";
            context.transform.position.x=context.screen.width/2-30;
            context.transform.position.y=context.screen.height/2;
        }
    }

}