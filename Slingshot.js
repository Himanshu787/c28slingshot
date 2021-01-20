class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 25
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB= pointB;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
        // var pointB = this.sling.bodyB.position;
            strokeWeight(4);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
    
}