function functions(flag) {  
  var getvalue = null;  
  if (flag) {   
    getValue = function() {
      return 'a';
    }  
  } else {   
    getValue = function() {
      return 'b';
    }  
  }  
  return getValue();
}
