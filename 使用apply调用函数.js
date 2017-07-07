function callIt(fn) {
    //将arguments转化为数组后，截取第一个元素之后的所有元素
    var args = Array.prototype.slice.call(arguments,1);
    //调用fn
    var result = fn.apply(null,args);
    return result;
}