var a = 1;
var b = 2;

(function() {
    var b = 3;
    var a = a+b;
    
})();

console.log(a,b);