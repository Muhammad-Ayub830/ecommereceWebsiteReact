import { Children, createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext()
const ShopcContextProvider = ({ children }) => {
    const currency = '$'
    const devlivery_fee = 10
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({})
    const navigate = useNavigate()
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Select product size");
            return
        }
        let cardata = structuredClone(cartItems)
        if (cardata[itemId]) {
            if (cardata[itemId][size]) {
                console.log(cardata)
                cardata[itemId][size] += 1
            } else {
                cardata[itemId][size] = 1
            }
        } else {
            cardata[itemId] = {}
            cardata[itemId][size] = 1
        }
        setCartItems(cardata)
    }
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        console.log(cartItems[items][item])
                        totalCount += cartItems[items][item]
                    }
                } catch (error) {
                }
            }
        }
        return totalCount;
    }
    const updateCart = async(itemId,size,quantity)=>{
        const cartCpy = structuredClone(cartItems)
        cartCpy[itemId][size] = quantity
        setCartItems(cartCpy)
    }
    const getCartAmount =  ()=>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items)
            for (const item in cartItems[items]){
                try {
                    if(cartItems[items][item]>0){
                        totalAmount += itemInfo.price * cartItems[items][item]

                    }
                } catch (error) {
                    
                }
                
            }                 
        }
        return totalAmount
    }
    const value = {navigate, getCartAmount, updateCart, products, currency, devlivery_fee, search, setSearch, showSearch, setShowSearch, cartItems, addToCart, getCartCount }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopcContextProvider