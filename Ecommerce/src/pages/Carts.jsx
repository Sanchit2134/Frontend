import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Carts = () => {
  const {products, currency, cartItem, updateQuantity} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(()=>{
    const tempData = [];
    console.log(cartItem)

    for(const item in cartItem){
      for(const size in cartItem[item]){
        if(cartItem[item][size] > 0){
          tempData.push({
            _id: item,
            size: size,
            quantity: cartItem[item][size]
          })
        }
      }
    }
    console.log(tempData)
    setCartData(tempData);
  },[cartItem])
  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>

      <div>
        {
          cartData.map((item,index)=>{
          const productData = products.find((product)=>product._id === item._id);
          // console.log(productData)
          return(
            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] item-center gap-4'>
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div>
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                  </div>
                </div>
              </div>
              <input className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity}/>
              <img onClick={()=>updateQuantity(item._id, item.size,)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
            </div>
          )
          })
        } 
      </div>
    </div>
  )
}

export default Carts