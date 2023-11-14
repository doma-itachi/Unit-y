export default class AssetManager{
    private assets={};
    async regist(key: string, url: string){
        let blob: Blob;
        blob=await (await fetch(url)).blob();
        if(blob.type.match(/^image/)){
            this.assets[key]=await createImageBitmap(blob);
        }
        else{
            throw new Error("Unsupported asset type");
        }
    }
    get(key: string){
        return this.assets[key];
    }
}