import React, { useState } from "react";


function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <h1>act functionality testing</h1>
      {name}
      <br />
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder='enter name'
      />
    </div>
  )
}

export default App;