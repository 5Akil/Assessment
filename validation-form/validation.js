       
     
     function validation(){

        var username = /^[A-Za-z]{3,6}$/;
        var email =/^[A-Za-z0-9\.\-\_\]{3,}@[A-Za-z0-9]{3,}.[A-Za-z]{2,4}$/;
        var pin = /^[0-9]{5}$/
        var mobile = /^[6789][0-9]{9}$/
        var psw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


        var fName = document.getElementById("#firstname").value;
        var lname = document.getElementById("#lastname").value;
        var emailId = document.getElementById("email").value;
        var tel = document.getElementById("#mobile").value;
        var areaPin = document.getElementById("#pin").value;
        var password = document.getElementById("#password").value;
        
        if(username.test(fName)){
            document.getElementById("firsNameCheck").innerHTML = "";
        }else{
            document.getElementById("firsNameCheck").innerHTML = "Enter the valid name";
            return false; 
        }
        
        



     }
       
    