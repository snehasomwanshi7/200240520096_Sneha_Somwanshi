function validateForm() {
    var x = document.forms["LoginForm"]["uname", "pass"].value;
    if (x == "") {
        alert("Please fill all the data");
        return false;
    }
}
