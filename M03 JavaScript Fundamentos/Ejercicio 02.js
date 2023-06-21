/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}
devolverString('Casa');
// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   Resultado = x+y;
   return Resultado;
}
suma(2,2);

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   Resulado = x-y;
   return Resulado;
}
resta (2,2);
function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   Resultado = x/y;
   return Resultado;
}
divide(10,5);
function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   Resultado = x*y;
   return Resultado;
}
multiplica(10,10);
function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   Resulado=x%y;
   return Resulado;
}
obtenerResto(10,5);
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
