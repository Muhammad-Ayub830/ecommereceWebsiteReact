import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="">
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
                 amet. Optio non praesentium error neque veniam aperiam ipsa placeat quia unde eos consequuntur voluptate cumque,
                 dignissimos ipsum officiis repudiandae exercitationem.</p>
        </div>
        <div className="">
            <p className="font-medium text-xl mb-5">COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="">
            <p className='text-xl font-medium mb-5'>Get in touch</p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+9234383432</li>
                <li>gullkhan@gmail.com</li>
            </ul>
        </div>
      </div>
      <p className='py-5 text-center text-sm'>copyright 2024 @forever</p>
    </div>
  )
}

export default Footer
