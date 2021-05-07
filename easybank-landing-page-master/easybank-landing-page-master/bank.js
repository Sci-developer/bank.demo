const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-lists');
const buttondiv = document.querySelector( '.button') 

toggleButton.addEventListener ( "click" , function(){
    navbarLinks.classList.toggle ("slide")
});

//toggleButton.addEventListener('click', ()=> {buttondiv.classList.toggle('activate')});//


