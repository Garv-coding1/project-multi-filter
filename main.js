var noseX =0;
var noseY = 0;
var filter_choice = "";

function preload () {
        Lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
        Moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup () {
   
   canvas = createCanvas(300,300);
    canvas.position(625, 300);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    if (filter_choice == "Moustache") {
        Lipstick.hide();
    }
    if (filter_choice == "Lipstick") {
        Moustache.hide();
    }

    Pose_Net = ml5.poseNet(video, modelloaded);
    Pose_Net.on('pose', gotPose);
}

function gotPose(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + noseX);
        console.log("Nose y = " + noseY);
    }
}

function modelloaded() {
    console.log("PoseNet has been Initialized");
}

function draw () {
image(video, 0, 0, 300, 300);
if (filter_choice == "Lipstick") {
image(Lipstick, noseX - 20, noseY +15, 50, 20);
}
if (filter_choice == "Moustache") {
    image(Moustache, noseX -25, noseY + 5, 50, 20);

}
}

function mou() {
    filter_choice = "Moustache"
}

function lip() {
    filter_choice = "Lipstick"
}

function take_snapshot() {
    save(filter_choice + "Picture.png");
}