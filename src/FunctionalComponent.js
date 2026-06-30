import React, { useState } from 'react'
import handleOtherMethod from "../src/helper.js"
export default function FunctionalComponent() {

    const [data, setData] = useState("");


    const handleData = () => {
        setData('hello');
    }


    return (
        <div className='Functional'>
            <h1>Functional Component method testing</h1>
            <button data-testid="btn1" onClick={() => handleData()}>Update state</button>
            <button onClick={handleOtherMethod}>Print</button>
            <h2> {data}</h2>
        </div>
    );
}
