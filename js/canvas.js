
$(function(){
  // canvasの大きさを指定
  var h = $("#graph").height();
  var w = $("#graph").width();
  var canvas = $("#graph_canvas");
  canvas.attr("height", h);
  canvas.attr("width",  w);
  var canvas = document.getElementById('graph_canvas');

  var ctx = canvas.getContext("2d");

  var padding = 40;
  var graphHeight = h - 20 - padding*3/2;
  var graphWidth  = w - 20 - padding*2;

  var base = function() {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "white";
    ctx.fillRect(10, 10, w - 20, h -20);
  }
  data = [
    {weather: "Clear", temp: "29", hum: "84", time_label: "10:30"},
    {weather: "Clouds", temp: "22", hum: "60", time_label: "11:00"},
    {weather: "Clouds", temp: "22", hum: "40", time_label: "11:30"},
    {weather: "Clouds", temp: "22", hum: "50", time_label: "12:00"},
    {weather: "Clouds", temp: "22", hum: "75", time_label: "12:30"},
    {weather: "Clouds", temp: "22", hum: "76", time_label: "13:00"},
    {weather: "Clouds", temp: "22", hum: "80", time_label: "13:30"},
    {weather: "Clouds", temp: "22", hum: "50", time_label: "14:00"},
    {weather: "Clouds", temp: "22", hum: "60", time_label: "14:30"},
    {weather: "Clouds", temp: "22", hum: "30", time_label: "15:00"},
    {weather: "Clouds", temp: "22", hum: "80", time_label: "15:30"},
    {weather: "Clouds", temp: "22", hum: "70", time_label: "16:00"},
    {weather: "Clouds", temp: "22", hum: "40", time_label: "16:30"}
  ];
  var graph = function() {
    ctx.beginPath();
    ctx.strokeStyle = "#0086AD";
    ctx.lineWidth = 1;
    ctx.moveTo(10 + padding, h - 10 - padding);
    ctx.lineTo(10 + padding,     10 + padding/2);
    ctx.moveTo(10 + padding, h - 10 - padding);
    ctx.lineTo(w - 10 - padding, h - 10 - padding);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = "#9ED1D7";

    ctx.beginPath();
    ctx.moveTo(10 + padding,     10 + padding/2 + graphHeight/5);
    ctx.lineTo(w - 10 - padding, 10 + padding/2 + graphHeight/5);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10 + padding,     10 + padding/2 + graphHeight/2);
    ctx.lineTo(w - 10 - padding, 10 + padding/2 + graphHeight/2);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(10 + padding,     h - 10 - padding - graphHeight/5);
    ctx.lineTo(w - 10 - padding, h - 10 - padding - graphHeight/5);
    ctx.closePath();
    ctx.stroke();

    for (var i=1;i<=5;i++) {
      ctx.beginPath();
      ctx.moveTo(10 + padding + graphWidth*i/6, h - 10 - padding);
      ctx.lineTo(10 + padding + graphWidth*i/6, 10 + padding);
      ctx.closePath();
      ctx.stroke();
    }

    ctx.font = "13px Arial";
    ctx.textAlign = "center";
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    var haba = (w - 20 - 2 * padding) / 6;
    for (var i=0;i<7;i++) {
      ctx.fillText(data[i*2]["time_label"], 10 + padding + haba * i, h - 10 - padding/2);
    }
    ctx.textBaseline="middle";
    ctx.fillText("80%", 10 + padding/2, 10 + padding/2 + graphHeight/5);
    ctx.fillText("20%", 10 + padding/2, h - 10 - padding - graphHeight/5);
  }
  var graphData = function() {
    ctx.strokeStyle = "#0086AD";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(10 + padding, h - 10 - padding - graphHeight*data[0]["hum"]/100);
    for (var i=1;i<13;i++) {
      ctx.lineTo(10 + padding + graphWidth*i/12, h - 10 - padding - graphHeight*data[i]["hum"]/100);
    }
    ctx.stroke();
  }

  var App;
  var app;
  App = function(){
    this.setup = function() {
      var dpr = window.devicePixelRatio || 1;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
    }
    this.draw = function() {
      base();
      graph();
      graphData();
      setTimeout(function(){
        this.draw();
      }.bind(this), 10);
    }
  }
  app = new App();
  app.setup();
  app.draw();

});
