// AudioElement
var audio;

var jsonObj;
var weather = "";

window.onload = function () {

  query = "https://mandragora-rails.herokuapp.com/api/weather/?callback=?";
  $.get(query,function(data){
    jsonObj = data;
    console.log("load Complete");

    //flower
    $('#flower').css('visibility', 'visible');

    //weather
    var imgUrl = 'url("img/sunny.png")';
    weather = jsonObj["weather"].toString();
    console.log(weather);

    if (weather == "Rain") {
      imgUrl = 'url("img/rain.png")';
    }else if(weather == "Mist"){

    }

    $('#weather').css('background-image', imgUrl);
    $('#weather').css('visibility', 'visible');

  });

  audio = new Audio();
  audio.preload = "none";
  audio.src = "audio/uni1465.wav";
  audio.load();
};

function weiwei(){

  audio.play();
  //alert(jsonObj["weather"]);

}


