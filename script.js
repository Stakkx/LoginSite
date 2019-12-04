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

    if(input.value.length < 3){ //Si c'est moins que 3 char

      this.addInvalidity("At least 3 characters long!");
      var element = document.querySelector('li:nth-child(1)');
      element.classList.add('invalid');
      element.classList.remove('valid');

    } else {

      var element = document.querySelector('li:nth-child(1)');
      element.classList.remove('invalid');
      element.classList.add('valid');

    }

    if (input.value.match(/[^a-zA-Z0-9]/g)) { //Si ya autre chose que des lettres & chiffres

      this.addInvalidity('Only letters and numbers!');
      var element = document.querySelector('li:nth-child(2)');
      var border = document.getElementById("fdp");
      element.classList.add('invalid');
      element.classList.remove('valid');
      border.classList.remove('notValid');
      border.classList.add('notValid');


    } else {
      var element = document.querySelector('li:nth-child(2)');
      var border = document.getElementById("fdp");
      element.classList.remove('invalid');
      element.classList.add('valid');
      border.classList.add('notValid');
      border.classList.remove('notValid');
    }

  }

};










var usernameInput = document.getElementById("fdp");

usernameInput.CustomValidation = new CustomValidation();

usernameInput.addEventListener("keyup", function(){
  usernameInput.CustomValidation.checkValidity(this);
});
