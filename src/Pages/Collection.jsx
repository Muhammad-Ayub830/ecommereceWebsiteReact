import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../Components/Title'
import ProductItem from '../Components/ProductItem'

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(true)
  const [filteredProducts,setFilterProducts] = useState([])
  const [category,setCategory] = useState([])
  const [subCategory,setSubcategory] = useState([])
  const [sortType,setSortType] = useState('relevent')
  const toggleCategory = (e)=>{
      if(category.includes(e.target.value)){
        setCategory((prev)=>prev.filter(item=>item !== e.target.value))
      }else{
        setCategory((prev)=>[...prev,e.target.value])
      }
  }
  const toggleSubCategory = (e)=>{
      if(subCategory.includes(e.target.value)){
        setSubcategory((prev)=>prev.filter(item=>item !== e.target.value))
      }else{
        setSubcategory((prev)=>[...prev,e.target.value])
      }
  }

  const applyFilter = ()=>{
    let productCopy = products.slice()
    if(category.length>0){
      productCopy = productCopy.filter((item)=>category.includes(item.category))
    }
    if(search && showSearch){
      productCopy = productCopy.filter((item)=>item.name.toLowerCase().includes( search.toLowerCase()) )
    }
    if(subCategory.length>0){
      productCopy = productCopy.filter((item)=>subCategory.includes(item.subCategory))
    }
    setFilterProducts(productCopy)
  }
  const sortproduct = ()=>{
    let fpproduct = filteredProducts.slice()
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpproduct.sort((a,b)=>(a.price-b.price)))
        break;
    
        case 'high-low':
           setFilterProducts(fpproduct.sort((a,b)=>(b.price-a.price)))
          break;
      default:
        applyFilter()
        break;
    }
  }
  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search,showSearch])
  useEffect(()=>{
    sortproduct()
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 mt-10 border-t pt-10'>
      {/* filter options */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 cursor-pointer text-xl flex items-center gap-2 ">FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
        </p>

        {/* Category FIlter   */}
        <div className={`border border-gray-500 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Men' onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Women'onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Kids'onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>
        {/* sub category filter */}
        <div className={`border border-gray-500 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Topwear' onChange={toggleSubCategory} />Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Bottomwear' onChange={toggleSubCategory} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Winterwear' onChange={toggleSubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base  sm:text-2xl  mb-4">
          <Title text1='ALL' text2='COLLECTIONS' />
          {/* production sort  */}
          <select className='border border-gray-300 text-sm px-2' onChange={(e)=>{setSortType(e.target.value)}}>
            <option value="relevent"className=''>Sort by : Relevent</option>
            <option value="low-high"className=''>Sort by : Low to High</option>
            <option value="high-low"className=''>Sort by : High to Low</option>
          </select>
        </div>
        {/* map product  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filteredProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} img={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
