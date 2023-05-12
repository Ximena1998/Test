/**
 * funcion utilizada para realizar la multiplicación de dos números sin necesidad de *
 * @function 
 * x - y son los valores que se utilizarán para la función
 * @type{number}
 */
function multiplication(x, y) {
    if (x === 0 || y === 0 ) {
      return 0;
    }
    if (isNaN(x) || isNaN(y)) {
        return NaN;
      }
    if (x === 1) {
      return y;
    }
    if (y === 1) {
      return x;
    }
    let result = 0;
    const negative = (x < 0 && y > 0) || (x > 0 && y < 0);
    /** 
     * @function 
     * Math.abs devuelve el valor absoluto de un numero que se utilizará para la operación a continuación */
    x = Math.abs(x);
    y = Math.abs(y);
  
    while (y > 0) {
      result += x;
      y--;
    }
    /** result: devuelve el valor del resultado de las operaciones */
    return negative ? -result : result;
  }