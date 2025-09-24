var obj = {name:"rahim", age: 25};

//right way to destructure in react

const {age} = obj;

// we dont have to do obj. age we can directly write age

var obj1 = {name:"shekh",social:{
    facebook:{
        first: " hah",
        second: " opsd"
    }
}}

// if we want to access second we have to write this much
//obj.social.facebook.second
 
//better way
const{second} = obj.social.facebook;


//another example

var arr = [12,function(){}];

var[First,sec] = arr;  // destructure

//another example

var brr = [21,function(){},45];

var[pehla,,dusra] = brr;   // ,, to skip middle element

