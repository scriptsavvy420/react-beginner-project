import { useEffect, useState } from "react";

function useUserInfo(username){
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((username) => setData(username))
  }, [username])
  return data;
}

export default useUserInfo;