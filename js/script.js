// Correos
function SendMail() {
  var params = {
    from_name : document.getElementById("nombre").value,
    email_id : document.getElementById("correo").value,
    message : document.getElementById("mensaje").value
  }
  emailjs.send("service_xy6rxfn", "template_uz5rusq", params).then(function (res) {
    alert("succes! " + res.status)
  })
}

// Menú desplegable
const buttonMenu = document.querySelector('#nav-mobile');
const navMenu = document.querySelector('.nav-menu');

buttonMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('nav-open');
  navMenu.classList.toggle('open-menu');
});
