class Rubber{
	constructor(x,y,w,h)
	{
		// var options={
		// 	restitution:0.3
		// 	friction:5
		// 	density:1
		// }

		// var options={
		// 	restitution:5,
		// 	friction:5
		// 	density:20
		// }

		 var options={
		 	restitution:0.3,
		 	friction:5,
		 	density:1
		 }

		// var options{
		// 	restitution:5,
		// 	friction:5,
		// 	density:20
		// }


		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		// this.body=Bodies.ellipse(this.x, this.y, (this.r-20)/2, options)
		// World.add(world, this.body);

		// this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		// World.add(world, this.body);

		 this.body=Bodies.rectangle(this.x, this.y, this.w,this.h, options)
		 World.add(world, this.body);

		
		// this.body=Bodies(this.x, this.y, (this.r-20)/2, options)
		// World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			// ellipse(0,0,this.r, this.r);
			// circle(0,0,this.r, this.r);
			 rect(0,0,this.w, this.h);
			// body(0,0,this.r, this.r);
			pop()
	}

}