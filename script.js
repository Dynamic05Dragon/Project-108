//https://teachablemachine.withgoogle.com/models/3WFRiilKC/

function StartClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3WFRiilKC/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog=0;
var cat=0;

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
   
    document.getElementById("result_label").innerHTML="Detected Voice Is Of- "+results[0].label;
    document.getElementById("result_count").innerHTML='Detected dog-'+dog+'Detected cat-'+cat;
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img=document.getElementById('animal_img');
    if(results[0].label=="barking"){
        img.src="Dog.jpg";
        dog=dog+1;

    }
    else if(results[0].label=="meowing"){
        img.src="Cat.jpg";
        cat=cat+1;
    }
    else if(results[0].label=="mooing"){
        img.src="Cow.jpg";
        cow=cow+1;
    }
    else if(results[0].label=="roaring"){
        img.src="Lion.jpg";
        lion=lion+1
    }
    else{
        img.src="listen.gif";
    }

}

}