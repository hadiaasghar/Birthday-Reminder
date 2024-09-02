import React, { useState } from 'react'
import Singlebirthday from './Singlebirthday'
import {data} from "./Data"
const Birthday = () => {
    const [dataa,setDataa]=useState(data);
    const removePerson = (id) => {
        const newPeople = dataa.filter ((item,index)=>{

            return item.id !== id;

                
            
        });
        setDataa(newPeople)


    };
    
    
  return (
    <>
    <div className='container-fluid bg-info d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
        <div className='container'>
            <div className='col-lg-5 mx-auto p-5 card shadow'>
                <h1 className='font-bold text-3xl text-center mb-2'>{dataa.length} birthdays today</h1>
                {dataa.map((item,index)=>{
                    return(

                        <>
                         <Singlebirthday key={item.id}{...item} remove={removePerson}/>
                        
                        </>
                    )
                }
                
                
                )}
               
                
                <button onClick={dataa.length >0 ?() => setDataa ([]):() => setDataa (data)}  className={`text-white p-2 ${dataa.length> 0 ?'bg-red-600':'bg-green-600'} rounded my-2`}>{dataa.length> 0 ? 'Remove All':'Refresh All' }</button>

            </div>


        </div>
      
    </div>
    </>
  )
}

export default Birthday
