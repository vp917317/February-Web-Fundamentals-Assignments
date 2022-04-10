const button = document.querySelector('button')
button.addEventListener('click' , input)

function input(){
    var type = document.getElementById('input_something').value;
    alert(type);
}