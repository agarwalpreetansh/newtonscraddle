class Rope{
    constructor(body1,body2,offsetX,offsetY){
      
      this.offsetX=offsetX
      this.offsetY=offsetY
        var options = {
          
          bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
    
        this.Rope= Constraint.create(options);
        World.add(world, this.Rope);
    }

      display(){
         var pointA=this.Rope.bodyA.position;
         var pointB=this.Rope.bodyB.position;

         strokeWeight(2);

         var Anchor1x=pointA.x
         var Anchor1y=pointA.y

         var Anchor2x=pointB.x+this.offsetX
         var Anchor2y=pointB.y+this.offsetY

         line(Anchor1x,Anchor1y,Anchor2x,Anchor2y);


          
            
          
    }
    
}

    
    
    