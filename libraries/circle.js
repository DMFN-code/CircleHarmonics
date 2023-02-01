class Circle{
    static offset = 0.0;
    static matches = 0;
    static index = 0;
    static increment = 0.002;
    constructor(x,y,r,parent){
        this.init_x = x;
        this.x = x;
        this.init_y = y;
        this.y = y;
        this.r = r;
        this.parent = parent;
        this.index = Circle.index;
        Circle.index += 1;
    }
    draw(dot_weight,color){
        this.x = this.parent.x + cos((Circle.offset * this.index) - HALF_PI) * this.parent.r;
        this.y = this.parent.y + sin((Circle.offset * this.index) - HALF_PI) * this.parent.r;
        circle(this.x,this.y,this.r * 2);
        if(this.parent.r == 0)
            return;
        push();
        stroke(color);
        strokeWeight(dot_weight);
        point(this.x,this.y);
        pop();
    }
    static move(){
        Circle.offset += Circle.increment;
        if(abs(Circle.offset) >= TWO_PI){
            Circle.offset = 0;
            Circle.matches = 0;
        }
    }
}