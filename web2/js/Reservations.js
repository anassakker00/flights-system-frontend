$(document).ready(function() {
    loadReservations();

    $('#addReservations').click(function() {
        const reservationsData = {
            date: $('#date').val(),
            seatNumber: $('#siegeNumber').val(),
            siege:$('#siege').val(),
            print: $('#rint').val(),
        };

        $.ajax({
            url: '/Reservations', // Change this to your server's URL
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(reservationsData),
            success: function(response) {
                loadFlights();
                $('#date').val(),
                $('#siegeNumber').val(),
                $('#siege').val(),
                $('#print').val(),
            }
        });
    });
});

function loadReservations() {
    $.ajax({
        url: '/reservations', // Change this to your server's URL
        method: 'GET',
        success: function(reservations) {
            $('#ReservationsList').empty();
            reservations.forEach(function(reservations) {
                $('#reservationsList').append(<li>${reservations.date} - siegeNumber ${reservations.siegeNumber} siege ${reservations.siege}, Price: $${reservations.print}</li>);
            });
        }
    });
}