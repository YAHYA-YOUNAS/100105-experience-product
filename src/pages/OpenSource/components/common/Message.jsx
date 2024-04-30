import React from 'react'

function Message({classes, message}) {
  return (
    <div className={"font-poppins p-2 rounded text-center bg-neutral-100 " + classes}>
        <span>{message}</span>
    </div>
  )
}

export default Message