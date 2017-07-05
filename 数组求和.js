// 递归
function sum(arr) {
  var len = arr.length
  if(len == 0) {
    return 0
  } else if (len == 1) {
    return arr[0]
  } else {
    return arr[0] + sum(arr.slice(1))
  }
}
// 常规循环
function sum(arr) {
  var s = 0
  for (var i = arr.length - 1; i >= 0; i--) {
    s += arr[i]
  }
  return s
}
// 函数式编程 map-reduce
function sum(arr) {
  return arr.reduce(function(prev, curr, idx, arr) {
    return prev + curr
  })
}
// forEach遍历
function sum(arr) {
  var s = 0
  arr.forEach(function(val, idx, arr) {
    s += val
  }, 0)
  return s
}
// eval(不推荐)
function sum(arr) {
  return eval(arr.join("+"))
}
