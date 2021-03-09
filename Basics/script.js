function submitInput () {
    var firstName = document.getElementById("inputFName").value;
    var lastName = document.getElementById("inputLName").value;
    var age = document.getElementById("inputAge").value;
    var job = document.getElementById("professsion").value;
    
    document.getElementById("fName").innerHTML = firstName;
    document.getElementById("lName").innerHTML = lastName;
    document.getElementById("myAge").innerHTML = age;
    document.getElementById("myJob").innerHTML = job;
    if (job == "IT") {
        document.getElementById("myJob").style.backgroundColor = "purple";
    } else {
        document.getElementById("myJob").style.backgroundColor = "yellow";
    }
}
document.getElementById("btn").addEventListener("click",submitInput);


// Extend the previous form to have a select option, where your profession can be selected. If you are working in IT, the background of the div displaying the information from the form will turn purple, if you work in hospitality, your div will turn yellow, etc. 

// (Hint: extracting the selection value will work similarly to extracting the input values)

