import React from 'react'

function Card({
  username,
  photo,
  followers,
  id
}) {
  return (
    <>
      <div className="card bg-gray-700">
        <div className="photo">
          <img src={photo} />
        </div>
        <div className="details">
          <div className="name">
            Name: {username}
          </div>
          <div className="followers">
            Followers: {followers}
          </div>
          <div className="id">
            Id: {id}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card