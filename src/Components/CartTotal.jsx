import { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    const { currency, getCartAmount } = useContext(ShopContext);
    const [shippingMethod, setShippingMethod] = useState('flat_rate15'); // Default shipping method
   ;
    
    const cartAmount = getCartAmount();

    // Updated shipping costs
    const shippingOptions = {
        flat_rate15: { label: 'ارسال با پست به شهرستان و تهران', cost: 65000 },
        flat_rate22: { label: 'ارسال با اسنپ باکس ( هزینه ارسال پس کرایه هست) برای اطلاع از ساعت ارسال بعد از ثبت سفارش دایرکت یا واتساپ پیام بدین', cost: 0 }, // Cash on delivery
        flat_rate23: { label: 'ارسال با تیپاکس پس کرایه(هزینه کارتن و بسته بندی ۱۰ هزار تومان_ارسال با تیپاکس به صورت پسکرایه انجام میشود یعنی کرایه پستی زمان تحویل بسته از شما دریافت خواهد شد.(هزینه‌ی ارسال با تیپاکس به وزن بسته و فاصله‌ی شما از تهران بستگی دارد و معمولاً از ۷۰ هزار تومان به بالاست.): ', cost: 10000 } // Packaging cost
    };

    const handleShippingChange = (e) => {
        setShippingMethod(e.target.value);
    };

    

    const totalShippingCost = shippingOptions[shippingMethod].cost;


    

    return (
        <div className='bg-customGray w-full flex flex-col '>
            <div className='text-2xl mx-4 pt-3 text-center'>
                <Title text1={'مجموع'} text2={'سبد خرید'}/>
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm mx-6'>
                <div className='flex justify-between '>
                    <p>جمع کل</p>
                    <p>{currency} {cartAmount}.000</p>
                </div>
                <hr className='border-gray-400 mb-3 mt-2'/>

                {/* Shipping Method Selection */}
                <div className='flex flex-col gap-2'>
                    <p>حمل و نقل</p>
                    <ul className='flex flex-col gap-5 leading-loose'>
                        {Object.keys(shippingOptions).map((method) => (
                            <li key={method} className=''>
                                <input 
                                className='mx-2 my-2'
                                    type='radio' 
                                    name='shipping_method' 
                                    id={method} 
                                    value={method} 
                                    checked={shippingMethod === method}
                                    onChange={handleShippingChange}
                                />
                                <label htmlFor={method}>
                                    {shippingOptions[method].label}: 
                                    <span>{shippingOptions[method].cost > 0 ? `${currency} ${shippingOptions[method].cost}` : 'پس کرایه'}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

               

                <hr className='border-gray-400 mb-3 mt-2'/>
                
                <div className='flex justify-between mb-4'>
                    <b>مجموع نهایی</b>
                    <b>{currency} {cartAmount + totalShippingCost}.000</b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;