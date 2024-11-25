import { useState } from "react";
import { useTranslation } from 'react-i18next'; 

const Login = () => {
  const { t } = useTranslation(); 
  const [currentState, setCurrentState] = useState(t('register')); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const login = async (email, password) => {
    console.log("login function executed", formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) =>
       response.json(),
       response.setHeader("Access-Control-Allow-Origin", "*")
      ).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
      console.log("User created successfully");
    }else {
      alert(responseData.error);
    }
  }

  const signup = async () => {
    console.log("signup function executed", formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json(),
    response.setHeader("Access-Control-Allow-Origin", "*")
  ).then((data) => responseData = data);

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
      console.log("User created successfully");
    }else {
      alert(responseData.error);
    }
  }

  const onSubmitHandler = (event) => {
    // event.preventDefault();
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  return (
    <div className="bg-customGray">
      <form className="bg-customGray flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 text-gray-800">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === t('login') ? '' : (
          <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder={t('name_placeholder')} required name="name" value={formData.name} onChange={onSubmitHandler}/>
        )}
        <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder={t('email_placeholder')} required name="email" value={formData.email} onChange={onSubmitHandler}/>
        <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder={t('password_placeholder')} required name="password" value={formData.password} onChange={onSubmitHandler}/>
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">{t('forgot_password')}</p>
          {currentState === t('login') ? (
            <p onClick={() => setCurrentState(t('register'))} className="cursor-pointer">{t('create_account')}</p>
          ) : (
            <p onClick={() => setCurrentState(t('login'))} className="cursor-pointer">{t('login_to_account')}</p>
          )}
        </div>
        {/* <div className="flex py-2">
          <input type="checkbox" className="flex-0 mr-2" required />
          <p className="flex-1 text-sm">{t('agree_terms')}</p>
        </div> */}
        <button className="bg-black text-white font-light px-8 py-2 mt-4 mb-4" onClick={() => currentState===t('login') ? login() : signup()}>{currentState === t('login') ? t('login_button') : t('register_button')}</button>
      </form>
    </div>
  );
};

export default Login;