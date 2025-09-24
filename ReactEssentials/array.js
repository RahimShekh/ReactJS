//mutable vs immutable

// in js

var arr = [1,2,3,4];
var arr2 = arr;

arr2.pop();

console.log(arr2);
console.log(arr);
//it is a problem in reference
// arr2 mein pop kiya lekin arr mein pop hogaya due to refernce

// reactjs mein aapko ek state naam ki cheej milegi us bande ko
// app mutate nahi karskte matlab ki directly uski value nahi hata ya jod nhi sakte
// in react state is immutable

var state = [1,2,3];
state.pop(); // not allowed in reactjs

//immutable way to do in react

var state1 = [1,2,3,4];
var copy = [...state1];  // spread operator

//copy.pop(); state1 mein change nhi hoga
