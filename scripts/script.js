// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
'use strict'

var aAudio = new Audio('clicksound.wav');
     function myAudioFunction(letter) {
         if(letter == 'a') {
             aAudio.play();
         } 
     }

// End of Your Code . Don't delete that line below!!
});