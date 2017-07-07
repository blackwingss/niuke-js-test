链接： https: //www.nowcoder.com/questionTerminal/df4b0b7a459447538351c4c7008b34e7
  来源： 牛客网

//利用slice
function truncate(arr) {    
  return arr.slice(0, -1);
}
//利用filter
function truncate(arr) {    
  return arr.filter(function(v, i, ar) {        
    return i !== ar.length - 1;    
  });
}
//利用push.apply+pop
function truncate(arr) {    
  var newArr = [];    
  [].push.apply(newArr, arr);    
  newArr.pop();    
  return newArr;
}
//利用join+split+pop    注意！！！：数据类型会变成字符型
function truncate(arr) {    
  var newArr = arr.join().split(',');    
  newArr.pop();    
  return newArr;
}
//利用concat+pop
function truncate(arr) {    
  var newArr = arr.concat();    
  newArr.pop();    
  return newArr;
}
//普通的迭代拷贝
function truncate(arr, item) {    
  var newArr = [];    
  for (var i = 0; i < arr.length - 1; i++) {        
    newArr.push(arr[i]);    
  }    
  return newArr;
}
