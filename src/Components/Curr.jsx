import React from 'react'

function Curr({crr1, crr2, down}) {

    console.log(down);
    
  return (
    <div className={` flex flex-col gap-8  ${down}`}>
        <div className={`  text-4xl p-1 rounded-full border `}>{crr1}</div>
        <div className={` text-4xl p-1 rounded-full border `}>{crr2}</div>
    </div>
  )
}

export default Curr