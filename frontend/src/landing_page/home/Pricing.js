import React from 'react';

function Pricing() {
    return ( 
        <div className='containe mb-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='fs-2 text-nowrap'>Unbeatable pricing</h1>
                    <p className='fs-6 text-nowrap'>We pioneered the concept of discount broking and price transparency in India.<br></br> Flat fees and no hidden charges.</p>
            <a href='' style={{textDecoration:"none"}}>See Pricing</a>
                </div>
                <div className='col-5'></div>
                <div className='col-1'></div>
                      <div className='row text-center'>
                  
                      <div className='col-5 p-2 border'>
                        <h1 className='mb-3'>₹0</h1>
                        <p>Free equity delivery and<br></br>direct mutual funds </p>
                      </div>
                        <div className='col-5 p-2 border'>
                        <h1 className='mb-3'>₹20</h1>
                        <p>Intraday and F&O</p>
                        
                      </div>
                    
                       
                  </div>
            </div>
        </div>
     );
}

export default Pricing;