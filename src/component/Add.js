import React from 'react';
import { AiFillCaretLeft } from "react-icons/ai";


function Add({ handleChange, formInputData, handleSubmit, emptyInput }) {
    return (
        <>
            <div className='bg-[#EFC81A] w-[100%] h-32'></div>

            <form className='bg-[#4F4F4F] text-white text-end items-end p-7  flex flex-row-reverse h-76'>

                <div className='flex flex-col'>

                    <lable className='flex flex-row-reverse items-end '>
                        <div className='text-[#EFC81A] text-2xl '><AiFillCaretLeft />
                        </div>
                        نام فیلم
                    </lable>
                    <input className='m-4 mb-12 bg-[#4F4F4F] border border-x-zinc-400 w-64 h-10 p-2 rounded-md text-end focus:border-[#EFC81A] focus:border-4' type='text' onChange={handleChange} placeholder='نام فیلم را بنویسید' name='name' value={formInputData.name} />

                    <lable className='flex flex-row-reverse items-end '>
                        <div className='text-[#EFC81A] text-2xl '><AiFillCaretLeft />
                        </div>کارگردان
                    </lable>

                    <input className='m-4 bg-[#4F4F4F] border border-x-zinc-400 w-64 h-10 p-2 rounded-md text-end focus:border-[#EFC81A] focus:border-4 focus:bg-[#5B554E]' type='text' onChange={handleChange} placeholder='نام کارگردان را وارد کنید' name='director' value={formInputData.director} />
                </div>

                <div className='mr-7 flex flex-col'>

                    <lable className='flex flex-row-reverse items-end '>
                        <div className='text-[#EFC81A] text-2xl '><AiFillCaretLeft /></div>
                        زانر فیلم
                    </lable>


                    <select className='m-4 mb-12 bg-[#4F4F4F] border border-x-zinc-400 w-64 h-10  rounded-md text-end focus:border-[#EFC81A] focus:border-4' onClick={handleChange} name='genre' value={formInputData.value}>
                        <option value="وحشت/هیجانی">وحشت/هیجانی</option>
                        <option value="درام">درام</option>
                        <option value="اجتماعی">اجتماعی</option>
                        <option value="کمدی">کمدی</option>
                    </select>



                    <lable className='flex flex-row-reverse items-end '>
                        <div className='text-[#EFC81A] text-2xl '><AiFillCaretLeft /></div>
                        سال تولید
                    </lable>
                    <input className='m-4 bg-[#4F4F4F] border border-x-zinc-400 w-64 h-10 p-2 rounded-md text-end focus:border-[#EFC81A] focus:border-4' type='text' onChange={handleChange} placeholder='سال ساخت فیلم را وارد کنید' name='year' value={formInputData.year} />
                </div>

                <div className='mr-7 pt-10 flex flex-col'>

                    <lable className='flex flex-row-reverse items-end '>
                        <div className='text-[#EFC81A] text-2xl '><AiFillCaretLeft /></div>
                        توضیحات</lable>

                    <input className='m-4 bg-[#4F4F4F] border border-x-zinc-400 w-[500px] h-[100px] p-2 rounded-md text-end focus:border-[#EFC81A] focus:border-4' type='text' onChange={handleChange} placeholder='توضیحات درباره فیلم' name='description' value={formInputData.description} />
                    <div className='flex '>
                        <button className='w-36 m-4 h-10 border border-x-zinc-400 rounded-md' onClick={emptyInput}>انصراف</button>
                        <input className='m-4 font-bold bg-[#EFC81A] text-[#4F4F4F] w-36 h-10 rounded-md' type="submit" onClick={handleSubmit} value='ذخیره' />
                    </div>
                </div>





            </form>
        </>
    );
}

export default Add;