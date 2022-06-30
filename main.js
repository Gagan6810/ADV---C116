nose_x = "";
nose_y = "";
function preload(){
    mus = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,400);
    image(mus ,nose_x - 23,nose_y - 10,50,50);
}

function take_snapshot(){
    save('img.png');
}

function modelLoaded(){
    console.log('Posenet is Loaded');
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}