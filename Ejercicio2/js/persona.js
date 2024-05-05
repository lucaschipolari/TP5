/*
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.

*/

export class Persona {
  constructor(nombre, DNI, sexo, peso, altura, fechaNacimiento, telefono) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.edad = this.calcularEdad();
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.telefono = telefono;
  }

  calcularEdad() {
    if (!this.fechaNacimiento || !(this.fechaNacimiento instanceof Date)) {
      console.error("Error: La fecha de nacimiento no es válida.");
      return null;
    }

    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1;
    const diaActual = fechaActual.getDate();

    const añoNacimiento = this.fechaNacimiento.getFullYear();
    const mesNacimiento = this.fechaNacimiento.getMonth() + 1;
    const diaNacimiento = this.fechaNacimiento.getDate();

    let edad = añoActual - añoNacimiento;

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad--;
    }

    return edad;
  }

  mostrarGeneracion() {
    const generaciones = [
      { nombre: "Silent", rango: { inicio: 1930, fin: 1948 }, rasgo: "Austeridad" },
      { nombre: "Baby Boomer", rango: { inicio: 1948, fin: 1968 }, rasgo: "Ambición" },
      { nombre: "X", rango: { inicio: 1969, fin: 1980 }, rasgo: "Obsesión por el éxito" },
      { nombre: "Millennial", rango: { inicio: 1981, fin: 1993 }, rasgo: "Frustración" },
      { nombre: "Z", rango: { inicio: 1994, fin: 2010 }, rasgo: "Irreverencia" },
    ];

    const añoNac = this.fechaNacimiento.getFullYear();

    const generacion = generaciones.find((generacion) => {
      return añoNac >= generacion.rango.inicio && añoNac <= generacion.rango.fin;
    });

    return generacion
      ? `La generación ${generacion.nombre} su rasgo es ${generacion.rasgo}`
      : "Año de nacimiento inválido / fuera del rango de 1930 a 2010";
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.DNI}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\nAño de nacimiento: ${this.fechaNacimiento}`;
  }
}