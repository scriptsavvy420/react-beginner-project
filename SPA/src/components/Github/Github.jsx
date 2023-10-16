import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const data = useLoaderData()
  return (
    <>
      <div className='bg-gray-800 text-white w-full text-center p-4'>
        <span>Followers: {data.followers}</span>
        <img src={data.avatar_url} className='h-40 w-40' />
      </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const res = await fetch('https://api.github.com/users/git21221')
  return res.json()
}