const getNames = document.getElementById('name')
const getEmail = document.getElementById('email')
const getpassword = document.getElementById('password')
const getconfirmpass = document.getElementById('confirmpass')
const getbtn = document.getElementsByClassName('btn')
const entireForm = document.querySelector('form')
const nameSmall = document.getElementById('name-small')

const namepass = document.getElementById('name-password')
const nameConfirmPass = document.getElementById('name-confirmpass')



entireForm.addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault()

    if(getNames.value === ""){
        console.log("Name is Empty")
        getNames.classList = "error"
        nameSmall.classList = "display"
    }
    else{
        getNames.classList = "success"
    }

    var passw=  /^[A-Za-z]\w/;
    if(getpassword.value.match(passw)){
        getpassword.classList = "success"
    }else{
        getpassword.classList ="error"
        namepass.classList ="display"
    }
    
   if(getpassword.value !== getconfirmpass.value){
    getconfirmpass.classList = "error"
    nameConfirmPass.classList = "display"
   }else{
       getconfirmpass.classList = "success"
   }
}


