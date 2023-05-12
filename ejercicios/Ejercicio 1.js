/**
 * 
 * @function 
 * 
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
    x = Math.abs(x);
    y = Math.abs(y);
  
    while (y > 0) {
      result += x;
      y--;
    }
    return negative ? -result : result;
  }