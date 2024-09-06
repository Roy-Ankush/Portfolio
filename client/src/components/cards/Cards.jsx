import React from 'react'

function Cards(props) {
  return (
    <>
      <div className="image-wrapper">
            <img
              src={props.image}
              alt="mernimage"
             className=' mx-auto mt-10  s:h-30 xs:h-20 mb-2 h-24 p-1 w-auto rounded-md border-solid   object-cover transfprm transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-[#cb7676] '
            />
            <h3 className="p-1 text-lg font-bold text-center text-[#d6aaaa] ">{props.name}</h3>
          </div>
    </>
  )
}

export default Cards
