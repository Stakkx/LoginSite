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
  addInvalidity: function(message){
    this.invalidities.push(message);
  },

  getInvalidities: function(){
    return this.invalidities.join('. \n')
  },

  checkValidity: function(input){

    if(input.value.length < 3){ //Si le username fait moins de 3 char

      this.addInvalidity("At least 3 characters long!");
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

    if (input.value.match(/[^a-zA-Z0-9]/g)) { //Si le username contient des special char

      this.addInvalidity('Only letters and numbers!');
      var element = document.querySelector('li:nth-child(2)');
      var border = document.getElementById("nameuser");
      var registerForm = document.getElementById('registerForm');
      registerForm.setAttribute("onsubmit", "return false");
      element.classList.add('invalid');
      element.classList.remove('valid');
      border.classList.remove('notValid');
      border.classList.add('notValid');


    } else {
      var element = document.querySelector('li:nth-child(2)');
      var border = document.getElementById("nameuser");
      var registerForm = document.getElementById('registerForm');
      element.classList.remove('invalid');
      element.classList.add('valid');
      border.classList.add('notValid');
      border.classList.remove('notValid');
    }

    

  }

};

var registerButton = document.getElementById("registerButton");
registerButton.addEventListener("mouseover", function(){
  console.log("yo");
});

var usernameInput = document.getElementById("nameuser");

usernameInput.CustomValidation = new CustomValidation();

usernameInput.addEventListener("keyup", function(){
  usernameInput.CustomValidation.checkValidity(this);
});
