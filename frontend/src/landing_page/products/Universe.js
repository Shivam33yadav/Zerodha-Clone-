import React from 'react';

function Universe() {
    return ( 
         <div className="container mt-5">
      <div className="row text-center">
       <h1>The Zerodha Universe </h1>
       <p>Extend your trading and investment experience even further with our partner platforms</p>
       
         

        <div className="col-4 p-3 mt-5">
          <img src="smallcase.png" className="img-fluid w"/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="streak.png" className="img-fluid w" />
          <p className="text-small text-muted">Algo and strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="sensibull.svg" className="img-fluid w" />
          <p className="text-small text-muted">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="uicko.svg"className="img-fluid w" />
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 ">
          <img src="golden.jpeg" className="img-fluid w"/>
          <p className="text-small text-muted ">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-2">
          <img src="ditto.jpg"className="img-fluid w" />
          <p className="text-small text-muted">insurance</p>
        </div>
  <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin: "0 auto"}}>Signup Now</button>

      </div>
    </div>
     );
}

export default Universe;