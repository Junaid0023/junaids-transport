import React from 'react'
import { services } from '../../data/services'
import Cards from '../components/Cards'





const ServicesPage = () => {
  return (
    <section className='pb-15'>
      <div className='text-center'>
        <h1 className='text-[1rem] md:text-2xl mt-13 md:m-15 font-semibold text-red-700'>OUR SERVICES</h1>
        <h4 className='text-[1.2rem] mt-7 leading-tight  md:text-3xl mb-5 font-bold px-7'>Logistics solutions designed to move  your business forward</h4>
        <p className='px-7 text-sm md:text-base text-gray-600'>We deliver dependable transport services that prioritize speed, safety, and efficiency for businesses of all sizes.</p>
      </div>

      <div className='mx-auto max-w-6xl px-6'>

         <div className='mt-16 grid sm:grid-cols-2 lg:grid-cols-3 p-3 gap-5 '>
        {services.map((service) => (
          <Cards key={service.id}
          title = {service.title}
          description = {service.description}
          icon= {service.icon}
          />
        ))}
      </div>
      </div>
      
     

    </section>
  )
}

export default ServicesPage
