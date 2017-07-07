function makeClosures(arr, fn) {
    var funcs = [];
    for(var i=0; i<arr.length; ++i){
        (function(v){
            funcs[v] = function(){
                return fn.call(null,arr[v]);
            }
        })(i);
    }
    return funcs;
}