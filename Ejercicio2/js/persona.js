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

class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, añoDeNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoDeNacimiento = añoDeNacimiento;
  }

  mostrarGeneracion() {
    const generaciones = [
      {
        nombre: "Silent",
        rango: { inicio: 1930, fin: 1948 },
        rasgo: "Austeridad",
      },
      {
        nombre: "Baby Boomer",
        rango: { inicio: 1948, fin: 1968 },
        rasgo: "Ambición",
      },
      {
        nombre: "X",
        rango: { inicio: 1969, fin: 1980 },
        rasgo: "Obsesión por el éxito",
      },
      {
        nombre: "Millennial",
        rango: { inicio: 1981, fin: 1993 },
        rasgo: "Frustración",
      },
      {
        nombre: "Z",
        rango: { inicio: 1994, fin: 2010 },
        rasgo: "Irreverencia",
      },
    ];

    const generacion = generaciones.find((generacion) => {
      return (
        this.añoNac >= generacion.rango.inicio &&
        this.añoNac <= generacion.rango.fin
      );
    });

    return generacion
      ? `La generación ${generacion.nombre} su rasgo es ${generacion.rasgo}`
      : "Año de nacimiento inválido";
  }
  esMayorDeEdad() {
    if (this.edad >= 18) {
      return true;
    } else {
      return false;
    }
  }
  mostrarDatos() {
    return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\nAño de nacimiento: ${this.añoNac}`;
  }
  
}
