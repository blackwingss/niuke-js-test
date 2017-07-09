function createModule(str1, str2) {
     var obj = {
         greeting : str1,
         name     : str2,
         sayIt    : function(){
             //两个属性前面都需要加上this
             return this.greeting+", "+this.name;
         }
     };
     return obj;
 }