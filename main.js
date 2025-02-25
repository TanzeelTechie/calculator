let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons){
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x'){
            buttonText = '*';
            screenValue  += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '%') {
            screenValue = (parseFloat(screenValue)/100).toString();
            screen.value = screenValue;
        }
          else if (buttonText == '<') {
            screenValue = screenValue.slice (0,- 1);
            screen.value = screenValue;
        }
        else if (buttonText == '') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            try{
            screen.value = eval(screenValue);
            screenValue = screen.value;
            }
            catch(error){
                screen.value ="Error";
                screenValue = "";
            }
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}	