class Dustbin{
    constructor(){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("dustbingreen.png")
        this.dustbinLeft = Bodies.rectangle(970, 200, 20, 120, {isStatic:true});
        this.dustbinRight = Bodies.rectangle(1148, 200, 20, 120, {isStatic:true});
        this.dustbinBottom = Bodies.rectangle(1060, 270, 200, 20, {isStatic:true});
        World.add(world, this.dustbinRight)
        World.add(world, this.dustbinLeft);
        World.add(world, this.dustbinBottom)
    }
    display(){
        rect(this.dustbinRight.position.x, this.dustbinRight.position.y, 20, 120)
        rect(this.dustbinLeft.position.x, this.dustbinLeft.position.y, 20, 120)
        rect(this.dustbinBottom.position.x, this.dustbinBottom.position.y, 200, 20)
        loadImage(image(this.image, 955, 205, 205))

    }
}