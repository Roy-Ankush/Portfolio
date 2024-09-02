import React from 'react'

function Cards(props) {
  return (
    <>
      <div className="image-wrapper">
            <img
              src={props.image}
              alt="mernimage"
             className=' mx-auto mt-10 mb-8 s:h-40 h-32 w-auto rounded-md object-cover transfprm transition-transform duration-300 hover:scale-105 '
            />
          </div>
    </>
  )
}

export default Cards
