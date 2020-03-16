//tomar el id "login" y cuando se haga "click" se llamará la función "ingresar"
document.querySelector('#login').addEventListener('click',ingresar)


function ingresar(){
  //Se crean las variables donde quedará el usuario y contraseña que ingrese la persona.
  var usuario = document.getElementById('usuario').value; //.value es para tomar el valor que se ingrese, trabajar con el.
  var pasword = document.getElementById('contraseña').value;

  if(usuario=='fulanito' && pasword=='pizza44'){
    window.location.href = 'inicio.html';
  }
  else {
    alert('Usuario no encontrado, favor de registrarse')
  }
}
