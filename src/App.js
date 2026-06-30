import React from 'react'
import './App';
const App = () => {
  return (
    <div className='Ap'>
      <h1>RTL Query : getAllByLabelText</h1>
      <label htmlFor='user-name1'>Username</label>
      <input type='text' id='user-name1' defaultValue={'Bubu'} />


      <label htmlFor='user-name2'>Username</label>
      <input type='text' id='user-name2' defaultValue={'Bubu'} />


      <label htmlFor='user-name3'>Username</label>
      <input type='text' id='user-name3' defaultValue={'Bubu'} />
    </div>
  )
}

export default App