$(document).ready(function() {
  
  const loadAndPlay = (pad) => {
   pad.load();
   pad.play();
  }

  const padsConfig = {
    D: {
      audio: 'https://demo.agektmr.com/drumpad/samples/Kit3/hihat.wav',
      color: 'green',
      text: 'hat',
    },
    F: {
      audio: 'https://demo.agektmr.com/drumpad/samples/Kit3/snare.wav',
      color: 'green',
      text: 'snare',
    },
    J: {
      audio: 'https://demo.agektmr.com/drumpad/samples/Kit3/kick.wav',
      color: 'green',
      text: 'kick',
    },
    K: {
      audio: 'https://demo.agektmr.com/drumpad/samples/Kit3/tom3.wav',
      color: 'green',
      text: 'low tom',
    },
    U: {
      audio: 'https://demo.agektmr.com/drumpad/samples/Kit8/hihat.wav',
      color: 'green',
      text: 'snap',
    },
    I: {
      audio: 'https://demo.agektmr.com/drumpad/samples/Kit8/snare.wav',
      color: 'green',
      text: 'clap',
    },
    V: {
      audio: 'https://demo.agektmr.com/drumpad/samples/LINN/snare.wav',
      color: 'green',
      text: 'snare2',
    },
    W: {
      audio: 'https://demo.agektmr.com/drumpad/samples/CR78/tom1.wav',
      color: 'green',
      text: 'boop',
    },
    E: {
      audio: 'https://demo.agektmr.com/drumpad/samples/CR78/tom2.wav',
      color: 'green',
      text: 'boop',
    },
    R: {
      audio: 'https://demo.agektmr.com/drumpad/samples/CR78/tom3.wav',
      color: 'green',
      text: 'boop',
    },
  }

  const pads = {}
  for (key in padsConfig) {
     let pad = new Audio(padsConfig[key].audio);
     $("."+key).mousedown(() => {
        //open editor;
        $(".editor").css("display", "block");

     });
     $("."+key).css("background-color", padsConfig[key].color);
     $("."+key).text(padsConfig[key].text);
     pads[key] = pad;
  };
  
  $(window).keydown(function(e) {
    var kc = getKey(e.keyCode);
    if (kc){
      $("."+kc).addClass("active");
    }

    if (pads[kc]){
      loadAndPlay(pads[kc]);
    }
  });

  $(window).keyup(function(e) {
    var kc = getKey(e.keyCode);
    if (kc){
      $("."+kc).removeClass("active");
    }
  });

});

const getKey = (keyCode) => {
  //make sure its a letter
  if(keyCode < 65 || keyCode > 90){
    return;
  }
  return String.fromCharCode(keyCode);

}

const updatePad = () => {

}