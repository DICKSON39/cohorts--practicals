const display = document.getElementById('display');
function appendToDisplay(input){
    display.value +=input;
    

}

function clearDisplay(){
    display.value = "";

}

function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = 'SYNTAXERROR'
    }
    

}

function backspace() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // Removes the last character
}

