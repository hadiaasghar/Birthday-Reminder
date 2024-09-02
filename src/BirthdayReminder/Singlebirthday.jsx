import React from 'react'

const Singlebirthday = ({id,name,image,age,remove}) => {
    
  return (
    <>
    <div className='d-flex justify-content-between  shadow my-1 p-2 '>
        <div className='d-flex gap-3 align-items-center'>
            <img  src={image} className='rounded-full h-16 w-16 border border-info'/>

       
        <div className='d-flex flex-column'>
            <h5 className='font-medium'>{name}</h5>
            <p className='text-info'>{age} years</p>

        </div>
        </div>
       
            <button onClick={()=> remove(id)} className='text-white  align-self-center bg-red-600 p-1 rounded'>Remove</button>

       
    
    </div>
    </>
  )
}

export default Singlebirthday
