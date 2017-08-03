// AudioElement を作成
var audio;

window.onload = function () {
  // ここに読み込み完了時に実行してほしい内容を書く。
  audio = new Audio();
  // プリロードを設定する
  audio.preload = "none";
  // サウンドファイルまでの URL アドレスを指定
  audio.src = "audio/uni1464.wav";
  // 読み込みを開始する
  audio.load();




};

function weiwei(){


  query = "https://mandragora-rails.herokuapp.com/api/weather/?callback=?";
  $.get(query,function(data){
    console.log(data);
  });
}


