function preload() {

}
function setup() {
    canvas = createCanvas(640,480)
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,230,150,220,200);
    fill(48, 184, 50);
    rect(90,40,460,20);
    fill(227, 18, 18);
    circle(50,50,80);
    fill(48, 184, 50);
    rect(40,90,20,350);
    fill(227, 18, 18);
    circle(50,400,80);
    fill(48, 184, 50);
    rect(90,390,460,20);
    fill(227, 18, 18);
    circle(590,400,80);
    fill(48, 184, 50);
    rect(583,90,20,270);
    fill(227, 18, 18);
    circle(590,50,80);
}
function take_snapshot() {
    save("Picture_photaframe.png");
}