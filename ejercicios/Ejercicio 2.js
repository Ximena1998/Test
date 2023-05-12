function removeNull(arr) {
    var filtered = arr.filter(Boolean);
    return filtered;
  }

  console.log(remove([ 0, 1, '', undefined, false, 2, undefined, null, , 3, NaN ]))