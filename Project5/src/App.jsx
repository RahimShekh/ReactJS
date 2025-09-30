//props
import React, { useState } from 'react'
import Card from './Components/Card'
function App() {
  const data = [
    {name:"John",profession:"Wrestler",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX-4bCuw-sHNvGWVbRtus473bWg4Bi3y4dfruVDKAdM_uoJWNcRvViV2Ade6Mcj4LOw9LDLOg5N_aDSoC5gD_OxhAx7kg5MbM6FvjTE3tf",friends: false},
    {name:"Virat",profession:"Cricketer",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXd7IOQ0NKyGMznUdvuNfPqT1PjyLLWs2PlA&s",friends:false},
    {name:"Khabib",profession:"Fighter",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbLkaczonYA9H17zAa3d2pwtvRrf2RX9Vcw&s",friends:false},
    {name:"Kanye",profession:"Rapper",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREhz-6EbfiftYAgV0vxqRoA3hAHxwo2pE6qg&s",friends:false}

  ]
  const [realData,setData] = useState(data);
  //state jaha banti hai modify vahi hoti hai  card mein jaa ke nhi karsakta

  const handleFriendsButton = (updateIndex)=>{
    setData((prev)=>{
      return prev.map((item,index) =>{
        if(index === updateIndex)
        return { ...item, friends: !item.friends}
        return item;
      })
    })
  }
  console.log(data);
  return (
    <>
    <div className='bg-slate-300 h-screen flex items-center justify-center gap-4'>
      {realData.map((item,index)=>(
        <Card key = {index} handleFriendsButton={handleFriendsButton} index={index} values = {item}  />
      ))}
    </div>
    </>
  )
}

   //     <Card image= {item.image} name={item.name} profession = {item.profession} />
export default App
