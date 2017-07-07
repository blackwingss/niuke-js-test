//利用concat
function prepend(arr, item) {    
  return [item].concat(arr);
}
//使用push.apply
function prepend(arr, item) {    
  var newArr = [item];    
  [].push.apply(newArr, arr);    
  return newArr;
}
//利用slice+unshift/splice
function prepend(arr, item) {    
  var newArr = arr.slice(0);    
  newArr.unshift(item); //newArr.splice(0,0,item);
      
  return newArr;
}
//使用join+split+unshift/splice组合
function prepend(arr, item) {    
  var newArr = arr.join().split(',');    
  newArr.unshift(item); //newArr.splice(0,0,item);
      
  return newArr;
}
//普通的迭代拷贝
function prepend(arr, item) {    
  var newArr = [];    
  for (var i = 0; i < arr.length; i++) {        
    newArr.push(arr[i]);    
  }    
  newArr.unshift(item);    
  return newArr;
}
