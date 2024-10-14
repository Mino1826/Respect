const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
      event.preventDefault();
      // Add your form submission logic here
    };
  
    return (
      <div className="bg-customGray  text-center p-6 rounded-lg shadow-md">
        <p className="text-2xl font-bold text-gray-800">هم‌اکنون عضو شوید</p>
        <p className="text-gray-800 mt-3">
        از جدیدترین اخبار، تخفیف‌ها و پیشنهادات ویژه مطلع شوید  
        </p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border overflow-hidden">
          <input 
            className="w-full flex-1 outline-none border-none px-4 py-2 focus:ring-2 focus:ring-black" 
            type="email" 
            placeholder="ایمیل خود را وارد کنید" 
            required 
          />
          <button 
            type="submit" 
            className="bg-black text-white text-sm px-6 py-2 transition duration-300 hover:bg-gray-800">
            اشتراک
          </button>
        </form>
        <p className="text-gray-800">
          ما به حریم خصوصی شما احترام می‌گذاریم و از ایمیل شما فقط برای ارسال اطلاعات مفید استفاده خواهیم کرد.
        </p>
        
      </div>
    );
  }
  
  export default NewsLetterBox;