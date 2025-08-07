import React, { useContext, useState } from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/assets'
import { Navigate } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const PlaceOrder = () => {
  const [method,setMethod] = useState('cod')
  const {navigate} = useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First name' type="text" />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last name' type="text" />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='email' type="text" />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Street' type="text" />
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' type="text" />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='State' type="text" />
        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zip-code' type="number" />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' type="text" />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Phone' type="number" />


      </div>
      <div className="mt-8 ">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border  border-gray-400 p-2 px-3 cursor-pointer">
              <p className={`${method=='stripe' ? 'bg-green-600 border-green-600':''} min-w-3.5 h-3.5 border rounded-full`}>
              </p>
              <img src={assets.stripe_logo} className='h-5 mx-4' />
            </div>
            <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border  border-gray-400 p-2 px-3 cursor-pointer">
              <p className={` ${ method == 'razorpay' ? 'bg-green-600 border-green-600' :''} min-w-3.5 h-3.5 border rounded-full`}>
              </p>
              <img src={assets.razorpay_logo} className='h-5 mx-4' />
            </div>
            <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border  border-gray-400 p-2 px-3 cursor-pointer">
              <p className={` ${ method == 'cod' ? 'bg-green-600 border-green-600':''} min-w-3.5 h-3.5 border  rounded-full`}>
              </p>
              <p className=' text-blue-600 text-sm font-medium'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className="w-full text-end mt-18">
            <button onClick={()=>navigate('/orders')} className=' bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>


    </div>

  )
}

export default PlaceOrder
