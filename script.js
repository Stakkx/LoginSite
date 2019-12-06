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

