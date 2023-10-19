import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [Characters, setCharacters] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  // console.log(passwordRef);
  const passGen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if(numbers) str += "0123456789";
    if(Characters) str += "~`@#$%^&*_<>/?";
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, Characters, numbers, setPassword]);
  useEffect(() => {
    passGen();
  }, [length, Characters, numbers, setPassword]);

  const copy = useCallback(() => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }, [password]);
  return (
    <>
      <div className="bg-gray-700 flex place-items-center h-auto p-10 flex-col gap-10 w-auto rounded-xl mt-5">
        <h1 className='text-3xl text-center text-white'>Strong Password Generator</h1>
        <div className="passwordSection flex justify-center">
          <input type="text" name="password" id="password" placeholder='Password' className='w-64 p-3 flex outline-none' defaultValue={password} readOnly ref={passwordRef}/>
          <button className='p-2 bg-slate-500 copyBtn' onClick={copy}>Copy</button>
        </div>
        <div className="controls flex items-center justify-center">
          <input className='mx-3' type="range" name="length" id="length" min="8" max="100" value={length} onChange={(e) => setLength(e.target.value)} />
          <span className='text-white'>length: {length}</span>
          <input type="checkbox" name="" id="characterInput" className='mx-3' defaultChecked={Characters} onChange={() => {
            setCharacters((prev) => !prev)
          }}/> <label htmlFor='characterInput' className='text-white'>Characters</label>
          <input type="checkbox" name="" id="numberInput" className='mx-3' defaultChecked={numbers} onChange={() => {
            setNumbers((prev) => !prev)
          }}/> <label htmlFor='numberInput' className='text-white'>Numbers</label>
        </div>
      </div>
    </>
  )
}

export default App
