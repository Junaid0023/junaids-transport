import React from 'react'
import { services } from '../../data/services'




const Cards = ({title, description, icon: Icon}) => {
  return (
   <article className=' group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration 300 hover:translate-y-2 hover:shadow-sm '>
      <div className='mb-6 flex h-14 w-14 mx-auto items-center justify-center bg-amber-400 transition-colors duration-300 group-hover:bg-blue-100 p-3'>
        <Icon className="h-15 w-15 text-gray-600 "/>
      </div>
      <h3 className='mb-3 text-xl font-semibold text-gray-900'>{title}</h3>
      <p className='text-sm leading-relaxed text-gray-600'>{description}</p>

      {/* <div className='mb-6'>
        <span className='inline-flex items-center text-sm font-medium text-blue-600 group-hover:underline'>
          Learn more →
        </span>
      </div> */}
   </article>
   
  )
}

export default Cards
