var nameError = document.getElementById("name-error") 
var emailError = document.getElementById("email-error")
var submiterror = document.getElementById("submit-error")
var messageError = document.getElementById("message-error");
var subjecterror = document.getElementById("subject-error")

function validatename() {
    var name = document.getElementById('name').value.trim();

    if (name.length == 0) {
        nameError.innerHTML = 'Name is Required';
        nameError.style.color = 'red'
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write a FullName';
        nameError.style.color = 'red'
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    
}

function validateEmail() {
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Invalid Email"


    }

    else {
        emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;
    }



}
function validateform(){

    if(!validatename() || !validateEmail() | !validateMessage() || !validateSubject()  )  {

        submiterror.innerHTML = "Please fix error to submit"
        return false;
    }

}
 function validateMessage(){
    var message = document.getElementById("message").value;
    var required = 30;
    var left = required - message.length;
    if(left>0){
        messageError.innerHTML = left +' more character required';
        return false
    }
    else {
        messageError.innerHTML ='<i class="fa-solid fa-check"></i>' ;
        return true;
    }


 }
 function validateSubject(){
    var subject = document.getElementById("subject").value;
    var max = 10
    var min = subject.length;
    if(min>max){
        subjecterror.innerHTML = "maximum limit exceded"
        return false;
    }
    else {
        subjecterror.innerHTML ='<i class="fa-solid fa-check"></i>' ;
        return true;
    }

 }