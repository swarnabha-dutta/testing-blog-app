import React from "react";

function App({testFunction}) {
  return (
    <div className="App">
      <h1>Understanding Functional Props</h1>
      <button onClick={testFunction}>Click Me</button>
    </div>
  )
}


export default App;