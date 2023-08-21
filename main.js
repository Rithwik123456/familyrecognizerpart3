/* https://teachablemachine.withgoogle.com/models/WDsleVOox/ */

Webcam.set({
    width:350 ,
    height: 300 ,
    image_format:"png",
    png_quality:90
}
);

var camera = document.getElementById("camera");

Webcam.attach(camera);

function captureImage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captureImage' src='"+data_uri+"'>";
    })
}

console.log("ml5version:",ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WDsleVOox/model.json", modelLoaded);
function modelLoaded(){
    console.log("model has been loaded ")
}

function identifyImage(){
    img= document.getElementById('captureImage');
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML=results[0].label
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}