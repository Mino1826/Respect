import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const { t } = useTranslation();  
    const currency = t('currency'); 
    const delivery_fee = 10; 
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [checkoutNote, setCheckoutNote] = useState("");        // 👈 توضیحات مشتری
    const [shippingMethod, setShippingMethod] = useState("cod"); // اگر روش پرداخت/ارسال داری
    const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    fullAddress: "",
    province: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const createOrder = async (payload) => {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const txt = await res.text();
      throw new Error(txt || "Order creation failed");
    }
    return res.json();
  };

  const value1 = {
    // مقادیر قبلی …
    checkoutNote, setCheckoutNote,
    shippingMethod, setShippingMethod,
    address, setAddress,
    createOrder, // در صورت نداشتن API فعلاً می‌تونی موک کنی
    navigate: (path) => window.location.assign(path),
  };
    
    const navigate = useNavigate();
    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }

        setCartItems(cartData);
        toast.success(t("addedSuccess"));  
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                totalCount += cartItems[itemId];
            }
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items);
            try {
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[items];
                }
            } catch (error) {
                console.error(error);
            }
        }
        return totalAmount;
    };


    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        value1
        
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

