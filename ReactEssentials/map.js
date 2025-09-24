// map filter

// map
//dono hi array pe chalte hai dono ka kaam kuch perform karna and naya array return karna
// map ke ander return karna jarrori hai kyuki return karne ke vajah se naye array mein place hote hai

let arr = [1,2,3,4];

const ans = arr.map(val =>{
    return val*2;
})

console.log(ans);

//another simpler way to11 write
//const ans = arr.map(val => val*12)

// another example

var state = [11,22,3,4,5,56,7];

state.map(elem => elem > 5 ? elem+5 : elem) // ternary operator
// ? matlab true hoga toh under nhi hoga to semicolon


// state.map(val =>{
//     if(val > 5)
//     {
//         val = val+5;
//     }
// })