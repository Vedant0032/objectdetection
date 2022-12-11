objects=[];
img=""
objectDetector="";

status="";

function preload(){
    img= loadImage('dog.jpg');
}

function setup(){
    canvas=createCanvas(640,420)
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="status: detecting object";

}

function modelLoaded(){
    status=true;
    objectDetector.detect(img, gotResults);
    console.log("model is loaded");

}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
   
        console.log(results);
objects = results;

    
}

function draw(){
    if(status != undefined){
        image(img, 0, 0, 640, 420)

        for(var i=0; i<objects.length;i++){

    
            document.getElementById("status").innerHTML="status:object detected";
            fill(245, 30, 254);
            
            percent = floor(objects[i].confidence*100)
            noFill()
            stroke(245, 30, 254);
            
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
                }
            
            }
    }
