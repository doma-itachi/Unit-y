import InputManager from "./inputManager";
import Scene from "./scene";
import SceneManager from "./sceneManager";
import SplashScene from "./splash/splashScene";
import UnitGlobalProperty from "./unitGlobalProperty";

export default class UnitContext{
    private canvasElement: HTMLCanvasElement;
    private canvasContext: CanvasRenderingContext2D;

    private inputManager: InputManager;
    private resizeObserver: ResizeObserver;
    private dpr: number;

    private beforeRenderedTime=0;
    
    // public bgColor: string="#000000";
    public bgColor: string="#2b333d";
    
    public active: boolean=true;//画面の更新を行うか
    
    public sceneManager: SceneManager;

    constructor(element: HTMLCanvasElement | null, defaultScene: Scene){
        if(element==null)return;
        this.canvasElement=element;
        this.canvasElement.tabIndex=0;
        let ctx: CanvasRenderingContext2D|null=this.canvasElement.getContext("2d");
        if(ctx!==null){
            this.canvasContext=ctx;
        }
        else{
            throw new Error("Cannot get context2D");
        }

        //SceneManagerの初期化
        // this.defaultScene=defaultScene;
        this.sceneManager=new SceneManager();
        
        //splash
        if(UnitGlobalProperty.isShowSplashScreen){
            let splash=new SplashScene(defaultScene);
            splash.gameScene=defaultScene;
            this.sceneManager.loadScene(splash);
        }
        else{
            this.sceneManager.loadScene(defaultScene)
        }

        //リサイズ処理
        this.resizeObserver=new ResizeObserver(()=>this.resized());
        this.resizeObserver.observe(this.canvasElement);
        //解像度の設定
        this.dpr=window.devicePixelRatio;
        this.canvasContext.imageSmoothingEnabled=false;

        //APIの初期化
        this.inputManager=new InputManager(this.canvasElement);

        //描画開始
        this.beforeRenderedTime=Date.now();
        this.render();
    }

    public render(){
        this.canvasContext.fillStyle=this.bgColor;
        this.canvasContext.fillRect(0,0,this.canvasElement.width,this.canvasElement.height);
        
        //deltaTimeを求める
        const now=Date.now();
        const deltaTime=(now-this.beforeRenderedTime)/1000;
        this.beforeRenderedTime=now;

        if(this.sceneManager.sceneLoaded){
            this.sceneManager.currentScene.render({
                renderingContext: this.canvasContext,
                inputManager: this.inputManager,
                screen: {
                    width: this.canvasElement.width/this.dpr,
                    height: this.canvasElement.height/this.dpr
                },
                time: {
                    deltaTime: deltaTime
                },
                sceneManager: this.sceneManager
            });
        }

        if(this.active)requestAnimationFrame(this.render.bind(this));
    }

    public resized(){
        const width=this.canvasElement.clientWidth;
        const height=this.canvasElement.clientHeight;
        this.canvasElement.width=width*this.dpr;
        this.canvasElement.height=height*this.dpr;
        this.canvasContext.scale(this.dpr, this.dpr);
        this.canvasElement.style.width="100%";
        this.canvasElement.style.height="100%";
    }
}