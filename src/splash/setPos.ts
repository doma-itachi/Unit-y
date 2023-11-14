import ImageRenderer from "../components/imageRenderer";
import TextRenderer from "../components/textRenderer";
import IUnitLibComponents from "../interfaces/IUnitLibComponents";
import Scene from "../scene";
import UnitBehaviour from "../unitBehaviour";

export default class SetPos extends UnitBehaviour{
    public start(context: IUnitLibComponents) {
        throw new Error("Method not implemented.");
    }
    public update(context: IUnitLibComponents) {
        let renderer=context.components.getComponent(ImageRenderer);
        if(renderer!=null){
            context.transform.position.x=context.screen.width/2;
            context.transform.position.y=context.screen.height/2-renderer.actualHeight/2;
        }
    }
}