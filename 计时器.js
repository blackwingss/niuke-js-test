function count(start, end) {
  //立即输出第一个值
  console.log(start++);
     var timer = setInterval(function(){
         if(start <= end){
             console.log(start++);
         }else{
             clearInterval(timer);
         }
     },100);
    //返回一个对象
     return {
         cancel : function(){
             clearInterval(timer);
         }
     };
 }
