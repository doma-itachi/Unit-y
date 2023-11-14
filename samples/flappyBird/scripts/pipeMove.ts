import IUnitLibComponents from "../../../src/interfaces/IUnitLibComponents";
import UnitBehaviour from "../../../src/unitBehaviour";
import Vector2 from "../../../src/vector2";
import PipeGameObject from "../gameObjects/pipe";
import BirdController from "./birdController";

export default class PipeMove extends UnitBehaviour{
    public readonly spawnTime=2;//パイプがスポーンする間隔
    public readonly pipeSpeed=3;
    public time=0;
    public start(context: IUnitLibComponents) {
        throw new Error("Method not implemented.");
    }
    public update(context: IUnitLibComponents) {
        //パイプが自動で消されているかチェック
        // let gos=context.gameObject.findAllWithTag("pipe");
        // console.log(`pipe count: ${gos.length}`)

        let birdHit=context.gameObject.findWithTag("player").components.getComponent(BirdController);
        
        //パイプのスポーン処理
        if(!birdHit?.isHit && birdHit?.isGameStart){
            const pipeMargin=50;
            this.time+=context.time.deltaTime;
            if(this.time>this.spawnTime){
                this.time=0;
                let groundHeight=context.gameObject.findWithTag("ground").transform.position.y;
                let maxPipeHeight=context.screen.height-300-(context.screen.height-groundHeight);
                let randHeight=maxPipeHeight-2*pipeMargin;
                let pipe=new PipeGameObject(Math.random()*randHeight+50, 300);
                pipe.transform.position.x=context.screen.width;
                context.gameObject.instantiate(pipe);
            }
    
            //パイプを動かす
            let pipes=context.gameObject.findAllWithTag("pipe");
            for(let i of pipes){
                i.transform.position.x-=this.pipeSpeed;
            }
        }

        }
    
}