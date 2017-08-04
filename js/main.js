// AudioElement
var audio;

var jsonObj;
var weather = "";

var commons = ["voice_common0", "voice_common1", "voice_common2" ,"voice_common3" ,"voice_common4"];
var drys = ["voice_dry0", "voice_dry1", "voice_dry2"];
var sunnys = ["voice_sunny0", "voice_sunny1"];
var rains = ["voice_rain0"];

window.onload = function () {

  query = "https://mandragora-rails.herokuapp.com/api/weather/?callback=?";

  $.get(query,function(data){
    jsonObj = data;
    console.log(data);
    console.log("load Complete");

    //flower
    $('#flower').css('visibility', 'visible');

    date = new Date();
    hour = date.getHours();
    console.log(hour);

    //夜は暗く
    if (4<hour && hour<19 ) {
      $('#top').css('background-color', 'lightskyblue');
    }else{
      $('#top').css('background-color', 'black');
    }

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
  audio.load();
};

function weiwei(){

  rnd = Math.floor((Math.random() * commons.length));
    console.log(rnd);

  path = "audio/" + commons[rnd] + ".wav";
  audio.src = path;

  audio.play();
  //alert(jsonObj["weather"]);

}


