
const formulario = document.querySelector('.form');
//variables de campo
const txt_nombre = document.querySelector('#nombre');
const txt_curp = document.querySelector('#curp');
const txt_correo = document.querySelector('#correo');
const txt_telefono = document.querySelector('#telefono');
const slc_escuelas = document.querySelector('#escuelas');
const txt_promedio = document.querySelector('#promedio');
const slc_carreras = document.querySelector('#carrera');



//asignacion de evento al formulario , generacion de la funcion validar form
formulario.addEventListener('submit', function validarform(event) {

    event.preventDefault();
    if(txt_nombre.value===''|| txt_curp.value===''|| txt_correo.value===''|| txt_telefono.value===''|| slc_escuelas.value===''|| txt_promedio.value===''|| slc_carreras.value==='') {
        notificar('Existen campos vacios', 'msg-error');
        event.style.backgroundColor='white';
    } else {
        notificar('Datos enviados correctamente', 'msg-ok');
    }


    function notificar(cadena, tipo){
        const mensaje = document.createElement('P')
        mensaje.textContent = cadena;
        mensaje.classList.add(tipo);
        formulario.appendChild(mensaje);
          
        mensaje.style.color="white";
        mensaje.style.textAlign="center";
        mensaje.style.fontSize="2rem";
    

        setTimeout(() => {
            mensaje.remove();
        }, 3000);
    }
    })
    
    document.addEventListener('DOMContentLoaded', function(){
        initApp();
    });

    async function initApp(){
        const url_ems_p = 'http://127.0.0.1/formulario/init_ems_p.php';
        const get_ems_p = await fetch(url_ems_p);
        const datos_ems_p = await get_ems_p.json();

        console.log(datos_ems_p);

        const url_of_ed = 'http://127.0.0.1/formulario/init_of_ed.php';
        const get_of_ed = await fetch(url_of_ed);
        const datos_of_ed = await get_of_ed.json();

        datos_ems_p.forEach(escuela => {
            const {id, nombre} = escuela;
            var opcion = document.createElement('option');
            opcion.text = nombre;
            slc_escuelas.add(opcion);
        });

        datos_of_ed.forEach(carrera =>{
            const {id, nombre} = carrera;
            var opcion = document.createElement('option');
            opcion.text = nombre;
            slc_carreras.add(opcion);
        });
    }