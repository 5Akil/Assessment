var mail = document.getElementById("mail");
var psw = document.getElementById("psw");
var cnf_psw = document.getElementById("cnf_psw");
var first = document.getElementById("first");
var last = document.getElementById("last");
var divs = document.querySelectorAll(".select");

mail.addEventListener("blur", checkEmail);
psw.addEventListener("blur", checkPsw);
cnf_psw.addEventListener("blur", checkConf);
first.addEventListener("blur", checkFirst);
last.addEventListener("blur", checkLast);

for (let i = 0; i < divs.length; i++) {
  var newElement = document.createElement("p");
  newElement.classList.add("error");
  divs[i].appendChild(newElement);
}

var errorMsg = document.querySelectorAll(".error");
console.log(errorMsg);

const Validation = (e) => {
  e.preventDefault();
};

function checkEmail() {
  var exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (mail.value.trim() == "") {
    errorMsg[0].innerHTML = "** Enter your valid email address...";
    return false;
  } else if (mail.value.trim() != "" && !exp.test(mail.value.trim())) {
    errorMsg[0].innerHTML = "** invalid email";
  } else {
    errorMsg[0].innerHTML = "";
  }
  return true;
}

function checkPsw() {
  var exp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (psw.value.trim() == "") {
    errorMsg[1].innerHTML = "** Enter your password...";
    return false;
  } else if (psw.value.trim() != "" && !exp.test(psw.value.trim())) {
    errorMsg[1].innerHTML = "** invalid password";
  } else {
    errorMsg[1].innerHTML = "";
  }
  return true;
}

function checkConf() {
  if (cnf_psw.value.trim() == "") {
    errorMsg[2].innerHTML = "** Enter your password...";
    return false;
  } else if (cnf_psw.value.trim() !== psw.value.trim()) {
    errorMsg[2].innerHTML = "** varify password";
  } else {
    errorMsg[2].innerHTML = "";
  }
  return true;
}

function checkFirst() {
  var exp = /^[A-Za-z]{3,6}$/;

  if (first.value.trim() == "") {
    errorMsg[3].innerHTML = "** Enter your name please...";
    return false;
  } else if (first.value.trim() != "" && !exp.test(first.value.trim())) {
    errorMsg[3].innerHTML = "** Only Alphabets, Numbers and Underscore and between 3 to 10 characters";
  } else {
    errorMsg[3].innerHTML = "";
  }

  return true;
}
function checkLast() {
  var exp = /^[A-Za-z]{3,6}$/;

  if (last.value.trim() == "") {
    errorMsg[4].innerHTML = "** Enter your name please...";
    return false;
  } else if (last.value.trim() != "" && !exp.test(last.value.trim())) {
    errorMsg[4].innerHTML = "** Only Alphabets, Numbers and Underscore and between 4 to 10 characters";
  } else {
    errorMsg[4].innerHTML = "";
  }

  return true;
}


function validation(){

  var inputs = document.getElementsByTagName("input");
  console.log(inputs);
  for(var i=0; i < inputs.length; i++){
      if(inputs[i].value === '' && inputs[i].hasAttribute('required')){
        alert('There are some required fields!');
        return false;
      }
    }
}
  
