/**
 * Created by odiep on 5/23/2016.
 */
$(document).ready(function () {
    var word_list = JSON.parse(localStorage.getItem('words'));
    console.log(word_list);

    var input_Form = document.querySelector("form");

    var synth = window.speechSynthesis;
    var pitch = 1;
    var rate = 0.5;
    var word_list_iterator = 0;
    var voices = [];


    function populateVoiceList() {
        voices = synth.getVoices();
    }

    populateVoiceList();

    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    //here we have say word button which will grab first word in list and say it
    $("#say_word").click(function () {
        console.log(word_list[0]);

        var utterThis = new SpeechSynthesisUtterance(word_list[word_list_iterator]);
        utterThis.voice = voices[0];
        utterThis.rate = rate;
        utterThis.pitch = pitch;

        synth.speak(utterThis);
    });

    //here we grab the word that is inputted and compare it to first word in list
    input_Form.onsubmit = function (event) {
        event.preventDefault();

        var grab_input = document.getElementById("check_word");
        var check_this = grab_input.value;
        console.log(check_this);
        console.log(word_list[word_list_iterator]);

        //if the words match then say so with alert otherwise say wrong with alert
        if (check_this === word_list[word_list_iterator]) {
            alert("Correct!");
            word_list.shift();
            localStorage.setItem("words", JSON.stringify(word_list));
            document.location.reload(true);
            
        }
        else {
            alert("Try Again!");

        }
    }






});