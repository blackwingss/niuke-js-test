function square(arr) {
   //声明一个新的数组存放结果
     var a = [];
     arr.forEach(function(e){
         //将arr中的每一个元素求平方后，加入到a数组中
         a.push(e*e);
     });
     return a;
 }
