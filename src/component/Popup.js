import React from 'react';
import Popup from 'reactjs-popup';

function PopupDes({ description }) {
   return (
      <div >

         <Popup trigger={<button className='border border-blue-700 p-2 rounded-lg' > توضیحات </button>} >

            <div className='bg-[#D9D9D9]  w-[60%] h-[50%] flex flex-col justify-center items-center fixed top-[20%] left-[20%] rounded-lg'>
               
               <h2 className='text-end w-[80%] font-bold'>توضیحات</h2>
               <div className='m-2 p-2  border text-end w-[80%] h-[75%] border-black rounded-lg'>{description}</div>
               
            </div>
         </Popup>
      </div>);
}

export default PopupDes;

