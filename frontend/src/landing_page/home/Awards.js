import React from 'react';

function Awards() {
    return ( 
       <div className='container p-5 mb-5'>
        <div className='row'>
            <div className='col-6'>
               <img src='Awards.png'style={{ width: "110%"}}/> 
            </div>
             <div className='col-6'>
                 <h1 className='fs-2 text-nowrap'>largest stock broker in India</h1>
                <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className='row'>
                    <div className='col-6'>

                    
                <ul>
                    <li>
                       <p className='fs-2 text-nowrap'>Future and Options</p>
                    </li>
                      <li>
                       <p>Commodity derivatives</p>
                    </li>
                      <li>
                       <p>Currency derivatives</p>
                    </li>
                      
                </ul>
             </div>
             <div className='col-6'>
                 <ul>
                    <li>
                       <p>Stocks and IPOs</p>
                    </li>
                      <li>
                       <p>Direct mutual funds </p>
                    </li>
                      <li>
                       <p>Bonds and Govt. Securities</p>
                    </li>
                      
                </ul>
             </div>
          </div>
        </div>
       </div>
       </div>
     );
}

export default Awards;