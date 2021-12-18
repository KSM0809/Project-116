nose_x= 0;
nose_y= 0;

function preload(){
    lipstick= loadImage('https://i.postimg.cc/ZYPQnWGJ/lips-kiss-vector-patch-sticker-260nw-521447914-removebg-preview.png');
}

function setup(){
    canvas= createCanvas(400, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    video.size(400, 300);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 400, 300);
    image(lipstick, nose_x, nose_y, 50, 40);
    
}

function take_snapshot(){
    save('my_filter_image.png');
}

function modelLoaded(){
    console.log('poseNet is initialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x= results[0].pose.nose.x- 25;
        nose_y= results[0].pose.nose.y+ 15;
        console.log("nose x= " + nose_x);
        console.log("nose y= " + nose_y );
    }
}