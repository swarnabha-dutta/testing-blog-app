import React, { useState } from 'react'

const Application = () => {
    const [data, setData] = useState('');
    return (
        <div className='App'>
            <h1>Jest fgdgfdtr</h1>
            <button onClick={() => setData("hello")}>Update Data</button>
        </div>
    )
}

export default Application;