import React from 'react'
import Button from './Button'

function Confirmation({message, handleYesClick, loading}) {
  return (
    <div className="w-fit text-xs sm:text-sm md:text-base mx-auto mt-3 mb-2 flex gap-2 items-center font-poppins">
        <span>{message}</span>
        <Button type="button" classes="bg-[#61B84C] px-2" name="Yes" loading={loading} onButtonClick={handleYesClick}/>
    </div>
  )
}

export default Confirmation