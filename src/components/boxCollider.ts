import GameObject from "../gameObject";
import IUnitLibComponents from "../interfaces/IUnitLibComponents";
import UnitGlobalProperty from "../unitGlobalProperty";
import Vector2 from "../vector2";
import Collider from "./collider";

export default class BoxCollider extends Collider{
    public center: Vector2=new Vector2();
    public size: Vector2=new Vector2();
    public start(context: IUnitLibComponents) {
        throw new Error("Method not implemented.");
    }
    public update(context: IUnitLibComponents) {
        if(UnitGlobalProperty.showColliderBounds){
            let ctx=context.renderingContext;
            let transform=context.transform;
            ctx.save();
            ctx.strokeStyle="blue";
            ctx.strokeRect(
                transform.position.x+this.center.x,
                transform.position.y+this.center.y,
                this.size.x*transform.localScale.x,
                this.size.y*transform.localScale.y,
                );
            ctx.restore();
        }
    }
    public checkHit(context: IUnitLibComponents, gameObject: GameObject): boolean {
        let cols=gameObject.components.getComponents(BoxCollider);
        let isHit=false;
        for(let col of cols){
            const x1=context.transform.position.x+this.center.x;
            const y1=context.transform.position.y+this.center.y;
            const w1=this.size.x*context.transform.localScale.x;
            const h1=this.size.y*context.transform.localScale.y;
            const x2=gameObject.transform.position.x+col.center.x;
            const y2=gameObject.transform.position.y+col.center.y;
            const w2=col.size.x*gameObject.transform.localScale.x;
            const h2=col.size.y*gameObject.transform.localScale.y;
            if(
                x1<x2+w2 &&
                x1+w1>x2 &&
                y1<y2+h2 &&
                h1+y1>y2
            )isHit=true;
        }
        return isHit;
    }
}