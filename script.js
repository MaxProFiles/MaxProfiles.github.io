document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('unlock-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        console.log('Evento submit capturado');

        // Obtiene las fechas ingresadas en el formulario
        const userDate = new Date(document.getElementById('user-date').value);
        const passwordDate = new Date(document.getElementById('password-date').value);

        // Define las fechas correctas
        const correctDate = new Date('2004-02-25');

        // Comprueba si las fechas ingresadas son correctas
        if (userDate.getTime() === correctDate.getTime() && passwordDate.getTime() === correctDate.getTime()) {
            // Si las fechas son correctas, redirige a la otra interfaz
            window.location.href = 'te_amo.html';
        } else {
            // Si las fechas son incorrectas, muestra un mensaje de error
            alert('¡Error!');
        }
    });
});

