import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({category,subCategory}) => {
    const {products} = useContext(ShopContext)
    const [related,setRelated] = useState([])
    useEffect(()=>{
        if(products.length > 0){
            let productsCopy = products.slice()
          productsCopy = productsCopy.filter((item)=>category === item.category)
          productsCopy = productsCopy.filter((item)=>subCategory===item.subCategory)
          setRelated(productsCopy.slice(0,5))
        }else{
            console.log("products are not availabe")
        }
    },[products])
  return (
    <div className='my-24'>
         <div className="text-center text-3xl py-2">
            <Title text1="RELATED" text2="PRODUCTS" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-4 gap-y-6">
                {
                    related.map((item,index)=>{
                     return   <ProductItem key={index} id={item._id} name={item.name} price={item.price} img={item.image} />
                    })
                }
            </div>
         </div>
    </div>
  )
}

export default RelatedProducts
