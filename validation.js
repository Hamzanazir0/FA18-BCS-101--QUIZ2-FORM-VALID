$(function(){
    $("#name").on("focusout" , nameValid);
    $("#confirm_password").on("focusout" , cpasswordValid);
    $("#password").on("focusout" , passwordValid);
    $("#myForm").submit(btnPressed);
})

var nameerror = true ;
var cpassworderror = true ;
var passworderror = true ;

function nameValid(){
    var name = $("#name").val();
    if(name.length < 5){
        $(".afterName").remove();
        $("#name").addClass("error");
        $("#name").after("<p>Must be 5 characters Long</p>");
        $("#name").next("p").addClass("afterName , errorColor");
        nameerror = true ;
        console.log("nameerror : true")
    }
    else{
        $("#name").removeClass("error");
        $(".afterName").remove();
        nameerror = false ;
        console.log("nameerror : false")
    }
}

function cpasswordValid(){
    var pass1 = $("#password").val();
    var pass2 = $("#confirm_password").val();

    if ( pass1 != pass2 ){
        $(".afterCPass").remove();
        $("#confirm_password").addClass("error");
        $("#confirm_password").after("<p>Confirm Password must be same</p>");
        $("#confirm_password").next("p").addClass("afterCPass , errorColor");
        cpassworderror = true ;
        console.log("cpasserror : true")
    }
    else{
        $("#confirm_password").removeClass("error");
        $(".afterCPass").remove();
        cpassworderror = false ;
        console.log("cpasserror : false")
    }
}

function passwordValid(){

    cpasswordValid();

    var pass1 = $("#password").val();
    var pass2 = $("#confirm_password").val();

    if ( pass1.length < 8 ){
        $(".afterPass").remove();
        $("#password").addClass("error");
        $("#password").after("<p>Password must be 8 characters Long</p>");
        $("#password").next("p").addClass("afterPass , errorColor")
        passworderror = true ;
        console.log("passerror : true")
    }
    else{
        $("#password").removeClass("error");
        $(".afterPass").remove();
        passworderror = false ;
        console.log("passerror : false")
    }
}

function btnPressed(){

     nameValid();
     cpasswordValid();
     passwordValid();

    if ( nameerror === false && cpassworderror === false && passworderror === false ){
        alert("Form Submitted Successfuly");
        return true;   
    }

    else{
        alert("Form Not Submitted Check Errors");
        return false;    
    }
    
}
