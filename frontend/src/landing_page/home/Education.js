import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'><br></br>
             <img src="/Education.jpg.png"alt="Ecosystem"style={{ width: "90%"}}/>
                </div>
                <div className='col-6'>
                    <h1 className='fs-4 text-nowrap'>Free and open market education</h1>
                    <p className=' fs-9 text-nowrap'>Varsity, the largest online stock market education <br></br>book in the world covering everything from the<br></br> basics to advanced trading.</p>
        <a href='' style={{textDecoration:"none"}}>Versity</a>
        <p className='mt-3 text-nowrap'>TradingQ&A, the most active trading and <br></br>investment community in India for all your<br></br> market related queries.</p>
        <a href='' style={{textDecoration:"none"}}>TradingQ&A</a>
                </div>
            </div>
        </div>
     );
}

export default Education;