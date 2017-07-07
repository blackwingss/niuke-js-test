function removeWithoutCopy(arr, item) {
  for(var i = 0; i<arr.length; i++) {
    if(item === arr[i]) {
      arr.splice(i, 1)
      i--
    }
  }
  return arr
}
