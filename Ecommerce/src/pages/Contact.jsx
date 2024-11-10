import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='pt-10 border-t text-center text-2xl'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      
        <div className='flex flex-col my-10 justify-center md:flex-row  gap-10 md-28'>
          <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col gap-6 text-gray-600'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='flex justify-start text-gray-600'>54790  Kathlaur<br /> Pathankot ,Punjab,India </p>
            <p className='flex justify-start text-gray-600'>Tel: (415) 5502-0132 <br />Email: amdin@forever.com</p>
            <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
            <p className='font-semibold text-gray-600'>Learn more about our teams and jobs openings</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>
        </div>
        <NewsLetterBox/>
    </div>
  )
}

export default Contact