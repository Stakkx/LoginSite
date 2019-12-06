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


function CustomValidation(){
  this.invalidities = [];
}

CustomValidation.prototype = {


  /////////////////////////////////
  //FONCTION POUR CHECK LE USERNAME
  /////////////////////////////////

  checkUsernameValidity: function(input){

    if(input.value.length < 3){ //SI LE USERNAME FAIT MOINS QUE 3 CHARS

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

    if (input.value.match(/[^a-zA-Z0-9]/g)) { //SI IL CONTIENT DES SPECIAL CHARS

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


  },

  /////////////////////////////////
  //FONCTION POUR CHECK LE PASSWORD
  /////////////////////////////////

  checkPasswordValidity: function(input){


    //SI LE PASSWORD FAIT MOINS DE 5 CHARS
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

    //SI IL N'Y A PAS AU MOINS UN CHIFFRE
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
    }


    if (!input.value.match(/[a-zA-Z]/g)) { //Si ya pas de lettre

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
    }

  }



};

var registerForm = document.getElementById('registerForm'); //Changer le texte du button si erreur
var registerButton = document.getElementById('registerButton')
registerButton.addEventListener("mouseover", function(){
  if(registerForm.hasAttribute("onsubmit")){
      registerButton.innerHTML='Nope, check your inputs';
  }
});

registerButton.addEventListener("mouseleave", function(){
    if(registerButton.innerHTML=='Nope, check your inputs') registerButton.innerHTML='Register me!';
});


//LISTENER PFONCTION VERIF USERNAME
var usernameInput = document.getElementById("nameuser");

usernameInput.CustomValidation = new CustomValidation();

usernameInput.addEventListener("keyup", function(){
  usernameInput.CustomValidation.checkUsernameValidity(this);
});

//LISTENER FONCTION VERIF PASSWORD
var passInput = document.getElementById("password");

passInput.CustomValidation = new CustomValidation();

passInput.addEventListener("keyup", function(){
  passInput.CustomValidation.checkPasswordValidity(this);
});
