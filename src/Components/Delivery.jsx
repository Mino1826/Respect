import Title from "./Title";

const Delivery = () => {
    return (
      <div className="mt-10 p-6 bg-customGray rounded-lg shadow-2xl text-center">
        <Title text1={'مدت زمان و'} text2={'نحوه ارسال'}/>
       
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700">نحوه‌ی ارسال</h3>
          <p className="text-gray-500 mt-2">
            محصولات شما از طریق پست پیشتاز و یا پست ارسال خواهند شد. 
            با توجه به نوع محصول و انتخاب شما، ما بهترین روش ارسال را ارائه می‌دهیم.
          </p>
        </div>
        <hr className="border-gray-400 mt-4"/>
  
        <div className="mt-6"> 
          <h3 className="text-xl font-semibold text-gray-700">مدت زمان تحویل</h3>
          <p className="text-gray-500 mt-2">
            - پست پیشتاز: ۱ تا ۳ روز کاری <br />
            - پست: ۶ تا ۸ روز کاری <br />
            زمان‌های فوق به شرایط و آدرس شما بستگی دارد. در صورت بروز هرگونه تأخیر، ما شما را مطلع خواهیم کرد.
          </p>
        </div>
        <hr className="border-gray-400 mt-4 "/>
  
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700">توجه:</h3>
          <p className="text-gray-500 mt-2">
            در صورت داشتن هرگونه سوال یا نیاز به اطلاعات بیشتر، 
            لطفاً با ما تماس بگیرید تا به شما کمک کنیم.
          </p>
        </div>
      </div>
    );
  }
  
  export default Delivery;