class Ground{
    constructor(x,y,w,h){
    let Options = {
        isStatic : true
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world,this.body);

}
display(){
    rect(0,0,this.w,this.h);
}
}