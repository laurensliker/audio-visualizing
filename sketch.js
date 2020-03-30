let song;
let button;
let amp;
let vol;
let diam;

function setup() {
  createCanvas(2200, 1200);

  // link your song here 

  song = loadSound("SoftandFuriousYourenogoodbutIloveyou.mp3", loaded);
  amp = new p5.Amplitude();
}

function draw() {
  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.3, 1, 20);
  let backg = (sin(frameCount) * diam / 2)
  background(backg, backg, backg);
  strokeWeight(1);
  translate(-140, -150);
  push();
  for (let y = 0; y <= height; y += 450)
    for (let x = 0; x <= width; x += 300) {
      pluslayered(x, y);
    }
  for (let y = 220; y <= height; y += 450)
    for (let x = 150; x <= width; x += 300) {
      pluslayered(x, y);
    }
  pop();
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(2);
    button.html("pause");
  } else {
    song.pause();
    button.html("play");
  }
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
  console.log("loaded");
}

function pluslayered(x, y) {

  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.3, 1, 40);
  let clbrightness = 1;

  drawplus(20 + x, 30 + y, stroke(253 + clbrightness, 104 + clbrightness, 131 + clbrightness), fill(253 + clbrightness, 104 + clbrightness, 131 + clbrightness));
  drawplus(30 + x, 40 + y, stroke(169 + clbrightness, 200 + clbrightness, 140 + clbrightness), fill(169 + clbrightness, 200 + clbrightness, 140 + clbrightness));
  drawplus(40 + x, 50 + y, stroke(143 + clbrightness, 173 + clbrightness, 217 + clbrightness), fill(143 + clbrightness, 173 + clbrightness, 217 + clbrightness));
}

