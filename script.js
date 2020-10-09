/*Script file for form validation*/
function Check_field() {
    var x,text;
    /*Get the value of the input field*/
    x=document.getElementById("phno").value;
    
    /*value should be not less than one or greater than 100*/
    if (isNaN(x) || x<7777777777 || x>9999999999)
        {
            text="Input is invalid";
        }
    else 
        {
            text="Input is OK";
        }
    document.getElementById("demo1").innerHTML=text;
}
function popup(){
    var x,text;
    x=document.getElementById("fname").value;
    if(x=="")
        {
            alert("User cancelled the prompt");
        }
    else
        {text ="Hello "+ x +" You look nice!";
            
        }
     document.getElementById("demo").innerHTML=text;
}
function ValidateEmail(inputText)
{
    var mailformat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat))
        {
            alert("Valid Email address");
            return true;
            
        }
    else {
    alert("You have entered an invalid email address");
    return false;
}
}