// *INFO: Le damos un formato de la fecha de milisegundos a fecha
function formatDateOutput( fecha ){

    const collator = new Intl.DateTimeFormat('es-PE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

    const fechaFormateada = collator.format(fecha);

    return fechaFormateada;

}



function formatDateInput(fechaInput) {
    const fecha = new Date(fechaInput);
    const year = fecha.getFullYear();
    const month = fecha.getMonth() + 1 < 10 ? `0${fecha.getMonth() + 1}` : fecha.getMonth() + 1;
    const day = fecha.getDate() < 10 ? `0${fecha.getDate()}` : fecha.getDate();
    const formateDate = `${year}-${month}-${day}`;
    console.log(formateDate);
    return formateDate;
}