//利用slice+concat
function insert(arr, item, index) {    
  return arr.slice(0, index).concat(item, arr.slice(index));
}
//利用concat +splice
function insert(arr, item, index) {    
  var newArr = arr.concat();    
  newArr.splice(index, 0, item);    
  return newArr;
}
//利用slice+splice
function insert(arr, item, index) {    
  var newArr = arr.slice(0);    
  newArr.splice(index, 0, item);    
  return newArr;
}
//利用push.apply+splice
function insert(arr, item, index) {    
  var newArr = [];    
  [].push.apply(newArr, arr);    
  newArr.splice(index, 0, item);    
  return newArr;
}
//普通的迭代拷贝
function insert(arr, item, index) {    
  var newArr = [];    
  for (var i = 0; i < arr.length; i++) {        
    newArr.push(arr[i]);    
  }    
  newArr.splice(index, 0, item);    
  return newArr;
}
