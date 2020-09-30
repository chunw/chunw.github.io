function setup() {
	frameRate(5);
	createCanvas(windowWidth, windowHeight);
	background(0, 0, 0);
	fill(255,255,255);
}

function draw() {
	text("你能做到吗",random(0,windowWidth),random(0,windowHeight),100)
	text("你听明白了吗",random(0,windowWidth),random(0,windowHeight),100)
	text("你在互联网上发表不属实的言论",random(0,windowWidth),random(0,windowHeight),100)
	text("你的行为严重扰乱了社会秩序",random(0,windowWidth),random(0,windowHeight),100)
	text("是一种违法行为！",random(0,windowWidth),random(0,windowHeight),100)
}
