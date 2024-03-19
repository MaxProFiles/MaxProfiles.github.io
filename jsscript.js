document.getElementById('unlock-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var date = document.getElementById('date').value;

    // Aquí puedes agregar la lógica para validar el nombre de usuario y la fecha
    // y mostrar el mensaje correspondiente si son correctos
    // Por ejemplo:
    if (username === 'nombre_usuario_correcto' && date === 'fecha_correcta') {
        document.getElementById('message').innerText = '¡Te amo mucho!';
        document.getElementById('message-container').style.display = 'block';
    } else {
        alert('La clave ingresada no es válida.');
    }
});
