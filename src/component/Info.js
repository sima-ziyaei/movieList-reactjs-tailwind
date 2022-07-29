import React from 'react';
import PopupDes from './Popup';
import '../infoStyle.css';
import { AiFillCaretLeft } from "react-icons/ai";



function Info({ film, deleteFilm}) {
   
    

    return (  
        <div className='bg-[#575757]'>
        <h2 className=' text-white  pr-10 pt-8 font-bold flex flex-row-reverse items-end '>
            <div className='text-[#EFC81A] text-2xl '><AiFillCaretLeft /></div>
            لیست فیلم</h2>
        <table className=' text-white w-[100%] pr-10 direct mt-10'>
            <thead>
                <tr className=' border-b-2  border-white text-right'>
                    <th className='p-4' >ردیف</th>
                    <th>نام فیلم</th>
                    <th>کارگردان</th>
                    <th>ژانر فیلم</th>
                    <th>سال ساخت</th>
                    <th>توضیحات</th>
                    <th >حذف</th>

                </tr>
            </thead>
            <tbody>
                {film.map(el=>(  
                      < tr key={el.id}>
                      <td className='p-5'>{el.id}</td>
                    <td>{el.name}</td>
                    <td>{el.director}</td>
                    <td>{el.genre}</td>
                    <td>{el.year}</td>
                    <td><PopupDes description={el.description}/></td>
                    <td><button onClick={()=>deleteFilm(el.id)} className='border border-red-600 p-2 rounded-lg' >حذف</button></td>

                </tr>))
                
                } 
               
              
        </tbody>
        </table >
        </div>
     );
}

export default Info;

