import GameObject from "../gameObject";

export default interface IGameObjectController{
    gameObject: GameObject;//ゲームオブジェクト自身
    instantiate(instance: GameObject);
    findWithTag(tag: string): GameObject;
    findAllWithTag(tag: string): GameObject[];
}