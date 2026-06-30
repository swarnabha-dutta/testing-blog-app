import React from 'react'
import './App.css'


const App = () => {
  return (
    <div>
      <h1>getByRole</h1>
      {/* <input type='text' defaultValue={'hello'} /> // enable now  */}
      <input type='text' defaultValue={'hello'} disabled /> //disable now
    </div>
  )
}

export default App