class Boy {

    constructor(x,y,width,height){

    var options = {
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2

    }        


    this.body = Bodies.rectangle(x,y,width,height, options);

    this.image = loadImage("boy.png");

    World.add(world,this.body);

    }


    display()
    {
        var pos = this.body.position;
          push()
	translate(pos.x, pos.y);
          fill(255,0,255)
	imageMode(CENTER);
	image(this.image, 0,0,250,250)
	pop()
    }
}