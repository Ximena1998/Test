/**Función utilizada para remover los valores nulos de un arreglo
 * @function  
 * Arr es un arreglo que será utilizado en la función
 * @type{Array}
 * */
function removeNull(arr) {
  /** Filter : función que filtra un arreglo y crea uno nuevo de acuerdo a la condición 
   * @function */
    var filtered = arr.filter(Boolean);
    return filtered;
  }
  console.log(removeNull([ 0, 1, '', undefined, false, 2, undefined, null, , 3, NaN ]))