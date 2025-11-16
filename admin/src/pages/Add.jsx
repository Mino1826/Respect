import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'


const Add = ({token}) => {


  const [image1,setImage1]= useState(false)
  const [image2,setImage2]= useState(false)
  const [image3,setImage3]= useState(false)
  const [image4,setImage4]= useState(false)

  const[name,setName] = useState("")
  const[description,setDescription] = useState("")
  const[price,setPrice] = useState("")
  const[category,setCategory] = useState("")
  const[subCategory,setSubCategory] = useState("")
  const [bestseller,setBestseller] = useState(false)
  const [length, setLength] = useState("")
  const [width, setWidth]   = useState("")
  const [height, setHeight] = useState("")

  const onSubmitHandler = async (e)=> {
    e.preventDefault();

    try {
      const formData= new FormData()

      formData.append('name',name)
      formData.append('description',description)
      formData.append('price',price)
      formData.append('category',category)
      formData.append('subCategory',subCategory)
      formData.append('bestseller',bestseller)
      formData.append('length',length)
      formData.append('width',width)
      formData.append('height',height)

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)


      const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}});
      

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        setLength('')
        setWidth('')
        setHeight('')
      }else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }




  return (
    <div>
        <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
          <div>
            <p className='mb-2'>افزودن عکس</p>
            <div className='flex gap-2'>
              <label htmlFor="image1">
                <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
                <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden/>
              </label>
              <label htmlFor="image2">
                <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
                <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden/>
              </label>
              <label htmlFor="image3">
                <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
                <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden/>
              </label>
              <label htmlFor="image4">
                <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
                <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden/>
              </label>
            </div>
          </div>

          <div className='w-full'>
            <p className='mb-2'>نام محصول</p>
            <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='وارد کنید' required/>
          </div>

          <div className='w-full'>
            <p className='mb-2'>توضیحات محصول</p>
            <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='وارد کنید' required/>
          </div>
          <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
            <div>
              <p className='mb-2'>دسته بندی</p>
              <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2'>
                <option value="شمع">شمع</option>
                <option value="ظروف سنگی">ظروف سنگی</option>
                <option value="پک هدیه">پک هدیه</option>
                <option value="هفت سین">هفت سین</option>
                <option value="ست">ست</option>
              </select>
            </div>
            <div>
              <p className='mb-2'>زیر دسته</p>
              <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2'>
                <option value="قلمی">قلمی</option>
                <option value="شات شمع">شات شمع </option>
                <option value="گلدان">گلدان </option>
                <option value="جاشمعی">جاشمعی </option>
                
              </select>
            </div>

            <div>
              <p className='mb-2'>قیمت</p>
              <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='قیمت را وارد کنید'/>
            </div>
          </div>

          <div>
            <p>مشخصات محصول</p>
            <div className='flex gap-3'>
              <div>
                <input onChange={(e)=>setLength(e.target.value)}
                value={length}  className='w-full px-3 py-2 sm:w-[120px]' type='number' placeholder='طول'/>
              </div>

              <div>
                <input onChange={(e)=>setWidth(e.target.value)}
                value={width} className='w-full px-3 py-2 sm:w-[120px]' type='number' placeholder='عرض'/>
              </div>

              <div>
                <input onChange={(e)=>setHeight(e.target.value)}
                value={height} className='w-full px-3 py-2 sm:w-[120px]' type='number' placeholder='ارتفاع'/>
              </div>
            </div>
          </div>
          <div className='flex gap-2 mt-2'>
            <input onChange={()=>setBestseller(prev =>!prev)} checked={bestseller} type="checkbox" id='bestseller' />
            <label className='cursor-pointer' htmlFor="bestseller">افزودن به پرفروش ترین ها</label>
          </div>
          <button className='w-28 py-3 mt-4 bg-black text-white' type='submit'>افزودن</button>
        </form>
    </div>
  )
}

export default Add