//ml5.js
let video;
let handPose;
let hands = [];
let numP = 1;
let particles = [];

function preload() {
  // Load the handPose model
  handPose = ml5.handPose({ flipped: true });
}
function mousePressed() {
  console.log(hands);
}

function getHands(results) {
  hands = results;
}

function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, getHands);
}

function draw() {
  image(video, 0, 0);
  if (hands.length > 0) {
    let hand = hands[0];
    for (let hand of hands) {
      if (hand.confidence > 0.1) {
        for (let i = 0; i < hand.keypoints.length; i++) {
          let keypoint = hand.keypoints[i];
          // if(hand.handedness == 'Left' ){
          // fill(255, 0, 255);
          // }else{
          //   fill(255,255,0)
          // }
          noStroke();
          circle(keypoint.x, keypoint.y, 12);
           for (let i = 0; i < numP; i++) {
             particles.push(new Particle(keypoint.x, keypoint.y, 10));
           }

        }
      }
    }
  }

    for (let i = particles.length - 1; i > 0; i--) {
      particles[i].draw();
      particles[i].update();

      if (
        particles[i].pos.x > width ||
        particles[i].pos.x < 0 ||
        particles[i].pos.y > height ||
        particles[i].pos.y < 0
      ) {
        particles.splice(i, 1);
      }
    }
    console.log(particles.length);
}

function windowResized() {
  resizeCanvas(400, 400);
}
