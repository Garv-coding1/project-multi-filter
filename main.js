var filter_choice = "";

function preload () {

}

function setup () {
   canvas = createCanvas(300,300);
    canvas.position(625, 300);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    Pose_Net = ml5.poseNet(video, modelloaded);
    Pose_Net.on('pose', gotPose);
}

function gotPose(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.x);
    }
}

function modelloaded() {
    console.log("PoseNet has been Initialized");
}

function draw () {
image(video, 0, 0, 300, 300);

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