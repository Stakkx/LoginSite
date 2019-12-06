function showHidePass() {
    var x = document.getElementById("showPass");
    var y = document.getElementById("eye");
    if (x.type === "password") {
      x.type = "text";
      y.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      x.type = "password";
      y.innerHTML = '<i class="fas fa-eye"></i>';
    }
}
  
  
////////////////////////////////////
//FUNCTION CHECK USERNAME VALIDITY//
////////////////////////////////////


function checkUsernameValidity(input){
    
    ////SI LE USERNAME FAIT MOINS QUE 3 CHARS/////////////////////
    if(input.value.length < 3){ 
  
        var element = document.querySelector('li:nth-child(1)');
        var registerForm = document.getElementById('registerForm');
        registerForm.setAttribute("onsubmit", "return false");
        element.classList.add('invalid');
        element.classList.remove('valid');
  
    } else {
  
        var element = document.querySelector('li:nth-child(1)');
        var registerForm = document.getElementById('registerForm');
        registerForm.removeAttribute("onsubmit");
        element.classList.remove('invalid');
        element.classList.add('valid');
  
    }
  
    /////SI IL CONTIENT DES SPECIAL CHARS////////////////////////////
    if (input.value.match(/[^a-zA-Z0-9]/g)) { 
  
        var element = document.querySelector('li:nth-child(2)');
        var border = document.getElementById("nameuser");
        var registerForm = document.getElementById('registerForm');
        registerForm.setAttribute("onsubmit", "return false");
        element.classList.add('invalid');
        element.classList.remove('valid');
        border.classList.add('notValid');
  
  
    } else {
        var element = document.querySelector('li:nth-child(2)');
        var border = document.getElementById("nameuser");
        var registerForm = document.getElementById('registerForm');
        element.classList.remove('invalid');
        element.classList.add('valid');
        border.classList.remove('notValid');
    }
}


////////////////////////////////////
//FUNCTION CHECK PASSWORD VALIDITY//
////////////////////////////////////


function checkPasswordValidity(input){

    ///IF PASS.LENGTH UNDER 5//////////////////////////////////////
    if(input.value.length < 5){ 
  
        var element = document.querySelector('.pass li:nth-child(1)');
        var registerForm = document.getElementById('registerForm');
        registerForm.setAttribute("onsubmit", "return false");
        element.classList.add('invalid');
        element.classList.remove('valid');
  
      } else {
  
        var element = document.querySelector('.pass li:nth-child(1)');
        var registerForm = document.getElementById('registerForm');
        registerForm.removeAttribute("onsubmit");
        element.classList.remove('invalid');
        element.classList.add('valid');
  
      }
  
      ///IF NO NUMBERS/////////////////////////////////////////
      if (!input.value.match(/[0-9]/g)) { 
  
        var element = document.querySelector('.pass li:nth-child(2)');
        var border = document.getElementById("password");
        var registerForm = document.getElementById('registerForm');
        registerForm.setAttribute("onsubmit", "return false");
        element.classList.add('invalid');
        element.classList.remove('valid');
        border.classList.add('notValid');
  
      } else {
        var element = document.querySelector('.pass li:nth-child(2)');
        var border = document.getElementById("password");
        var registerForm = document.getElementById('registerForm');
        element.classList.remove('invalid');
        element.classList.add('valid');
        border.classList.remove('notValid');
        registerForm.removeAttribute("onsubmit")
      }
  
        ///IF NO LETTERS//////////////////////////////////////
      if (!input.value.match(/[a-zA-Z]/g)) { 
  
        var element = document.querySelector('.pass li:nth-child(3)');
        var border = document.getElementById("password");
        var registerForm = document.getElementById('registerForm');
        registerForm.setAttribute("onsubmit", "return false");
        element.classList.add('invalid');
        element.classList.remove('valid');
        border.classList.add('notValid');
  
  
      } else {
        var element = document.querySelector('.pass li:nth-child(3)');
        var border = document.getElementById("password");
        var registerForm = document.getElementById('registerForm');
        element.classList.remove('invalid');
        element.classList.add('valid');
        border.classList.remove('notValid');
        registerForm.removeAttribute("onsubmit")
      }
  
    }

  

/////////////////////////////////////////////////////
//CHANGE TEXT BUTTON AND DISABLE FORM IF BAD INPUTS//
/////////////////////////////////////////////////////


var registerButton = document.getElementById('registerButton');

registerButton.addEventListener("mouseover", function(){
    var invalidForm = document.querySelectorAll("li");
    for(var i=0; i < invalidForm.length; i++){
        if(invalidForm[i].classList.contains("invalid")){
            registerButton.innerHTML="Nope, check your inputs";
        }
    }
 });

registerButton.addEventListener("mouseleave", function(){
    if(registerButton.innerHTML=='Nope, check your inputs') registerButton.innerHTML='Register me!';
});
  
  /////////////////////////////////////
  //LISTENER FUNCTION CHECK USERNAME//
  /////////////////////////////////////

  var usernameInput = document.getElementById("nameuser");
  
  
  usernameInput.addEventListener("keyup", function(){
    checkUsernameValidity(this);
  });

  ////////////////////////////////////
  //LISTENER FUNCTION CHECK PASSWORD//
  ////////////////////////////////////

  var passInput = document.getElementById("password");
  
  passInput.addEventListener("keyup", function(){
    checkPasswordValidity(this);
  });
  