function drawplus(x, y, stroke, fill) {

  // let circlescale = (sin(frameCount / 6) * 2 - 2) - 1 + x / 200;

  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.3, -1.5, 2);

  let circlescale = (sin(frameCount / 6) * diam) - 2 + x / 600;

  const smalldot = (circlescale);
  const mediumdot = (2 * circlescale);
  const dotsize3 = (3 * circlescale);

  //plus layer1
  ellipse(120 + x, 40 + y, smalldot);
  ellipse(140 + x, 40 + y, smalldot);

  ellipse(120 + x, 60 + y, smalldot);
  ellipse(140 + x, 60 + y, smalldot);

  ellipse(120 + x, 80 + y, smalldot);
  ellipse(140 + x, 80 + y, smalldot);

  ellipse(120 + x, 100 + y, smalldot);
  ellipse(140 + x, 100 + y, smalldot);

  ellipse(40 + x, 120 + y, smalldot);
  ellipse(60 + x, 120 + y, smalldot);
  ellipse(80 + x, 120 + y, smalldot);
  ellipse(100 + x, 120 + y, smalldot);
  ellipse(120 + x, 120 + y, smalldot);
  ellipse(140 + x, 120 + y, smalldot);
  ellipse(160 + x, 120 + y, smalldot);
  ellipse(180 + x, 120 + y, smalldot);
  ellipse(200 + x, 120 + y, smalldot);
  ellipse(220 + x, 120 + y, smalldot);

  ellipse(40 + x, 140 + y, smalldot);
  ellipse(60 + x, 140 + y, smalldot);
  ellipse(80 + x, 140 + y, smalldot);
  ellipse(100 + x, 140 + y, smalldot);
  ellipse(120 + x, 140 + y, smalldot);
  ellipse(140 + x, 140 + y, smalldot);
  ellipse(160 + x, 140 + y, smalldot);
  ellipse(180 + x, 140 + y, smalldot);
  ellipse(200 + x, 140 + y, smalldot);
  ellipse(220 + x, 140 + y, smalldot);

  ellipse(120 + x, 160 + y, smalldot);
  ellipse(140 + x, 160 + y, smalldot);

  ellipse(120 + x, 180 + y, smalldot);
  ellipse(140 + x, 180 + y, smalldot);

  ellipse(120 + x, 200 + y, smalldot);
  ellipse(140 + x, 200 + y, smalldot);

  ellipse(120 + x, 220 + y, smalldot);
  ellipse(140 + x, 220 + y, smalldot);

  //plus layer 2 
  ellipse(100 + x, 20 + y, mediumdot);
  ellipse(120 + x, 20 + y, mediumdot);
  ellipse(140 + x, 20 + y, mediumdot);
  ellipse(160 + x, 20 + y, mediumdot);

  ellipse(100 + x, 40 + y, mediumdot);
  ellipse(160 + x, 40 + y, mediumdot);

  ellipse(100 + x, 60 + y, mediumdot);
  ellipse(160 + x, 60 + y, mediumdot);

  ellipse(100 + x, 80 + y, mediumdot);
  ellipse(160 + x, 80 + y, mediumdot);

  ellipse(20 + x, 100 + y, mediumdot);
  ellipse(40 + x, 100 + y, mediumdot);
  ellipse(60 + x, 100 + y, mediumdot);
  ellipse(80 + x, 100 + y, mediumdot);
  ellipse(100 + x, 100 + y, mediumdot);
  ellipse(160 + x, 100 + y, mediumdot);
  ellipse(180 + x, 100 + y, mediumdot);
  ellipse(200 + x, 100 + y, mediumdot);
  ellipse(220 + x, 100 + y, mediumdot);
  ellipse(240 + x, 100 + y, mediumdot);

  ellipse(20 + x, 120 + y, mediumdot);
  ellipse(240 + x, 120 + y, mediumdot);

  ellipse(20 + x, 140 + y, mediumdot);
  ellipse(240 + x, 140 + y, mediumdot);

  ellipse(20 + x, 160 + y, mediumdot);
  ellipse(40 + x, 160 + y, mediumdot);
  ellipse(60 + x, 160 + y, mediumdot);
  ellipse(80 + x, 160 + y, mediumdot);
  ellipse(100 + x, 160 + y, mediumdot);
  ellipse(160 + x, 160 + y, mediumdot);
  ellipse(180 + x, 160 + y, mediumdot);
  ellipse(200 + x, 160 + y, mediumdot);
  ellipse(220 + x, 160 + y, mediumdot);
  ellipse(240 + x, 160 + y, mediumdot);

  ellipse(100 + x, 180 + y, mediumdot);
  ellipse(160 + x, 180 + y, mediumdot);

  ellipse(100 + x, 200 + y, mediumdot);
  ellipse(160 + x, 200 + y, mediumdot);

  ellipse(100 + x, 220 + y, mediumdot);
  ellipse(160 + x, 220 + y, mediumdot);

  ellipse(100 + x, 240 + y, mediumdot);
  ellipse(120 + x, 240 + y, mediumdot);
  ellipse(140 + x, 240 + y, mediumdot);
  ellipse(160 + x, 240 + y, mediumdot);

  //plus layer 3 
  ellipse(80 + x, 0 + y, dotsize3);
  ellipse(100 + x, 0 + y, dotsize3);
  ellipse(120 + x, 0 + y, dotsize3);
  ellipse(140 + x, 0 + y, dotsize3);
  ellipse(160 + x, 0 + y, dotsize3);
  ellipse(180 + x, 0 + y, dotsize3);

  ellipse(80 + x, 20 + y, dotsize3);
  ellipse(180 + x, 20 + y, dotsize3);

  ellipse(80 + x, 40 + y, dotsize3);
  ellipse(180 + x, 40 + y, dotsize3);

  ellipse(80 + x, 60 + y, dotsize3);
  ellipse(180 + x, 60 + y, dotsize3);

  ellipse(0 + x, 80 + y, dotsize3);
  ellipse(20 + x, 80 + y, dotsize3);
  ellipse(40 + x, 80 + y, dotsize3);
  ellipse(60 + x, 80 + y, dotsize3);
  ellipse(80 + x, 80 + y, dotsize3);
  ellipse(180 + x, 80 + y, dotsize3);
  ellipse(200 + x, 80 + y, dotsize3);
  ellipse(220 + x, 80 + y, dotsize3);
  ellipse(240 + x, 80 + y, dotsize3);
  ellipse(260 + x, 80 + y, dotsize3);

  ellipse(0 + x, 100 + y, dotsize3);
  ellipse(260 + x, 100 + y, dotsize3);

  ellipse(0 + x, 120 + y, dotsize3);
  ellipse(260 + x, 120 + y, dotsize3);

  ellipse(0 + x, 140 + y, dotsize3);
  ellipse(260 + x, 140 + y, dotsize3);

  ellipse(0 + x, 160 + y, dotsize3);
  ellipse(260 + x, 160 + y, dotsize3);

  ellipse(0 + x, 180 + y, dotsize3);
  ellipse(20 + x, 180 + y, dotsize3);
  ellipse(40 + x, 180 + y, dotsize3);
  ellipse(60 + x, 180 + y, dotsize3);
  ellipse(80 + x, 180 + y, dotsize3);
  ellipse(180 + x, 180 + y, dotsize3);
  ellipse(200 + x, 180 + y, dotsize3);
  ellipse(220 + x, 180 + y, dotsize3);
  ellipse(240 + x, 180 + y, dotsize3);
  ellipse(260 + x, 180 + y, dotsize3);

  ellipse(80 + x, 200 + y, dotsize3);
  ellipse(180 + x, 200 + y, dotsize3);

  ellipse(80 + x, 220 + y, dotsize3);
  ellipse(180 + x, 220 + y, dotsize3);

  ellipse(80 + x, 240 + y, dotsize3);
  ellipse(180 + x, 240 + y, dotsize3);

  ellipse(80 + x, 260 + y, dotsize3);
  ellipse(100 + x, 260 + y, dotsize3);
  ellipse(120 + x, 260 + y, dotsize3);
  ellipse(140 + x, 260 + y, dotsize3);
  ellipse(160 + x, 260 + y, dotsize3);
  ellipse(180 + x, 260 + y, dotsize3);
}
