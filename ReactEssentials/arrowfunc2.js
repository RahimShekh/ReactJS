//tricky

const abcd = () => {name:"rahim"};  // not treating as a obj its considered a func body

console.log(abcd()); // undefined

// right way to return obj

const pqrs = () => ({name : "shekh",age:23});


console.log(pqrs()); // will return obj
