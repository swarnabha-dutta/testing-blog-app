import React, { useState } from "react";


function App() {
  const [data, setData] = useState("");
  return (
    <div className="App">
      <h1>UserEvent testing</h1>
      <button onClick={() => setData("DATA iS HERE")}>Click Me</button>
      <h1>{data}</h1>
    </div>
  )
}


export default App;