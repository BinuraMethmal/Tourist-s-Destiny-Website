var userName;
var userEmail;
var userPhoneNumber;
var userMessage;
var val;
var userRate;

function sendfeedback() {

    var radios = document.getElementsByName('rating');
    userName = document.getElementById("userName").value;
    userEmail = document.getElementById("userEmail").value;
    customerPhoneNumber = document.getElementById("userPhoneNumber").value;
    userMessage = document.getElementById("message").value;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            userRate = radios[i].value;
            break;
        }
    }

    document.getElementById("pop-up-form").style.display = "block";
    document.getElementById("name").value = userName;
    document.getElementById("email").value = userEmail;
    document.getElementById("customerPhoneNumber").value = customerPhoneNumber;
    document.getElementById("userRate").value = userRate;
    document.getElementById("userMessage").value = userMessage;

}

function closePopUpWindow() {
    document.getElementById("pop-up-form").style.display = "none";
}