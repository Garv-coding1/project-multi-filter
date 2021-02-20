var filter_choice = "";

function preload () {

}

function setup () {
   canvas = createCanvas(300,300);
    canvas.position(625, 300);
}

function draw () {

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