function findAllOccurrences(arr, target) { 

  var temp = [];
      arr.forEach(function(val,index){
          val !== target ||  temp.push(index);
      });
      return temp;
  }
