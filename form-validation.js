function register(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  window.alert("username: "+userEntered + "\n" + "password: " + passEntered );
}
function validateUsername(){
  var userEntered = document.getElementById("user").value;
  if ( userEntered.length < 6 ) {
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if ( userEntered.search(" ") != -1 ) {
    document.getElementById("usernameError").innerHTML="Username can not contain any spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else {
    document.getElementById("usernameGroup").classlist.remove("has-error");
    document.getElementById("usernameGroup").classlist.add("has-success");
  }
}
function validatePassword(){
  var passEntered = document.getElementById("pass").value;
  var userEntered = document.getElementById("user").value;
  if ( passEntered.toLowerCase(passEntered) = "password" ) {
    document.getElementById("passwordError").innerHTML="Password cannot be password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if ( passEntered != userEntered ) {
    document.getElementById("passwordError").innerHTML="Password can not be the same as the Username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if ( passEntered.length > 6 || passEntered < 20 ) {
    document.getElementById("passwordError").innerHTML="Password must be between 6 and 20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else {
    document.getElementById("passwordGroup").classlist.remove("has-error");
    document.getElementById("passwordGroup").classlist.add("has-success");
  }
}
