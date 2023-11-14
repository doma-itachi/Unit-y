import Vector2 from "./vector2";

export default class InputManager{
    public keys: Object={};
    public mousePosition: Vector2=new Vector2();
    constructor(canvas: HTMLCanvasElement){
        canvas.addEventListener("keydown", (e)=>this.keyDownHandler(e));
        canvas.addEventListener("keyup", (e)=>this.keyUpHandler(e));
        canvas.addEventListener("mousemove", (e)=>this.mouseMoveHandler(e));
    }

    public getKey(code: string){
        return Object.keys(this.keys).includes(code);
    }

    private keyDownHandler(e: KeyboardEvent){
        e.preventDefault();
        if(!e.repeat){
            this.keys[e.code]=true;
            console.log(this.keys);
        }
    }
    private keyUpHandler(e: KeyboardEvent){
        e.preventDefault();
        delete this.keys[e.code];
        console.log(this.keys);
    }
    private mouseMoveHandler(e: MouseEvent){
        this.mousePosition.set(e.clientX, e.clientY);
    }
}