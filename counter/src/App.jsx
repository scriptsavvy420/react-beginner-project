import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = () => {
    setCount(count + 1);
  }
  const removeValue = () => {
    setCount(count - 1);
  }
  return (
    <>
      <div className="text-center w-screen">
        <h1 className='p-5'>Counter</h1>
        <h2 className='p-1 text-2xl'>Count = {count}</h2>
        <button className='m-2 font-semibold text-2xl' onClick={addValue}>+</button>
        <button className='m-2 font-semibold text-2xl' onClick={removeValue}>-</button>
      </div>
    </>
  )
}

export default App
