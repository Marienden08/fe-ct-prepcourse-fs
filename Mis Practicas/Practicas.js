/*
// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);
*/

//Objetos 

var persona = {
    Nombre: "Lucas",
    Edad: 26,
    Estudios: {
        esProgramador : true,
    }
}
/*
// para cambiar valores de un key 

persona.Nombre= "Martin";

console.log(persona.Nombre);
*/

/*
// Crear y borrar propiedades de un objeto
var alumnos ={};

alumnos.nombre =["Martin","Alberto", "Fernando","Juaquin"];

delete alumnos.nombre;

console.log(alumnos.nombre);

*/
/*
var misFunciones ={
    saludo: function (){ 
        console.log("Hola");
    }
}

misFunciones.saludo();
*/

/*
var comidas = {};

var diferentesComidas = function(propUno,PropDos){
    comidas[propUno]=["Vegetales","Frutas"];
    comidas[PropDos]=["Hambueguesa","Papa fritas"];
    
};

diferentesComidas("Saludables","NoSaludables");
console.log(comidas);

*/
/*
var libro = {autor:"Borges", genero:"Policial", año: 1990};

//var tienePropiedad = libro.hasOwnProperty("autor");

//console.log(tienePropiedad);

var todaLasPropiedades = Object.keys(libro);
console.log(todaLasPropiedades);
*/


/*
var num = 125;

 var cantidad = num.toString().length;

console.log(cantidad);
*/

function devolverUltimoElemento(array) {
    // Retornar el último elemento del arreglo recibido por parámetro.
    // Tu código:
    
    var array =["Mariano","Cecilia","Pilar"];

    console.log(array.length);
 }

devolverUltimoElemento();



