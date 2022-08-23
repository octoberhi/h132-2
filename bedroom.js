picture="";
status="";
objects = [];
function preload()
{
picture = loadImage("bedroom.jpg");
}

function setup()
{
canvas = createCanvas(500,300);
canvas.center();
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML ="Status: Detecting Objects";
}

function modelLoaded()
{
console.log("Model is loaded");
status = true;
objectDetector.detect(picture, gotResult);
}
function gotResult(error,results)
{
if(error)
{
console.error(error);
}
console.log(results);
}
function draw()
{
image(picture, 0,0,500,300);

if(status != "")
{
for (i=0; i<objects.length;i++)
{
    document.getElementById("status").innerHTML ="Status: Objects Detected";
    noFill();
    stroke("red");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    fill("red");
    percent = floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent +"%",objects[i].x+15,objects[i].y+15);

}
}
}