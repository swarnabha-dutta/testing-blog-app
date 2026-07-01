import React from 'react'
import './App';
const App = () => {
  return (
    <div className='App'>
      <h1>RTL Query :  getByText and getAllByText</h1>
      <div data-testid="div-test-id">
        Testing with test id
      </div>
      <div data-testid="div-test-id">
        Testing with test id
      </div>
    </div>
  )
}

export default App