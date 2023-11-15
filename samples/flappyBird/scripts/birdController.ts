import BoxCollider from "../../../src/components/boxCollider";
import ImageRenderer from "../../../src/components/imageRenderer";
import IUnitLibComponents from "../../../src/interfaces/IUnitLibComponents";
import UnitBehaviour from "../../../src/unitBehaviour";
import FlappyBird from "../scenes/flappyBird";

export default class BirdController extends UnitBehaviour{
    private velocity=0;
    private gravity=1;
    private isPushedSpace=false;//スペース長押しを防ぐ
    public isHit=false;
    public isGameStart=false;
    public time=0;
    public timeFromGameOver=0;
    private retryFlag=false;

    public start(context: IUnitLibComponents) {
        throw new Error("Method not implemented.");
    }
    public update(context: IUnitLibComponents) {
        let ren=context.components.getComponent(ImageRenderer);
        if(ren){
            
            //ゲーム開始
            if(!this.isGameStart && context.input.getKey("Space")){
                this.isGameStart=true;
            }

            //ゲーム開始前の鳥アニメーション
            if(!this.isGameStart){
                this.time+=context.time.deltaTime;
                context.transform.position.y+=Math.sin(this.time*10)*3
            }

            //キーのご反応を防ぐ
            if(this.isHit)this.timeFromGameOver+=context.time.deltaTime;

            //ゲームオーバーからのリトライ
            if(this.isHit && context.input.getKey("Space") && !this.retryFlag && this.timeFromGameOver>3){
                this.retryFlag=true;
            }
            if(this.retryFlag && !context.input.getKey("Space"))context.sceneManager.loadScene(new FlappyBird());

            if(this.isGameStart){

                //ジャンプ処理
                const initSpd=15;
            
                if(!this.isHit && context.input.getKey("Space")){
                    if(!this.isPushedSpace){
                        this.velocity=-initSpd;
                        this.isPushedSpace=true;
                    }
                }else{
                    this.isPushedSpace=false;
                }
                this.velocity+=this.gravity;
                context.transform.position.y+=this.velocity;

                let ground=context.gameObject.findWithTag("ground");
                if(context.transform.position.y>ground.transform.position.y-ren.actualHeight){
                    context.transform.position.y=ground.transform.position.y-ren.actualHeight;
                    this.velocity=0;
                    this.isHit=true;
                }
            }
            
            try{
                let asset: ImageBitmap=context.assets.get("bird");
                context.transform.localScale.set(
                    65/asset.height
                );

                
                //コライダーのサイズ
                let col=context.components.getComponent(BoxCollider);
                if(col){
                    let isHit=false;
                    col.size.set(asset.width, asset.height);
                    let pipes=context.gameObject.findAllWithTag("pipe");
                    for(let pipe of pipes){
                        if(pipe&&col.checkHit(context, pipe)){
                            this.isHit=true;
                            break;
                        }
                    }
                    // let pipe=context.gameObject.findWithTag("pipe");
                    // if(pipe && col.checkHit(context, pipe)){
                    //     console.log("Hit!");
                    //     // console.log(col.checkHit(context, pipe));
                    // }
                }
            }catch{}
        }
        
    }
    
}