
class Slingshot{ 
    constructor(bodyA,pointB){
         var options ={
              bodyA:bodyA, pointB:pointB, stifness:0.04, length:10 }
              this.pointB=pointB;
              this.slingshot=Constraint.create(options)
              World.add(world,this.slingshot);
             } 
            display(){
                var pointA=this.slingshot.bodyA.position;
                var pointB=this.pointB;
                line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
            }