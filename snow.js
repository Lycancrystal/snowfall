class snow{
	constructor(x,y,r)
	{
		var options={
			restitution :0,
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/snow5.webp")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var snowPos=this.body.position;	
		var angle = this.body.angle;
		push()
		translate(snowPos.x, snoePos.y);
		// rectMode(CENTER);
		rotate(angle)
		fill(255,255,255);
		imageMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}