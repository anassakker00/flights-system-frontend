$(document).ready(function() {
    loadPassenger();

    $('#addPassenger').click(function() {
        const PassengerData = {
            name: $('#name').val(),
            email: $('#email').val(),
            prenom: $('#prenom').val(),
            adresse: $('#adresse').val(),
            date_naissance: $('#date_naissance').val(),
        };

        $.ajax({
            url: '/Passenger', // Change this to your server's URL
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(PassengerData),
            success: function(response) {
                loadPassenger();
                $('#name').val(),
                $('#email').val(),
                $('#prenom').val(),
                $('#adresse').val(),
                $('#date_naissance').val(),
            }
        });
    });
});

function loadPassenger() {
    $.ajax({
        url: '/Passenger', // Change this to your server's URL
        method: 'GET',
        success: function(passenger) {
            $('#PassengerList').empty();
            passenger.forEach(function(passenger) {
                $('#PassengerList').append(<li>${passenger.name} - email ${passenger.email} prenom ${passenger.prenom}, date_naissance  $$ {passenger.date_naissance}</li>);
            });
        }
    });
}