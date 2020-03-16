document.querySelector('#registrarUsuario').addEventListener('click',registro)


function registro(){
  var usuario = document.getElementById('user').value;
  var contraseña = document.getElementById('correo').value;

  window.location.href = 'inicio.html'
}
