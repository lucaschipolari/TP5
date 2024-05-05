

const cadenaNoVacia = (e)=>{
    if (!e || !e.value.trim()) {
        return true;
    }
    return false;
};
const removeAddClass = (e, condicion) => {
    if (condicion) {
        e.classList.add('is-invalid');
        e.classList.remove('is-valid');
    } else {
        e.classList.remove('is-invalid');
        e.classList.add('is-valid');
    }
};

export const validarNombre = (e) => {
    // Verificar que e no sea nulo, vacío, etc.
    if(cadenaNoVacia(e)){
        removeAddClass(e,true);
        return false;
    }
    // Verificar que e no tenga más de 30 caracteres
    if (e.value.trim().length > 30 || e.value.trim().length < 3) {
        console.log('El nombre no puede puede tener más de 30 caracteres o menos de 3 caracteres');
        removeAddClass(e,true); 
        return false;
    }

    // Verificar que e no sea un número
    const regex = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]+$/;
    if (!regex.test(e.value)) {
        removeAddClass(e,true);
     return false;
    }

    // Todas las validaciones pasaron, el nombre es válido
    removeAddClass(e,false);
    console.log('El nombre es válido');
    return true;
}

export const validarDNI = (e) => {
    // Verificar que e no sea nulo, vacío, etc.
    if(cadenaNoVacia(e)){
        removeAddClass(e,true);
        return false;
    }
    // Verificar que dni tenga exactamente 8 caracteres numéricos
    if (!(/^\d{8}$/).test(e.value)) {
        console.log('El número de DNI debe tener 8 dígitos numéricos');
        removeAddClass(e,true);
        return false;
    }

    // Todas las validaciones pasaron, el DNI es válido
    removeAddClass(e,false);
    console.log('El número de DNI es válido');
    return true;

}
export const validarPeso = (e) =>{
    if(cadenaNoVacia(e)){
        console.log('La telefono no puede estar vacia');
        removeAddClass(e,true);
        return false;
    }
    // Verificar que el peso sea un número positivo
    let pesoNumerico = parseFloat(e.value);
    if (isNaN(pesoNumerico) || pesoNumerico <= 0) {
        console.log('El peso debe ser un número positivo');
        removeAddClass(e,true);
        return false;
    }

    // Todas las validaciones pasaron, el peso es válido
    removeAddClass(e,false);
    console.log('El peso es válido');
    return true;
}
export const validarAltura = (e) => {
    // Verificar que la e no sea nula, vacía, etc.
    if (cadenaNoVacia(e)) {
        removeAddClass(e,true);
        return false;
    }

    // Verificar que la altura sea un número positivo
    let alturaNumerica = parseFloat(e.value);
    if (isNaN(alturaNumerica) || alturaNumerica <= 0) {
        console.log('La altura debe ser un número positivo');
        removeAddClass(e,true);
        return false;
    }

    // Todas las validaciones pasaron, la altura es válida
    removeAddClass(e,false);
    console.log('La altura es válida');
    return true;
}
export const validarTelefono = (e) => {
    // Verificar que el número de teléfono no sea nulo, vacío, etc.
    if(cadenaNoVacia(e)) {
        console.log('La telefono no puede estar vacia');
        removeAddClass(e,true);
        return false;
    };

    // Verificar que el número de teléfono tenga un formato válido
    let telefonoRegex = /^\d{10}$/; // Formato: 10 dígitos numéricos
    if (!telefonoRegex.test(e.value)) {
        console.log('El número de teléfono debe tener 10 dígitos numéricos');
        removeAddClass(e,true);
        return false;
    }

    // Todas las validaciones pasaron, el número de teléfono es válido
    removeAddClass(e,false);
    console.log('El número de teléfono es válido');
    return true;
}