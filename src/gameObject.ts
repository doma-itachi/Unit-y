import UnitBehaviour from "./unitBehaviour";
import Transform from "./transform";
import Components from "./components";
import AssetManager from "./assetManager";

export default abstract class GameObject{
    public abstract name: string;
    public abstract tag: string;
    public destroyAlready: boolean=false;
    public transform: Transform=new Transform();
    public components: Components=new Components();
    // abstract assetRegister(asset: AssetManager);
}