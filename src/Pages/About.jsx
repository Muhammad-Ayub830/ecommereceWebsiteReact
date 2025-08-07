import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-800">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur ipsam libero, inventore maiores expedita magni quae sed amet similique, quas eaque. Adipisci quasi quo dolor facilis labore eveniet doloremque.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur ipsam libero, inventore maiores expedita magni quae sed amet similique, quas eaque. Adipisci quasi quo dolor facilis labore eveniet doloremque.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, minima nihil quidem, enim dolor similique natus, iusto odit voluptatum aut nam dicta eveniet! Fugit voluptas, veritatis accusantium recusandae laboriosam ut.</p>
        </div>
      </div>
      <div className="text-xl py-4 ">
        <Title text1={'Why'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className=" px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p>Lorem ipsum dolor s
            g elit. Dolorum, Dolorum, odio laudantium porro quis expedita Dolorum, odio laudantium porro quis expedita Dolorum, odio laudantium porro quis expedita </p>
        </div>
         <div className=" px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p>Lorem ipsum dolor s
            g elit. Dolorum, odio laudantium porro quis expedita eligendi temporibus provident,  Dolorum, odio laudantium porro quis expeditabeat</p>
        </div>
         <div className=" px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Curstomer Service</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, odio laudantium porro quis expedita eligendi temporibus provident, beat</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
