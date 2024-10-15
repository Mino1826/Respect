import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props)=>{

    const currency = 'تومان';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate()

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);
    
     
        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1; 
        }
        
        setCartItems(cartData);
        toast.success("محصول با موفقیت به سبد خرید اضافه شد!");  
        console.log(addToCart)
    }
    const getCartCount = () => {
        let totalCount = 0;
        for(const itemId in cartItems){
            if (cartItems[itemId] > 0) {
                totalCount += cartItems[itemId];
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId,quantity) => {

        let cartData = structuredClone(cartItems);

        cartData[itemId] = quantity;

        setCartItems(cartData);

    }

    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=>product._id === items );
            for(const item in cartItems[items]){
                try{
                    if (cartItems[items][item] > 0)  {
                        totalAmount += itemInfo.price * cartItems[items][item]
                        
                    }
                } catch (error){
                    console.error(error)
                }
            }
        }
        return totalAmount;

        
    }


    const value = {
        products, currency, delivery_fee,
        search, setSearch,showSearch,setShowSearch, 
        cartItems,addToCart,
        getCartCount,updateQuantity,
        getCartAmount,
        navigate,

    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}

        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
