const mostrarReloj = () => {

    let fecha = new Date();

    let hr = formatoHora(fecha.getHours());

    let min = formatoHora(fecha.getMinutes());

    let seg = formatoHora(fecha.getSeconds());

    document.getElementById("hora").innerHTML = `${hr} : ${min} : ${seg}`;

    mostrarFecha(fecha);

}

const formatoHora = (hora) => {

    if(hora<10) {
        hora = `0${hora}`;
    }
    
    return hora;

}

const mostrarFecha = (fecha) => {

    const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sab"];

    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

    let diaSemana =  dias[fecha.getDay()];

    let diaNumero = fecha.getDate();

    let mes =  meses[fecha.getMonth()];

    let anio = fecha.getFullYear();

    document.getElementById("fecha").innerHTML = `${diaSemana} ${diaNumero}, ${mes} ${anio} `;

}

setInterval(mostrarReloj, 1000);