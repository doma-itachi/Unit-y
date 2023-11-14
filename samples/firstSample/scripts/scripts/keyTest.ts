import IUnitLibComponents from "../../../../src/interfaces/IUnitLibComponents";
import UnitLib from "../../../../src/main";
import UnitBehaviour from "../../../../src/unitBehaviour";

export default class KeyTest extends UnitBehaviour{
    public start(context: IUnitLibComponents) {
        
    }
    public update(context: IUnitLibComponents) {
        let textren=context.components.getComponents(UnitLib.renderer.TextRenderer);
        if(textren!=null){
                textren.text=JSON.stringify(context.input.keys)+" r:"+context.transform.rotation;
        }
        let speed=5;
        if(context.input.getKey("KeyW"))context.transform.position.y-=speed;
        if(context.input.getKey("KeyA"))context.transform.position.x-=speed;
        if(context.input.getKey("KeyD"))context.transform.position.x+=speed;
        if(context.input.getKey("KeyS"))context.transform.position.y+=speed;
        if(context.input.getKey("ArrowRight"))context.transform.rotation++;
        if(context.input.getKey("Enter"))context.transform.rotation=0;
    }
}