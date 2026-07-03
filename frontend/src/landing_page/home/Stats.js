import React from 'react';

function Stats() {
    return ( 
        <div className='container '>
            <div className='row '>
               <div className='col-6 '>
            
                <h1 className='fs-3 
                mb-3 text-nowrap'>Trust with confidence

            </h1>
                <h2 className='fs-5'>Customer-first always

            </h2>
                <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with Rs.3.5+lakh crores worth of equity investments</p>

                 <h2 className='fs-5'>No spam or gimmicks

            </h2>
                <p className='text-muted'>No gimmicks, spam,"gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like</p>
                
                 <h2 className='fs-5'>The Zerodha Universe
            </h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem.Our investments in 30+ fintech startups offer you tailored services specific to your needs </p>
                
                 <h2 className='fs-5'>Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and kill Switch, we don't just facilitate transactions, but actively help you do better with your money</p>
                

           </div>
           <div className='col-6 ' >
              <img src="/ecosystem.jpg.jpeg"alt="Ecosystem"style={{ width: "150%"}}/>
              <div className='text-center'>
                <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our Products <i className="fa-solid fa-right-long"></i></a>

                <a href='' style={{textDecoration:"none"}}>Try Kite demo <i className="fa-solid fa-right-long"></i></a>
              </div>
          </div>
        </div>
    </div>   
     );
}

export default Stats;    