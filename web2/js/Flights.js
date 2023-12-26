$(document).ready(function() {
    loadFlights();

    $('#addFlight').click(function() {
        const flightData = {
            depart: $('#depart').val(),
            arrival: $('#arrival').val(),
            gare: $('#gare').val(),
            ville_depart: $('# ville_depart').val(),
            ville_destination: $('# ville_destination').val(),
            duree: $('#duree').val(),
            type: $('#type').val(),
        };

        $.ajax({
            url: '/flights', // Change this to your server's URL
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(flightData),
            success: function(response) {
                loadFlights();
                $('#depart').val();
                $('#arrival').val();
                $('#gare').val();
                $('# ville_depart').val();
                $('# ville_destination').val();
                $('#duree').val();
                $('#type').val();
            }
        });
    });
});

function loadFlights() {
    $.ajax({
        url: '/flights', // Change this to your server's URL
        method: 'GET',
        success: function(flights) {
            $('#flightsList').empty();
            flights.forEach(function(flight) {
                $('#flightsList').append(<li>${flight.airline} - From ${flight.departure} to ${flight.arrival}, Price: $${flight.ticketPrice}</li>);
            });
        }
    });
}