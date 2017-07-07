function useArguments() {
  /*
   因为参数数量不定，可以先获取参数个数arguments.length
   然后循环求值
  */
  //声明一个变量保存最终结果
  var sum = 0;
  //循环求值
  for(var i = 0; i < arguments.length; i++){
      sum += arguments[i];
  }
  return sum;
 }