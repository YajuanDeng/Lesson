import {useState} from "react"

export default function AppHook({myCount}) {
    const [count,setCount] = useState(myCount)
    return <>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
    
}