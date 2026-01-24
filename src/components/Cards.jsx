import React from 'react'
import { services } from '../../data/services'




const Cards = ({title, description, icon: Icon}) => {
  return (
   <article className=' group rounded-2xl border border-amber-400 bg-white p-7 shadow-sm transition-all duration 300 hover:translate-y-2 hover:shadow-sm cursor-pointer border-b-amber-600'>
      <div className='mb-6 flex h-14 w-14 items-center justify-center transition-colors duration-300 p-3'>
        <Icon className="w-10 h-10"/>
      </div>
      <h3 className='mb-3 text-xl font-semibold text-gray-900'>{title}</h3>
      <p className='text-sm leading-relaxed text-gray-500'>{description}</p>

      {/* <div className='mb-6'>
        <span className='inline-flex items-center text-sm font-medium text-blue-600 group-hover:underline'>
          Learn more →
        </span>
      </div> */}
   </article>
   
  )
}

export default Cards
