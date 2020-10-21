class Ground
{
    constructor(x,y,width,height)
    {
        var options={
            
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        World.add(world,this.body);
    }


    display()
    {
        var posA=this.body.position.x;
        var posB=this.body.position.y;
        rectMode(CENTER);
        fill("brown");
        rect(posA,posB,this.width,this.height);
    }
}