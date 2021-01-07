class Mango
{
    constructor(x,y,r)
    {
        var options = 
        {
            isStatic:true,
            restitution:0,
            friction:1,
        }


        this.r=r
        
        this.body = Bodies.circle(x,y,r,options);
        
        this.image = loadImage("mango.png");
        World.add(world,this.body);

    }
    display()
    {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        fill(255,0,255);
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0,0,this.r*2,this.r*2);
        pop()
    }
}