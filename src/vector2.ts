export default class Vector2{
    public x: number;
    public y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(x?: number, y?: number){
        if(x&&y){
            this.x=x;
            this.y=y;
        }
        else{
            this.x=0;
            this.y=0;
        }
    }
    
    set(value: number);
    set(x: number, y: number);
    set(x: number, y?: number){
        if(y){
            this.x=x;
            this.y=y;
        }else{
            this.x=x;
            this.y=x;
        }
    }

    //テンプレート
    static get one(){return new Vector2(1, 1);}
}