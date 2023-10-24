function validarTitulo(event) {
    if (event.key >= 0 && event.key <= 10) {
        event.preventDefault();
        return;
    }
        titulo.value = titulo.value.toUpperCase();
}
