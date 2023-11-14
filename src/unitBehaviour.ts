import IUnitLibComponents from "./interfaces/IUnitLibComponents";

export default abstract class UnitBehaviour{
    public abstract start(context: IUnitLibComponents);
    public abstract update(context: IUnitLibComponents);
}