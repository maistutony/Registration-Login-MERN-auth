import React from 'react'

function userPage(props) {
    console.log(props.user)
  return (
    <div>
    <div>{props.user.username} is logged in</div>
    <div>Email: <span>{props.user.userEmail}</span></div>
    </div>
  )
}

export default userPage