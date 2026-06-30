import React from 'react'

const App = () => {
  return (
    <div className='App'>

      {/* Semantic Elements */}
      <h1>Multiple Item with Role</h1>
      <h1>Custom Role</h1>
      <button>Click 1</button>
      <button>Click 2 </button>
      <label htmlFor='input1'>User Input</label>
      <input id='input1' />
      <label htmlFor='input2'>User page</label>
      <input type='text' id='input2' />



      {/* Non-Semantic Elements */}
      <div role='dummy'>
        dummy Text
      </div>
    </div>
  )
}

export default App