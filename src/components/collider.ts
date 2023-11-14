import GameObject from "../gameObject";
import IUnitLibComponents from "../interfaces/IUnitLibComponents";
import UnitBehaviour from "../unitBehaviour";

export default abstract class Collider extends UnitBehaviour{
    public name;
    public abstract checkHit(context: IUnitLibComponents, gameObject: GameObject);
}