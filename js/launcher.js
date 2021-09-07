class Launcher{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.008, 
			length:7
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	
	fly()
	{
		//Write code to set the bodyA of launcher to null
		this.launcher.bodyA = null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.launcher.bodyA.position;
			var pointB=this.launcher.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}