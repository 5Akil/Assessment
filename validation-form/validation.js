
    var user= document.getElementById('firstname');
    var userLast = document.getElementById('lastname');
    var emailId = document.getElementById('email');
    var tele = document.getElementById('mobile');
    var ad = document.getElementById('address');
    var town = document.getElementById('city');
    var states = document.getElementById('state');
    var pCode = document.getElementById('pin');
    var psw = document.getElementById('password');
    
    user.addEventListener('blur', checkName);
    userLast.addEventListener('blur', checkLname);
    emailId.addEventListener('blur', checkEmail);
    tele.addEventListener('blur', checkTel);
    ad.addEventListener('blur', checkAd);
    town.addEventListener('blur', checkTown);
    pCode.addEventListener('blur', checkPin);
    states.addEventListener('blur', checkState);
    psw.addEventListener('blur', checkPSW);

    function checkName() {
        
        var uName = user.value.trim();
        if (uName == '') {
            document.getElementById('firstNameCheck').innerHTML = "** Enter your name please..."
            return false;
        }
        var exp = /^[A-Za-z]{3,6}$/;
        if (!exp.test(uName)) {
            document.getElementById('firstNameCheck').innerHTML = "** Only Alphabets, Numbers and Underscore and between 3 to 10 characters."
        }
        else{
            document.getElementById('firstNameCheck').innerHTML = ""
        }

        return true;
    }
  
    function checkLname(){
        var lName = userLast.value.trim();
        if (lName == '') {
            document.getElementById('lastNameCheck').innerHTML = "** Enter your last name please..."
            return false;
        }
        var exp = /^[A-Za-z]{3,6}$/;
        if (!exp.test(lName)) {
            document.getElementById('lastNameCheck').innerHTML = "** Only Alphabets, Numbers and Underscore and between 3 to 10 characters."
        }  else{
            document.getElementById('lastNameCheck').innerHTML = ""
        }
        return true;
    }
    function checkEmail(){
        var e_mail = emailId.value.trim();
        if (e_mail == '') {
            document.getElementById('emailCheck').innerHTML = "** Enter your valid email address..."
            return false;
        }
        var exp =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!exp.test(e_mail)) {
            document.getElementById('emailCheck').innerHTML = "** invalid email"
        }  else{
            document.getElementById('emailCheck').innerHTML = ""
        }
        return true;

    }
    function checkTel(){
        var telephone = tele.value.trim();
        if (telephone == '') {
            document.getElementById('mobileCheck').innerHTML = "** Enter your phone number..."
            return false;
        };

        var exp =/^[6789]{1}[0-9]{9}$/;
        if (!exp.test(telephone)) {
            document.getElementById('mobileCheck').innerHTML = "**invalid mobile number..."
        }  else{
            document.getElementById('mobileCheck').innerHTML = ""
        }
        return true;
    }

   
    function checkAd(){
        var ads = ad.value.trim();
        if (ads == '') {
            document.getElementById('addressCheck').innerHTML = "** Enter your address..."

            return false;
        }
        var exp = /^[A-Za-z0-9]{8,}$/;
        if (!exp.test(ads)) {
            document.getElementById('addressCheck').innerHTML = "** invalid address"
        }else{
            document.getElementById('addressCheck').innerHTML = "";
        }
        return true;
    }
    function checkTown(){
        var tw = town.value.trim();
        if (tw== '') {
            document.getElementById('cityCheck').innerHTML = "** Enter your city name..."
            return false;
        }
        var exp = /^[A-Za-z]{2,}$/;
        if(!exp.test(tw)){
            document.getElementById('cityCheck').innerHTML = "invalid city name..."
        }else{
            document.getElementById('cityCheck').innerHTML = ""
        }
        return true;    
    }
    function checkPin(){
        var code = pCode.value.trim();
        if (code == '') {
            document.getElementById('pinCheck').innerHTML = "** Enter your are pincode..."
            return false;
        }
        var exp =/^[1-9][0-9]{5}$/ ;
        if (!exp.test(code)) {
            document.getElementById('pinCheck').innerHTML = "** invalid pin"
        }  else{
            document.getElementById('pinCheck').innerHTML = ""
        }
        return true;
    }
    function checkState(){
        var st = states.value.trim();
        if (st == '') {
            document.getElementById('stateCheck').innerHTML = "** Enter your state..."
            return false;
        }
        var exp = /^[A_Za-z]{3,}$/
        if(!exp.test(st)){
            document.getElementById('stateCheck').innerHTML = "**invalid input..."
        }else{
            document.getElementById('stateCheck').innerHTML = ""   
        }

        return true;
    }
    function checkPSW(){
        var pwd = psw.value.trim();
        if (pwd == '') {
            document.getElementById('pswCheck').innerHTML = "** Enter your password..."
            return false;
        }
        var exp =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (!exp.test(pwd)) {
            document.getElementById('pswCheck').innerHTML = "** Only Alphabets, Numbers and Underscore and between 3 to 10 characters."
            return false;
        }  else{
            document.getElementById('pswCheck').innerHTML = ""
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
        