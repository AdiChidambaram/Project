pp = "";
hp = "";


function setup() {
    canvas = createCanvas(450, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
}

function preload() {
    pp = loadSound("music.mp3");
    hp = loadSound("music2.mp3");
}

function draw() {
    image(video, 0 , 0, 450, 450);
}