function count(arr, item) {
     var count = 0;
     arr.forEach(function(e){
         //e为arr中的每一个元素，与item相等则count+1
         e == item ? count++ : 0;
     });
     return count;
 }
