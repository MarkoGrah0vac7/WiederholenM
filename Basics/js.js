var firstName = document.getElementById("inputFName").value;
var lastName = document.getElementById("inputLName").value;
var age = document.getElementById("inputAge").value;
document.getElementById("btn").addEventListener("click",submitInput());

function submitInput () {
    document.getElementById("fName").innerHTML = firstName;
    document.getElementById("lName").innerHTML = lastName;
    document.getElementById("myAge").innerHTML = age;
}