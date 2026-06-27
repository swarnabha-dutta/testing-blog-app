import React, { useState } from 'react'

const InputForm = () => {
    const [data,setData] = useState("");
  return (
    <div>
        <input type="text" value={data} placeholder="Enter email" onChange={(e)=>setData(e.target.value.toUpperCase())}/>
    </div>
  )
}

export default InputForm