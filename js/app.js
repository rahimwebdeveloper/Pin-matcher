function getPin (){
    const pin = Math.round(Math.random() * 10000) ;
    const pinString = pin + '';
    if( pinString.length == 4){
        return pin ;
    }
    else{
        return getPin();
    }
}

function generatorPin(){
    const pin = getPin();
    document.getElementById('dispaly-pin').value = pin ;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText ;
    const inputNumber = document.getElementById('input-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            inputNumber.value = ''; 
        }

    }
    else{
        const preivousNumber = inputNumber.value ;
        const newNumber = preivousNumber + number ;
        inputNumber.value = newNumber ;
    }
})

function verifyPin(){
    const pin = document.getElementById('dispaly-pin').value ;
    const typedNumber = document.getElementById('input-numbers').value ;
    const fialError = document.getElementById('notify-fail');
    const massageSucces = document.getElementById('notify-success');
    if(pin == typedNumber){
        massageSucces.style.display = 'block';
        fialError.style.display = 'none';
    }
    else{
        massageSucces.style.display = 'none';
        fialError.style.display = 'block';
    }
}
