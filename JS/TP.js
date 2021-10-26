$(document).ready(function(){

    $('#btnSend').click(function(e){
        
    var errores = '';
    var nombre = $('#name').val()
    var telefono = $('#phone').val()
    var correo = $('#email').val()
    var mensaje = $('#message').val()
    const valida = /\d/;
    var valida2 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var validamail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
     if(nombre == ''){
        errores += 'Escriba un nombre\n';
        } else if (valida.test(nombre) || valida2.test(nombre)) {
            errores += 'El nombre solo debe tener letras\n';
            } 

    if(telefono == ''){
        errores += 'Escriba un telefono\n' ;
        } else if (isNaN(telefono)) {
            errores += 'El telefono solo debe tener numeros\n';
            }

    if(correo == ''){
        errores += 'Escriba un correo\n';
        } else if (validamail.test(correo) == false ) {
            errores += 'El correo es invalido\n';
            }  

    if(mensaje == ''){
            errores += 'Escriba un mensaje\n' ;
            }    
    
    if (errores != ''){
        alert(errores);
        console.log(errores);
        e.preventDefault();
        } else{
             console.log(nombre);
             console.log(telefono);
             console.log(correo);
             console.log(mensaje);
             e.preventDefault();
            }
    });
})