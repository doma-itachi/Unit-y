import UnitBehaviour from "./unitBehaviour";

export default class Components{
    public componentList: UnitBehaviour[]=new Array();
    public addComponent(component: UnitBehaviour){
        this.componentList.push(component);
    }
    public getComponent<T extends UnitBehaviour>(componentType: new()=>T): T|null{
        for(let component of this.componentList){
            if(component instanceof componentType){
                return component;
            }
        }
        return null;
    }
    public getComponents<T extends UnitBehaviour>(componentType: new()=>T): T[]{
        let result: T[]=[];
        for(let component of this.componentList){
            if(component instanceof componentType){
                result.push(component);
            }
        }
        return result;
    }
    public destroyComponent<T extends UnitBehaviour>(componentType: new()=>T){
        for(let i=0;i<this.componentList.length;i++){
            if(this.componentList[i] instanceof componentType){
                this.componentList.splice(i, 1);
                return;
            }
        }
    }
}