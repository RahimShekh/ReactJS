import React, { createContext, useState } from 'react'

export const userContext = createContext();

function Context(props) {
    const [users,setUsers] = useState([
        {
            id: 0,
            username: "john Doe",
            city: "USA"
        },
        {
            id: 1,
            username: "rahim shekh",
            city: "india"
        },
        {
            id: 2,
            username: "vikas shekh",
            city : "uganda"
        }
    ])
    // console.log(props)
  return (
    <userContext.Provider value = {{users,setUsers}}> 
        {props.children}
    </userContext.Provider>
  )
}

export default Context

//u can pass[users,setUsers] like this also