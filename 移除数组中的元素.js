function remove(arr, item) {
  var a = []
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] != item) {
      a.push(arr[i])
    }
  }
  return a
}
