// AudioElement
var audio;

var jsonObj;
var weather = "";

var commons = ["voice_common0", "voice_common1", "voice_common2" ,"voice_common3" ,"voice_common4"];
var drys = ["voice_dry0", "voice_dry1", "voice_dry2"];
var sunnys = ["voice_sunny0", "voice_sunny1"];
var rains = ["voice_rain0"];

var rainDrops = [];

window.onload = function () {

  query = "https://mandragora-rails.herokuapp.com/api/weather/?callback=?";

  $.get(query,function(data){
    jsonObj = data;
    console.log(data);
    console.log("load Complete");

    //weather
    var imgUrl = 'url("img/sunny.png")';
    weather = jsonObj["weather"].toString();
    console.log(weather);

    //flower
    $('#flower').css('visibility', 'visible');

    date = new Date();
    hour = date.getHours();

    var be_rain = ["Rain", "Mist", "Drizzle"].indexOf(weather);
    var be_bright = (4<hour && hour<19);


    if (0 <= be_rain) {
      if (be_bright) {
        $('#top').css('background-color', '#ddd');
      } else {
        $('#top').css('background-color', '#aaa');
      }
    } else {
      if (be_bright) {
        $('#top').css('background-color', '#89BDDE');
      } else {
        $('#top').css('background-color', '#003149');
      }
    }

    if (weather == "Rain") {
      imgUrl = 'url("img/rain.png")';
    }else if(weather == "Mist"){

    }

    $('#weather').css('background-image', imgUrl);
    $('#weather').css('visibility', 'visible');

    if (0 <= be_rain) {
      for (var i=0;i<50;i++){
        rainDrops.push(new Rain());
      }
      setInterval(function() {
        $.each(rainDrops, function() {
          this.fall();
          if (window.innerHeight <= this.y) {
            this.y = 0;
          }
        });
      }, 50);
    }

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
var seq = 0;
Rain: {
  Rain = function() {
    this.id = seq;
    seq++;
    this.x = Math.random()*window.innerWidth;
    this.y = Math.random()*window.innerHeight;
    this.fallSpeed = Math.random() * 15 + 10;
    $("body").append($("<div>").addClass("rain_drop").attr("id", "rain_"+this.id).css({
      "top":  this.y+"px",
      "left": this.x+"px"
    }));
  };
  var p = Rain.prototype;
  p.fall = function() {
    this.y += this.fallSpeed;
    $("#rain_"+this.id).css("top", this.y+"px");
  }
}
