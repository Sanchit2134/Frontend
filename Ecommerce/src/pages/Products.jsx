import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Products = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        // console.log(item);
        setProductData(item);
        // console.log(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/*-------------------- Product Data -------------------*/}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*------------------ Product Imag---------------------*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
            {
              productData.image.map((item, index) => {
                return (
                  <img onClick={() => setImage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
                )
              })
            }
          </div>
          <div className='w-full sm:[w-80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/*------------------ Product Information---------------------*/}
        <div className='flex-1'>
          <h1 className=' flex justify-start font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='flex justify-start mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-3/4'>{productData.description}</p>
          <div className='flex gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'bg-orange-500' : ''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-3/4' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 justify-start'>
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/*-------------------- Description & Review Section -------------------*/}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Review (122)</p>
        </div>
        <div className='flex-col gap-4 border px-6 py-6 text-sm text-gray-600'>
          <p>An e-commerce website is an online platfprm</p>
          <p>E-commerce website typically display products or services</p>
        </div>
      </div>

      {/*-------------------- Display related products -------------------*/}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/> 
    </div>
  ) :
    (
      <div className='opacity-0'>Loading...</div>
    )
}

export default Products