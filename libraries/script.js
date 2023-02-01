const BOUNDS = {x: window.innerWidth, y: window.innerHeight, vecSize: 10};
const CIRCLE_COUNT = 16;
const circles = [];
const INIT_SIZE = Math.min(BOUNDS.x,BOUNDS.y)/10;
const DOT_SIZE = (Math.min(BOUNDS.x,BOUNDS.y) <= 500)? 5 : 10;
const SHAPE_POINTS = [1.05,1.265,3.1415/2,2.1,2.51,3.1415,3.77,4.18,4.7,5.0,5.23]

function setup() {
	colorMode(HSB,255);
	createCanvas(BOUNDS.x, BOUNDS.y);
	background(0);
	addEventListener("resize", () => {
		BOUNDS.x = window.innerWidth;
		BOUNDS.y = window.innerHeight;
		createCanvas(BOUNDS.x, BOUNDS.y);
		background(0);
		stroke(255,16);
		fill(0,0);  
	});
	stroke(255,16);
	fill(0,0);
	lastCircle = new Circle(BOUNDS.x/2,BOUNDS.y/2,0,{r:0});
	for(i = 0; i < CIRCLE_COUNT; ++i){
		tmp = new Circle(lastCircle.init_x,lastCircle.init_y-lastCircle.r,INIT_SIZE - map(i,0,CIRCLE_COUNT-1,0,INIT_SIZE-DOT_SIZE),lastCircle);
		lastCircle = tmp;
		circles.push(tmp);
	}
}

col = false;
function draw() {
	background(0,64);
	if(Math.abs(Circle.offset - SHAPE_POINTS[Circle.matches])<= 0.01){
			if(col == false){
				col = true;
			}
	}else if(col == true){
		col = false;
		Circle.matches++;
	}
	circles.forEach(element => {
		element.draw(DOT_SIZE,(col)? color('blue') : 255);
	});
	Circle.move();
}
