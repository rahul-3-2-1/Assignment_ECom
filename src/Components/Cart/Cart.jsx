import React from 'react';
import Button from '../Button/Button';

import './cart.css';

function Cart(props) {
    const {handleUpdate,allProducts,productsPrice,totalPrice,checkout=false}=props;
  return (
    <div style={checkout?{boxShadow:"none"}:{}} className='cartContainer'>
        {!checkout&&<div className='cdh'>
            <h2>Cart Details</h2>
            <div onClick={()=>props.setCart("")} className='cross'>X</div>
        </div>}
        <div className='cartDiv'>
            <div className='productName'>
                Items
            </div>
            <div className='Qty'>
                Qty

            </div>            
            <div className='amount'>
                Amount

            </div>            

        </div>
        {          
        Object.keys(allProducts).map((obj, i) => {
            return (
                <>
                <div className='cartDiv'>
                <div className='productName'>
                {obj}
                </div>
                <div className='Qty'>
                <Button count={allProducts[obj]} disable={allProducts[obj]==0} price={productsPrice[obj]} name={obj} handleUpdate={handleUpdate} />
                
                </div>            
                <div className='amount'>
                <span style={{fontWeight:"500"}}>Rs</span> &ensp; {productsPrice[obj]*allProducts[obj]}
                </div>            
    
            </div>
            <p className="line"></p>
            </>
            ) 

        })
    
        }
        <div className='sum'>
            <div>Total</div>
            <div>Rs&ensp;{totalPrice}</div>

        </div>
       
    </div>
  )
}

export default Cart