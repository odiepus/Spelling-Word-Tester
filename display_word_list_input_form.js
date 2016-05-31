/**
 * Created by odiep on 5/23/2016.
 */
$(document).ready(function () {


    $("#submitted").click(function(){
        var inputtedValue = document.getElementById("word_number_input").value;
        console.log(JSON.stringify(inputtedValue));
        var container = document.getElementById("word_list_input_container");

        while(container.hasChildNodes()){
            container.removeChild(container.lastChild);
        }

        for (var i = 0; i < inputtedValue; i++){
            container.appendChild(document.createTextNode(i+1));
            var input = document.createElement("input");
            input.type = "text";
            input.className = 'word_array';
            input.value = i;
            container.appendChild(input);
            container.appendChild(document.createElement("br"));
        }
        document.getElementById('submit_words').style.visibility = 'visible';

    });



    $("#submit_words").click(function(){
       var word_array =  $("input[class='word_array']").map(function(){
           return $(this).val();
       }).get();

        localStorage.setItem("words", JSON.stringify(word_array));
        
        console.log(JSON.stringify(word_array));

    });

});