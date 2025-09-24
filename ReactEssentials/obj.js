var state = {name:"rahim",age: 24};

//state.name = "shekh"; react will not allow this(direct update nhi karsakte)

//correct way to do it in react

var copy = {...state};
copy.name = "shekh";

state = copy;