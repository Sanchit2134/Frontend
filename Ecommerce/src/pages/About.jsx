import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} TEXT2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center  gap-6 md-w:2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime mollitia sapiente repellendus, consequatur labore.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque dolores aliquid.</p>
          <b className='flex justify-start'>Our Mission</b>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, quae minima odio dignissimos alias amet cum laborum voluptates facere cupiditate?</p>
        </div>
      </div>

      <div className='flex justify-start text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='flex flex-col border px-10 md:px-16 py-8 sm:py-20 gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores voluptatem amet consequuntur. Labore at natus ipsum illo officiis sit!</p>
        </div>

        <div className='flex flex-col border px-10 md:px-16 py-8 sm:py-20 gap-5'>
          <b>Convience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores voluptatem amet consequuntur. Labore at natus ipsum illo officiis sit!</p>
        </div>

        <div className='flex flex-col border px-10 md:px-16 py-8 sm:py-20 gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores voluptatem amet consequuntur. Labore at natus ipsum illo officiis sit!</p>
        </div>
      </div>

      {/* Newsletter*/}
      <div>
        <NewsLetterBox/>
      </div>
    </div>
  )
}

export default About