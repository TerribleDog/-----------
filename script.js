let button = document.querySelectorAll('.button')
let buttonClear = document.querySelector('.button_clear')
let display = document.querySelector('.display_input')
let displayAnswer = document.querySelector('.display_answer')

button.forEach(function(i) {
    i.onclick = function() {
        display.innerText = display.innerText + i.innerText

        if (i.innerText == '='){
            let n = eval(display.innerText.slice(0,-1))
            displayAnswer.innerText = n
            display.innerText = "";
        }
    }
});

buttonClear.onclick = function(){
    display.innerText = display.innerText.slice(0,-1)
}