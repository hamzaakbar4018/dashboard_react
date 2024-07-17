import React from 'react'

const Card = ({title,price}) => {
  return (
    <div>
        <div className='shalow-lg mt-8  shadow-slate-500  mr-10 p-4 rounded'>
            <h3 className='mr-3 text-gray-400'>{title}</h3>
            <h1 className='font-bold text-xl'>{price}</h1>
        </div>
    </div>
  )
}

export default Card