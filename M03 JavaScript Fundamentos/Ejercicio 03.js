/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   return x === y;
}

function tienenMismaLongitud(str1, str2) {
   return str1 === str2;
}
  
function menosQueNoventa(num) {
   return num < 90
}

function mayorQueCincuenta(num) {
 return num > 50
}

function esPar(num) {
   // Retorna True si "num" es par.
   // De lo contrario, retorna False.
   // Tu código:
   if (num % 2 === 0){
      return(true);
   }else{
      return(false);
   }
}

function esImpar(num) {
   // Retorna True si "num" es impar.
   // De lo contrario, retorna False.
   // Tu código:
   if (num % 2 === 1){
      return(true);
   }else{
      return(false);
   }
}


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
