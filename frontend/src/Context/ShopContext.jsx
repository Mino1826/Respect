import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const { t } = useTranslation();
  const currency = t("currency");
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const [checkoutNote, setCheckoutNote] = useState(""); // 👈 توضیحات مشتری
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
    checkoutNote,
    setCheckoutNote,
    shippingMethod,
    setShippingMethod,
    address,
    setAddress,
    createOrder, // در صورت نداشتن API فعلاً می‌تونی موک کنی
    navigate: (path) => window.location.assign(path),
  };

  const navigate = useNavigate();
  const addToCart = async (itemId,quantity = 1) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += quantity;
    } else {
      cartData[itemId] = quantity;
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/add",
          { itemId, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
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

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          { itemId, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
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

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserCart = async( token )=>{
    try {
        
        const response = await  axios.post(backendUrl + '/api/cart/get', {},{headers:{token}})

        if (response.data.success) {
            setCartItems(response.data.cartData)
            
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message);
        
    }
  }

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"))
      getUserCart(localStorage.getItem("token"))
    }
  }, []);

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
    value1,
    backendUrl,
    setToken,
    token,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
