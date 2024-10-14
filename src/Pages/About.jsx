import Title from '../Components/Title';

import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const About = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-customGray flex flex-col items-center ">
      <img src={assets.about}  className="flex w-[80%] h-[550px] "/>
      <div className="text-2xl text-center pt-8 border-t border-gray-300">

        <Title text1={'درباره'} text2={'ما'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-16 '>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700 '>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className='bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg'
          >
            ما   با عشق و دقت به خلق محصولات دست‌ساز منحصر به فرد می‌پردازیم. از همان ابتدای کار، هدف ما ایجاد حس آرامش و زیبایی در خانه‌های شما بوده است. هر محصولی که توسط ما ساخته می‌شود، با توجه به جزئیات و با استفاده از بهترین مواد اولیه تولید می‌گردد.
          </motion.p>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className='bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg'
          >
            تیم ما از افرادی با انگیزه و خلاق تشکیل شده است که هرکدام با عشق و انرژی، سهمی در ساخت محصولاتی دارند که نه تنها زیبایی را به شما هدیه می‌دهند، بلکه زندگی روزمره شما را سرشار از حس خوب و آرامش می‌کنند.
          </motion.p>

          <motion.b
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className='text-gray-800 text-lg px-6 text-center'
          >
            هدف ما
          </motion.b>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className='bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg'
          >
            ما به کیفیت، نوآوری و احترام به محیط زیست اعتقاد داریم و تلاش می‌کنیم تا با استفاده از مواد طبیعی و فرایندهای پایدار، نه تنها محصولی عالی، بلکه تجربه‌ای منحصر به فرد را به شما ارائه دهیم.
          </motion.p>
        </div>
      </div>

      <div className='text-xl py-4 px-6'>
        <Title text1={'چرا'} text2={'ما را انتخاب کنید'}/>
      </div>

      <div className='flex flex-col gap-2 mx-4 md:flex-row text-sm mb-20'>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className='border border-gray-300 rounded-lg p-6 flex flex-col gap-5 bg-white shadow-md transform hover:scale-105 hover:shadow-lg'
        >
          <b>تضمین کیفیت:</b>
          <p className='text-gray-600'>ما هر محصول را با دقت انتخاب و بررسی می‌کنیم تا اطمینان حاصل کنیم که با استانداردهای کیفی بالای ما مطابقت دارد.</p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className='border border-gray-300 rounded-lg p-6 flex flex-col gap-5 bg-white shadow-md transform hover:scale-105 hover:shadow-lg'
        >
          <b>راحتی:</b>
          <p className='text-gray-600'>با رابط کاربری ساده و فرایند سفارش بدون دردسر ما، خرید کردن هیچ‌گاه آسان‌تر نبوده است.</p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className='border border-gray-300 rounded-lg p-6 flex flex-col gap-5 bg-white shadow-md transform hover:scale-105 hover:shadow-lg'
        >
          <b>خدمات مشتری بی‌نظیر:</b>
          <p className='text-gray-600'>تیم حرفه‌ای و اختصاصی ما همواره آماده خدمت‌رسانی به شما است تا اطمینان حاصل کنیم که رضایت شما اولویت اصلی ما است.</p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;