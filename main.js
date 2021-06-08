song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
song=loadSound('MUSIC.mp3');
}
function setup(){
canvas=createCanvas(500,500);
canvas.center();

video=createCapture(VIDEO);
video.hide();


pose=ml5.poseNet(video,modelloaded);
pose.on('pose',gotposes);
}

function modelloaded(){
    console.log('posenet is loaded');
}

function draw(){
image(video,0,0,500,500);
}

function play(){
    song.play();
    song.setVolume(0.5);
    song.rate(1);

}

function gotposes(results){
if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
}
}



