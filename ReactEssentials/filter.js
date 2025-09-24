// jab original array ka size kam naa karna ho tab map use hota hai
// jab original arr ka size kam karna ho tab filter use hota hai

// ek array se number hatado jo 5 se kum hai

var arr = [1,2,3,4,5];

const ans = arr.filter(val => val<5) // 5 nhi jayega
// console.log(ans)


var arr = [
    {name:"rahim",gender:"male"},
    {name:"snehal",gender:"female"},
    {name:"priya",gender:"female"}
]

const ans1 = arr.filter(val => val.gender === "male");
console.log(ans1);











