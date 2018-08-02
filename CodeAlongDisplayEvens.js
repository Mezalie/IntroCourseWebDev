function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["numbersInput"].elements.length;
        loopCounter++) {
        if (document.forms["numbersInput"].elements[loopCounter].parentElement.className.indexOf("has-")
            != -1) {

            document.forms["numbersInput"].elements[loopCounter].parentElement.className =
                "form-group";
        }
    }
}

function validateItems() {
    clearErrors();
    var num1 = document.forms["numbersInput"]["num1"].value;
    var num2 = document.forms["numbersInput"]["num2"].value;
    var num3 = document.forms["numbersInput"]["num3"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["numbersInput"]["num1"].parentElement.className =
            "form-group has-error";
        document.forms["numbersInput"]["num1"].focus();
        return false;
    }
    if (num2 == "" || isNaN(num2)) {
        alert("Ending Number must be filled in with a number.");
        document.forms["numbersInput"]["num2"].parentElement.className =
            "form-group has-error";
        document.forms["numbersInput"]["num2"].focus();
        return false;
    }
    if (Number(num2) < Number(num1)) {
        alert("Ending Number must be a number greater than Starting Number.");
        document.forms["numbersInput"]["num2"].parentElement.className =
            "form-group has-error";
        document.forms["numbersInput"]["num2"].focus();
        return false;
    }
    if (num3 == "" || isNaN(num3)) {
        alert("Step must be filled in with a number.");
        document.forms["numbersInput"]["num3"].parentElement.className =
            "form-group has-error";
        document.forms["numbersInput"]["num3"].focus();
        return false;
    }
    if (Number(num3) < 0) {
        alert("Step must be filled with a positive number.");
        document.forms["numbersInput"]["num3"].parentElement.className =
            "form-group has-error";
        document.forms["numbersInput"]["num3"].focus();
        return false;
    }
    document.getElementById("results").innerText = "Here are the even numbers between " + num1 + " and " + num2 + " by " + num3 + "'s:";
    
    var results = evenNumbers(Number(num1), Number(num2), Number(num3));

    listEvenNumbers(results);

    return false;
}

function evenNumbers(num1, num2, num3) {
    var evenSteps = [];
    for (var i = num1; i < num2; i += num3) { // i+= num3 is i = i + num3
        if (i % 2 === 0) {
            evenSteps.push(i)
        }      
    }
    return evenSteps;
}

function listEvenNumbers(numbersToPrint) {
    var unicorns = "";

    for (var i = 0; i < numbersToPrint.length; i++){
        unicorns = unicorns + "<li>" + numbersToPrint[i] + "</li>";
    }

    document.getElementById("evenNumberList").innerHTML = unicorns;
}
