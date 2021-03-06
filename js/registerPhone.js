function registerPhone(phoneNumber) {
    var parametros = { "phoneNumber": phoneNumber };

    $.ajax({
        data: parametros,
        url: 'add_contact.php',
        type: 'post',
        beforeSend: function() {
            $("#result").html("Processing...");
        },
        success: function(response) {
            $("#result").html(response);
            $("#phoneNumber").val("");
            $("#buttonRegister").hide();
            $("#rowRegister").hide();
            $("#pRegister").hide();

        }
    });
}