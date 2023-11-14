import Vector2 from "./vector2"

export default class Transform{
    public position: Vector2=new Vector2;
    public rotation: number=0;
    public localScale: Vector2=Vector2.one;
}