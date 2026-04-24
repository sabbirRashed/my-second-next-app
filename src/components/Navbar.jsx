"use client"
import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    console.log(count)
    return (
        <div>
            <h2>Count: {count}</h2>
            <button className='' onClick={() => {setCount(count + 1)}}>Add +1</button>
        </div>
    );
};

export default Count;