/**
 * Created by odiep on 5/23/2016.
 */
$(document).ready(function () {

    //when submit button is pressed on  index page this function will create
    //an input field
    $("#submitted").click(function(){
        var inputtedValue = document.getElementById("word_number_input").value;
        console.log(JSON.stringify(inputtedValue));
        var container = document.getElementById("word_list_input_container");

        while(container.hasChildNodes()){
            container.removeChild(container.lastChild);
        }
        //input field is created with user inputted fields
        for (var i = 0; i < inputtedValue; i++){
            container.appendChild(document.createTextNode(i+1));
            var input = document.createElement("input");
            input.type = "text";
            input.className = 'word_array';
            input.value = i;
            container.appendChild(input);
            container.appendChild(document.createElement("br"));
        }
        //once the field is created the submit button is made visible
        document.getElementById('submit_words').style.visibility = 'visible';

    });


    //when unhidden submit button is pressed the inputes are put in array
    $("#submit_words").click(function(){
       var word_array =  $("input[class='word_array']").map(function(){
           return $(this).val();
       }).get();
        //then the array is passed to localStorage and jsonfied for next page to aaccess
        localStorage.setItem("words", JSON.stringify(word_array));
        
        console.log(JSON.stringify(word_array));

    });

});