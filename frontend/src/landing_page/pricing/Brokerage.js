import React from 'react';

function Brokerage() {
    return ( 
        <div className="container">
          <div className="row p-5 mt-5  text-center border-top">
        
        
         <div className="col-8 p-4 ">
           <a href="" style={{textDecoration:"none"}}>
            <h3 className="fs-5">
            Brokerage calculator</h3></a> 
            <ul className="text-left">
               <li> Call & Trade and RMS auto-squareoff.</li>
               <li> Digital contract notes will be sent via e-mail</li> 
               <li>Physical copies of contract notes, if required, shall be charged Rs 20 per contract note.</li>
               <li>For NRI account (non-PIS), 0.5% or Rs 100 per executed order for equity(whichever is lower).</li> 
               <li>For NRI account (PIS), 0.5% or Rs 200 per executed order for equity(whichever is lower)</li>
               <li> If the account is in debit balance, any order placed will be charged Rs 40 per executed order instead of Rs 20 per executed orders.</li>
            </ul>
    
         </div>
         <div className="col-4 p-4">
           <a href="" style={{textDecoration:"none"}}> 
            <h3 className=" fs-5 text-nowrap">List of charges</h3></a>
             <ul className="text-left">
               <li> Call & Trade and RMS auto-squareoff.</li>
               <li> Digital contract notes will be sent via e-mail</li> 
               <li>Physical copies of contract notes, if required, shall be charged Rs 20 per contract note.</li>
               <li>For NRI account (non-PIS), 0.5% or Rs 100 per executed order for equity(whichever is lower).</li> 
               <li>For NRI account (PIS), 0.5% or Rs 200 per executed order for equity(whichever is lower)</li>
               <li> If the account is in debit balance, any order placed will be charged Rs 40 per executed order instead of Rs 20 per executed orders.</li>
            </ul>
         </div>
           
        </div>
      </div>
     );
}

export default Brokerage;