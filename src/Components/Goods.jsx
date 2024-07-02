import React, { useState } from 'react'
import g1 from './Images/bag.jpeg';
import g2 from './Images/belt.jpeg';
import g3 from './Images/Head Warmer.jpeg';
import g4 from './Images/Huddy.jpeg';
import g5 from './Images/Ring.jpeg';
import g6 from './Images/Shoe.jpeg';
 import g7 from './Images/Stylish Sunshade.jpeg';
 import g8 from './Images/T-Shirt.jpeg';
import g9 from './Images/Umbrella.jpeg';
import g10 from './Images/Water Bottle.jpeg';



const Goods = () => {

    const [count , setCount] = useState(0);

    const[products , setProducts] = useState([

        { id: 1, image: g1 , name: 'Leather Bag', price: 1000 , count:0 },
        { id: 2, image: g2 , name: 'Belt', price: 500, count:0 },
        { id: 3, image: g3 , name: 'Head Warmer', price: 200, count:0 },
        { id: 4, image: g4 , name: 'Huddy', price: 500 , count:0 },
        { id: 5, image: g5 , name: 'Ring', price: 100, count:0 },
        { id: 6, image: g6 , name: 'Shoe', price: 1000, count:0 },
        { id: 7, image: g7 , name: 'Stylish Sunshade', price: 1000, count:0  },
        { id: 8, image: g8 , name: 'Round Neck', price: 500, count:0  },
        { id: 9, image:g9 , name: 'Umbrella', price: 600, count:0  },
        { id: 10, image: g10 , name: 'Water Bottle', price: 800, count:0  },


    ]);

    const [coupon, setCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
  
    const add = (id) => {

        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, count: product.count + 1 } : product
          )
        );
      };
    
      const sub = (id) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id ? { ...product, count: product.count - 1 } : product
          )
        );
      };

      const remove = (id) => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      };
    

      const handleCouponChange = (e) => {
        setCoupon(e.target.value);
      };
    
      const applyCoupon = () => {
        if (coupon === 'Free') {
          setDiscount(0.1); // 10% discount
        } else {
          setDiscount(0);
        }
      };
    
      const calculateSubtotal = () => {
        return products.reduce((total, product) => total + product.price * product.count, 0);
      };
    
      const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return subtotal - subtotal * discount;
      };

  return (

 <>
 
 <div className='inline-flex flex-col' >
    {products.map((product) => (
        
      <div key={product.id}>
            <div className=" flex py-2 text-center flex-row  items-center">

                    <div className="w-75 inline-flex  items-center">

                 <img  className="w-14 ml-2 h-14 rounded-t-lg" src={product.image} alt={product.name} />
                 <h2  className='ml-16' >{product.name}</h2>

                </div>

                <div className="w-65 "  ><p> ₦{product.price}</p> </div>

                <div className="w-65  justify-center ">

                    <div  className='inline-flex rounded-lg bg-slate-200 '>

                    <button onClick={() => sub(product.id)} className='inline-block px-2 '>-</button>
                    <h1  className='inline-block px-5'>{product.count}</h1>
                    <button onClick={() => add(product.id)} className='inline-block px-2'>+</button>

                    </div>

                </div>

                <div className="w-65">₦{product.price * product.count} <button onClick={() => remove(product.id)} className="ml-9 border rounded-xl px-2 float-right mr-2  bg-slate-200 ">x</button>  </div>


            </div>

      </div>

    ))}
  </div>

  <div className='inline-block  p-2 mt-2 bg-slate-700 text-slate-200 rounded-md float-right mr-4'>
        <h2>Checkout</h2>
        <p>Subtotal: ₦{calculateSubtotal()}</p>
        <h1>coupon code: Free </h1>
        <input 
        className=' border-none rounded-md focus:outline-none text-black my-2 pl-2'
          type="text" 
          value={coupon} 
          onChange={handleCouponChange} 
          placeholder="Input coupon code"
        />
        <button className='rounded-md ml-2 bg-slate-400 text-slate-100  px-2' onClick={applyCoupon}>Apply Coupon</button>
        {discount > 0 && <p>Discount: 10%</p>}
        <h1>Total: ₦{calculateTotal()}</h1>
      </div>

 
 
 </>

  );
}

export default Goods