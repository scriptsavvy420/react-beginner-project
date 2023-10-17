import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

function profile() {
  const { user } = useContext(UserContext)
  if (!user.userName) return <div>Please login</div>
  return <div>Welcome {user.userName}</div>
}

export default profile