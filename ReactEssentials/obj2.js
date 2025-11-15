var obj1 ={
    name:"kaka",
    social:{
        name:"rahim",
        age:{
            newAge:23,
            city:"nanded"
        }
    }
}

var{newAge,city} = obj1.social.age;

console.log(newAge);

//another example

let arr =[12,function(){},13];

// let[first,sec] = arr;
let[one,,third] = arr;   // last vala access karna ho to

console.log(sec);
console.log(third);

