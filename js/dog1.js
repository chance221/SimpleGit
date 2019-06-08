'use strict'

let numOfDogs = document.getElementById('dogNum').value;
let sumbitBtn = document.getElementById('btn').value;
let form = document.getElementById('forms').value;


function getDogImage(){
    fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then(response=> response.json())
    .then(responseJson=>console.log(responseJson));
}


function watchForm(){
    debugger
    form.submit(event =>{
        
        event.preventDefault();
        getDogImage(numOfDogs);
    })
}


watchForm();