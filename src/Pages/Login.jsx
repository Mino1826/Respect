import { div } from "framer-motion/client";
import { useState } from "react"


const Login = () => {

  const [currentState, setCurrentState] = useState('ثبت نام');
  const onSubmitHandler = async (event)=>{
    event.preventDefault();

  }

  return (
    <div className="bg-customGray">
    <form onSubmit={onSubmitHandler} className="bg-customGray flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl ">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800"/>

      </div>
      {currentState === 'ورود' ? '' : <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="نام " required/>}
      <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="ایمیل" required/>
      <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="رمز عبور" required/>
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">رمز عبور را فراموش کرده اید؟</p>
        {
          currentState === 'ورود' 
          ? <p onClick={()=>setCurrentState('ثبت نام')} className="cursor-pointer">ایجاد حساب کاربری</p> 
          : <p onClick={()=>setCurrentState('ورود')} className="cursor-pointer">  ورود به حساب کاربری</p>
        }

      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4 mb-4">{currentState === 'ورود' ? ' وارد شوید' : 'ثبت'}</button>
    </form>
    </div>
  )
}

export default Login;
