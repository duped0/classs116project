function preload() {
  man_moustache = loadImage('moustache.png');
}

mousetacheX=0;
mousetacheY=0;

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    moustacheX = results[0].pose.moustache.x-15;
    moustacheY = results[0].pose.moustache.y-15;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(man_mousetache, moustacheX, moustacheY, 30, 30);
}

function take_snapshot(){    
  save('myMousetachFilterImage.png');
}