import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com"
})

export default instance;

//har ek file mein axios import karne se acha hai
//ek hi file mein create karo alag alag axios import karne se 
//direct obj ban ra sirf refrence lo
// base url jo kabhi change nhi hoga bas / route ke baad hoga