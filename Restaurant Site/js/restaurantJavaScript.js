function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["contactForm"].elements.length;
        loopCounter++) {
        if (document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf("has-")
            != -1) {

            document.forms["contactForm"].elements[loopCounter].parentElement.className =
                "form-group";
        }
    }
}

//TODO: Question: How do you validate phone numbers, emails, name, etc? What is regular expression?
function validateInput() {
    clearErrors();

    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var info = document.forms["contactForm"]["info"].value;

    if (name == "") {
        alert("Name must be filled in.");
        document.forms["contactForm"]["name"].parentElement.className =
            "form-group has-error";
        document.forms["contactForm"]["name"].focus();
        return false;
    }
    if (email == "") {
        alert("Email must be filled in.");
        document.forms["contactForm"]["email"].parentElement.className =
            "form-group has-error";
        document.forms["contactForm"]["email"].focus();
        return false;
    }
    if (phone == "") {
        alert("Phone number must be filled in.");
        document.forms["contactForm"]["phone"].parentElement.className =
            "form-group has-error";
        document.forms["contactForm"]["phone"].focus();
        return false;
    }
    if (info == "") {
        alert("Additonal information must be given.");
        document.forms["contactForm"]["info"].parentElement.className =
            "form-group has-error";
        document.forms["contactForm"]["info"].focus();
        return false;
    }

    var bestTime = document.forms["contactForm"]["monday"].checked || document.forms["contactForm"]["tuesday"].checked || document.forms["contactForm"]["wednesday"].checked || document.forms["contactForm"]["thursday"].checked || document.forms["contactForm"]["friday"].checked;
    if (bestTime !== true) {
        alert("Please check at least one checkbox.")
        return false;
    }
alert("All required data has been entered.")
return false;
}