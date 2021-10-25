// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // intializing voices array and getting the text to speak 
  let voices = [];
  const toSpeak = document.getElementById('text-to-speak');

  // if statement to check if the voices in speech synthesis are defined or not (default = not)
  if(window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => populateVoiceList();
  }

  // populate the voices array and populate the drop down menu
  setTimeout(() =>{
    voices = window.speechSynthesis.getVoices();
    fillSelectorList();
  }, 100);

  // populates the windows speech synthesis with the voices since by default empty
  function populateVoiceList() {
     window.speechSynthesis.getVoices();
  }
  
  // update the values of the language for synthesizing
  function fillSelectorList(){
    var list = document.getElementById('voice-select');
    for(var i = 0; i < voices.length; i++){
      var choice = document.createElement('option');
      choice.textContent = voices[i].name +'(' + voices[i].lang + ')';
      if(voices[i].default){
        choice.textContent += '--DEFAULT';
      }
      //add the attributes to the selection list
      choice.setAttribute('data-lang', voices[i].lang);
      choice.setAttribute('data-name', voices[i].name);
      list.appendChild(choice);
    }
  }
  var picked;
  // find the correct voice for the speech
  const voice = document.getElementById('voice-select');
  voice.addEventListener('change', (event) => {
    for(var k = 0; k < voices.length; k++) {
      if((voices[k].name + "(" + voices[k].lang + ")") === event.target.value) {
        picked = k;
      }
    }
  })
  
  // create button functionality + image changing
  const butt = document.querySelector("button");
  butt.addEventListener("click", (event) => {
    var utterThis = new SpeechSynthesisUtterance(toSpeak.value);
    utterThis.voice = voices[picked];
    window.speechSynthesis.speak(utterThis);
    var face = document.querySelector("img");
    face.src = "assets/images/smiling-open.png";
    utterThis.addEventListener("end", (event) =>{
      face.src = "assets/images/smiling.png";
    })
  })
  
}