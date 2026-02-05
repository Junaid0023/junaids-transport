import React from 'react'

const Footer = () => {
  return (
    <footer className=' bottom-0 w-full text-white py-7 bg-amber-600 '>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6 p-8'>
        <div>
          <h3 className='font-bold mb-3'>Junaid Logistic</h3>
          <p className='mt-4 text-sm'>Reliable transport and logistics solutions you can trust</p>
        </div>

        <div>
          <h3 className='font-bold mt-3 mb-4 text-white'>Services</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href="">Freight Transport</a>
            </li>
            <li>
              <a href="">Cargo Handling</a>
            </li>
            <li>
              <a href="">Warehousing</a>
            </li>
            <li>
              <a href="">Fleet Management</a>
            </li>
            <li>
              <a href="">Logistic Planning</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='font-bold mt-3 mb-4 text-white'>Company</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Our Fleet</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
           
          </ul>
        </div>

        <div>
          <h3 className='font-bold mt-3 mb-4 text-white'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href="">Track Shipment</a>
            </li>
            <li>
              <a href="">Request a Quote</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Terms & Conditionst</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='font-bold mt-3 mb-4 text-whte'>Contact Information</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href="">Location: Accra, Ghana</a>
            </li>
            <li>
              <a href="">Phone: +233 000 000 000</a>
            </li>
            <li>
              <a href="">Email: info@swiftmove.com</a>
            </li>
           
          </ul>
        </div>
       
      </div>

      <div className='border-t border-gray-300 text-center py-3 text-sm'>
        {new Date().getFullYear()} Junaids Logistics . All rights reserved.
      </div>
      

    </footer>
  )
}

export default Footer
