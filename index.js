$(document).ready(function () {
    $('#botonIniciarSesion').on('click', function () {
        $('.card').addClass('fade-out');
        setTimeout(function() {
            window.location.href = 'main.html';
        }, 500);
    });
});


$(document).ready(function () {
    $('#botonInformacion').on('click', function () {
        window.location.href = 'itinerario.html';
    });
});
