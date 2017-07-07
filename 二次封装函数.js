// 一般写法
function partial(fn, str1, str2) {
    function result(str3) {
        return fn(str1, str2, str3);
    }
 
    return result;
}
 
// call
function partial(fn, str1, str2) {
    function result(str3) {
        return fn.call(this, str1, str2, str3);
    }
 
     return result;
}
 
// apply（这里只是为了对照）
function partial(fn, str1, str2) {
    function result(str3) {
        return fn.apply(this, [str1, str2, str3]);
    }
 
    return result;
}
 
// 这个bind会生成一个新函数对象, 它的str1, str2参数都定死了, str3未传入, 一旦传入就会执行
function partial(fn, str1, str2) {
    return fn.bind(this, str1, str2); // 或 return fn.bind(null, str1, str2);
}
 
// bind同上, 多了一步, 把str3传入的过程写在另一个函数里面, 而另一个函数也有str1, str2参数
function partial(fn, str1, str2) {
    function result(str3) {
        return fn.bind(this, str1, str2)(str3);
    }
 
    return result;
}
 
// 匿名函数
function partial(fn, str1, str2) {
    return function(str3) {
        return fn(str1, str2, str3);
    }
}
// ES6
const partial = (fn, str1, str2) => str3 => fn(str1, str2, str3);