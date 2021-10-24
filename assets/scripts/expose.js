// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  /*select horn, display image and update sound file*/
  const horn = document.getElementById('horn-select');
  horn.addEventListener('change', (event) => {
    var picked = event.target.value;
    const img = document.querySelector("img");
    img.src = 'assets/images/'+picked+ '.svg'; // update image src path
    const noise = document.querySelector("audio");
    noise.src = 'assets/audio/'+picked+ '.mp3'; // update audio path
  })
  //gather elements to edit volume sliders
  const vol = document.getElementById("volume-controls");
  const volval = document.getElementById("volume");
  volval.addEventListener('change', function(val) {
    const volimg = vol.querySelector("img");
    if(val.currentTarget.value == 0){ // checks each audio case
      volval.value = val.currentTarget.value;
      volimg.src = 'assets/icons/volume-level-0.svg';
      const noise = document.querySelector("audio"); // find the audio element and set volume
      noise.volume = 0.0;
    }
    else if(val.currentTarget.value >= 1 && val.currentTarget.value < 33){
      volval.value = val.currentTarget.value;
      volimg.src = 'assets/icons/volume-level-1.svg';
      const noise = document.querySelector("audio");
      noise.volume = (val.currentTarget.value)/(100);
    }
    else if(val.currentTarget.value >= 33 && val.currentTarget.value < 67){
      volval.value = val.currentTarget.value;
      volimg.src = 'assets/icons/volume-level-2.svg';
      const noise = document.querySelector("audio");
      noise.volume = (val.currentTarget.value)/(100);
    }
    else{
      volval.value = val.currentTarget.value;
      volimg.src = 'assets/icons/volume-level-3.svg';
      const noise = document.querySelector("audio");
      noise.volume = (val.currentTarget.value)/(100);
    }
  })
  // function to play sound
  const butt = document.querySelector("button");
  butt.addEventListener('click', function(){
    const noise = document.querySelector("audio");
    console.log(horn.value);
    if(horn.value == "party-horn"){ // create confetti :)
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
      noise.play();
    }
    else{
      noise.play();
    }
  })
}