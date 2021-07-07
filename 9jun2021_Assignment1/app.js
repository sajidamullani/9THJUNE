function myvalidate() {
    var name =
        document.forms["form1"]["Name"];
    var email =
        document.forms["form1"]["email"];
    var user =
        document.forms["form1"]["userName"];
    var mobile =
        document.forms["form1"]["mobile"];
    var address =
        document.forms["form1"]["Address"];

    if (name.value == "") {
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }

    if (address.value == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }

    if (mobile.value == "") {
        window.alert(
            "Please enter your mobile number.");
        mobile.focus();
        return false;
    }
    if (email.value == "") {
        window.alert(
            "Please enter a valid e-mail address.");
            email.focus();   
        return false;
    }
    if (user.value == "") {
        window.alert("Please enter your user name.");
        user.focus();
        return false;
    }
    return true;
}