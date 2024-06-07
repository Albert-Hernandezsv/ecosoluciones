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

// CHAT
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/665e17b79a809f19fb389775/1hvfop8uq';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


// JavaScript Version
const buttonMenu = document.querySelector('#nav-mobile');
const navMenu = document.querySelector('.nav-menu');

buttonMenu.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('nav-open');
  navMenu.classList.toggle('open-menu');
});

// jQuery Version
$(function() {
    var btn_movil = $('#nav-mobile'),
    menu = $('#menu').find('ul');

    // Al dar click agregar/quitar clases que permiten el despliegue del menú
    btn_movil.on('click', function (e) {
        e.preventDefault();
        var el = $(this);
        el.toggleClass('nav-active');
        menu.toggleClass('open-menu');
    });
});

