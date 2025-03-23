document.addEventListener("DOMContentLoaded", function () {

    //By default the submit button should be disabled

document.querySelector("#submit").disabled = true;
document.querySelector('#task').onkeyup = () => {
    if(document.querySelector("#task").value.length > 0) {
        document.querySelector("#submit").disabled =false
    } else {
        document.querySelector('#submit').disabled = true;
    }

    
}
    document.querySelector('form').onsubmit = () => {
       const task = document.querySelector("#task").value;

       const list =document.createElement("li")
       list.innerHTML =task;

       document.querySelector("#tasks").append(list)

       document.querySelector('#task').value = ''
       document.querySelector('#submit').disabled = true

       //console.log(task); debbugging

       //Stop form from submitting
       return false;

       

    }
});