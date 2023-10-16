import { useEffect, useState } from 'react'
import './App.css'
import useUserInfo from './hooks/useUserInfo'
import Card from './components/Card'

function App() {
  let [username, setUsername] = useState("git21221");
  let [name, setName] = useState("");
  const data = useUserInfo(username);
  const search = () => {
    setUsername(name)
  };
  return (
    <>
      <h1 className='text-5xl text-center'>Github Card</h1>
      <Card
        username={data.name}
        followers={data.followers}
        photo={data.avatar_url}
        id={data.id}
      />
      <input
        type="text"
        value={name}
        className='text-black'
        onChange={(e) => setName(e.target.value)}
      />
      <button id="search" onClick={() => search()}>Search</button>
    </>
  )
}

export default App
