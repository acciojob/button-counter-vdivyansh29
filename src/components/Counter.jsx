import React from "react";
import { useState } from "react";

export default function Counter(){
  
    const [count, setCount] = useState(0)
  
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onClick(() => {
            setCount(count + 1)
        })>Click me</button>
    </div>
  )
}
