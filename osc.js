



 var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
 var oscillator1 = audioCtx.createOscillator(); 
 oscillator1.start();
 var oscillator2 = audioCtx.createOscillator(); 
 oscillator2.start();



 // create Oscillator node

function benavaz(osc, basamad, shape) {
    osc.type = shape;
    osc.frequency.setValueAtTime(basamad, audioCtx.currentTime); // value in hertz
    osc.connect(audioCtx.destination);

}



function maks(osc) {
    osc.disconnect(audioCtx.destination);

}




