import React from 'react'
import './App';
const App = () => {
  return (
    <div className='Ap'>
      <h1>RTL Query : getByLabelText</h1>
      <label htmlFor='user-name'>username</label>
      <input type='text' id='user-name' defaultValue={'Bubu'} />

      <br />
      <label htmlFor='skills'>Skills</label>
      <input type='checkbox' id='skills' defaultChecked={true} />
    </div>
  )
}

export default App