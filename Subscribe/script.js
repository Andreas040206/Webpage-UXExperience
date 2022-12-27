
const submitBtn = document.querySelector("#submitBtn")
const inputPassword = document.getElementById('inputPassword')
const inputRePassword = document.querySelector('#inputRePassword')

let validationStyles = `
input[type="text"]:invalid:not(:focus),
input[type="tel"]:invalid:not(:focus),
input[type="password"]:invalid:not(:focus),
input[type="mail"]:invalid:not(:focus){
    border: solid 3px red;
}

`

let rePassInvalid = `
#inputPassword,
#inputRePassword{
    border: solid 3px red;
}

#inputRePassLab{
    visibility: visible;
}
`
let rePassValid = `
#inputPassword,
#inputRePassword{
    border: solid 3px green;
}

#inputRePassLab{
    visibility: hidden;
}
`
let rePassValidated = `
#inputPassword,
#inputRePassword{
    border: solid 3px black;
}
`
let passLengthInval = `
#inputPassLab {
    color: red;
}
`


let styleSheet = document.createElement('style')

submitBtn.addEventListener('click', function (){
    scriptValidate()
});

function scriptValidate(){
        if (inputRePassword.value === inputPassword.value && inputPassword.value.length > 7 && inputPassword.value.length < 17){
            styleSheet.innerHTML = rePassValid
            return true
        } else if(inputPassword.value.length < 8 || inputPassword.value.length > 18) {
            styleSheet.innerHTML = passLengthInval
            return false
        } else {
            styleSheet.innerHTML = rePassInvalid
           return false
        }   
}

submitBtn.addEventListener('click',function(){
    styleSheet.innerHTML = validationStyles
    document.head.appendChild(styleSheet)
});

document.addEventListener('click',function(){
    bothMacth()
});

const bothMacth = function(){
    if(!(inputRePassword.matches(':focus') || inputPassword.matches(':focus'))){
        if(inputPassword.value.length > 7  && inputRePassword.value === inputPassword.value){
            styleSheet.innerHTML = rePassValidated
        }
    }
}


inputRePassword.addEventListener('input', function(){
    if (inputPassword.value.length > 7  && inputRePassword.value === inputPassword.value){
        styleSheet.innerHTML = rePassValid
    } else {
        styleSheet.innerHTML = rePassInvalid
    }
});

inputPassword.addEventListener('input', function(){
    if (inputPassword.value.length > 7  && inputRePassword.value === inputPassword.value){
            styleSheet.innerHTML = rePassValid
    } else {
        styleSheet.innerHTML = rePassInvalid
    }

    lenInvalPass()
});

const lenInvalPass = function(){
    if (inputPassword.value.length > 7 && inputPassword.value.length < 17){
    } else {
        styleSheet.innerHTML = passLengthInval
    }
}