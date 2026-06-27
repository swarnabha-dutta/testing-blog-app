import React, { useState } from 'react'

const ButtonClick = () => {
    const [data,setData] = useState("");
  return (
    <div>
        <h1>Button Click</h1>
        <button onClick={()=>setData("updated Data")}>Update Data</button>
        <p>Data: {data}</p>
    </div>
  )
}

export default ButtonClick;