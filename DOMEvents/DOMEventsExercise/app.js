// DOM EVENTS EXERCISE

//1a
const button1 = document.getElementById ('one')

//1b
botton1.onclick = function(){
    alert('You clicked the first button! Congrats!');
}

//2a 
const h3 = document.querySelector ('h3');

//2b
h3.addEventListener('mouseover', () => {
    alert('You hovered over the h3 element! Congrats!');
});

//3a
const form = document.querySelector ('form');
.
//3b
form.addEventListener('submit', () => {
    alert(form.entry.value);
});

//BONUS
//4a
const darkMode = document.getElementById('dm');

//4b
const star = document.querySelector('*');
darkMode.addEventListener('click', () => {
   star.classList.toggle('dark-mode'); 
});



