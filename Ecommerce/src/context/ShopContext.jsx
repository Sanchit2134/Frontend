import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();
const ShopContextProvider = (props)=>{
    const [search, setSearch] = useState('');
    const [searchShow, setSearchShow] = useState(false);
    const [cartItem, setCartItem] = useState({});
    const currency = "$";
    const delivery_fee = 10;
    const navigate = useNavigate(); 

    //Add to cart functionality
    const addToCart = async (itemId, size) => {
        // Clone the current cart data
        let cartData = structuredClone(cartItem);
    
        // Check if size is selected
        if (!size) {
            toast.error("Please select a size");
            return;
        }
    
        // Check if the item already exists in the cart
        if (cartData[itemId]) {
            // Check if the size already exists for this item
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1; // Increment the size quantity
            } else {
                cartData[itemId][size] = 1; // Initialize this size with quantity 1
            }
        } else {
            // If item doesn't exist, initialize it as an object and add size with quantity 1
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
    
        // Update the cart state
        setCartItem(cartData);
    };  

    //Update Cart count
    const getCartItem = ()=>{
        let totalCount = 0;
        for(const item in cartItem){
            for(const size in cartItem[item]){
                try {
                    if(cartItem[item][size] > 0){
                        totalCount += cartItem[item][size];
                        // console.log(totalCount)
                    }
                } catch (error) {
                   console.log(error); 
                }
            }
        }   
        return totalCount;
    }

    //Update quantity of product
    const updateQuantity = async(itemId,size,quantity)=>{
        let cartData = structuredClone(cartItem);
        cartData[itemId][size] = quantity;
        setCartItem(cartData);
    }

    const getCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItem){
            let itemInfo = products.find((product)=>product._id === item);
            for(const size in cartItem[item]){
                try {
                    if(cartItem[item][size] > 0){
                        totalAmount += itemInfo.price * cartItem[item][size];
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }  return totalAmount;
    }

    const value = {products, currency, delivery_fee, search, setSearch, searchShow, setSearchShow, cartItem, addToCart, getCartItem, updateQuantity, getCartAmount, navigate} ;
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;