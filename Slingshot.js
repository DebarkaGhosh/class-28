class Slingshot {

    constructor ( bodyA,pointB){

        var option = {
            bodyA: bodyA,
            pointB: pointB,
            length: 20,
            stiffness: 0.04
        }
        

        this.pointB = pointB;
        this.sling = Constraint.create(option)
        World.add(world,this.sling);
       }

       fly(){
           this.sling.bodyA= null
       }

       display(){

        if(this.sling.bodyA){
            strokeWeight(4);
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x , this.pointB.y)
     
        }

          
       }
                 
        

}