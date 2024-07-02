import React, { useState } from 'react'

const Product = () => {

const [count , setCount] = useState(0);

//  const[total , settotal] = useState("");



function add(){

  setCount(count + 1);

}

function sub(){

  setCount(count -1);
}



  return (

    <div>
        <div className=" flex py-2 text-center flex-row  items-center">
          
        <div className="w-100 inline-flex  items-center">
          <img className="w-14 ml-2 h-14 rounded-t-lg"  src="./public/bag.jpeg" alt="belt" />
          <h1 className='ml-16'>Leather Bag</h1>
        </div>

        <div className="w-65 "  ><h1>₦100</h1></div>
        
        <div className="w-65  justify-center ">

          <div  className='inline-flex rounded-lg bg-slate-200 '>

          <button onClick={sub} className='inline-block px-2 '>-</button>
          <h1  className='inline-block px-5'>{count}</h1>
          <button onClick={add}  className='inline-block px-2'>+</button>

          </div>

        </div>
        
        <div className="w-65">Total <button className="ml-9 border rounded-xl px-2 float-right mr-2  bg-slate-200 ">x</button>  </div>


      </div>

    </div>
  )

}

export default Product