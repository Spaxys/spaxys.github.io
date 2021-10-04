
var generatePassword = function () {
    var myPassword = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[],.-_;:+=?/|~`";
    for (var i = 0; i < 12; i++) {
        myPassword += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    //alert(myPassword);
    var result = document.querySelector("#result");
    result.value = myPassword;
    //result.setSelectionRange(0, result.value.length);
    result.select();
}

var copyPasswordToClipboard = function () {
    document.execCommand('copy');
}
$(document).ready(function () {
    var result = $("#result");

    //$(document).on("click", "#btnGenerate", generatePassword);
    //$(document).on("click", "#btnCopy", );
    $("#btnGenerate").click(generatePassword);
    $("#btnGenerate").click(copyPasswordToClipboard);
});