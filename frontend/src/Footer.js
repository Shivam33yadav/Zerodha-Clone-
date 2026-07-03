import React from 'react';

function Footer() {
    return ( 
    <footer style={{backgroundColor:"rgb(240, 240, 240)"}}>  
     <div className='container border-top at-5'>
        <div className='row mt-5'>
            <div className='col '>
                <img src="Navbar.png"style={{width:"70%" }} />
                <p>
                    © 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved
                </p>
                
                
            </div>
            
             <div className=' col-5'>
             <p>Company</p>
              <a href="">About</a>
               <br />
               <a href="">Products</a> 
                <br />
               <a href="">Pricing</a>
                <br />
               <a href="">Referral programme</a>
                <br />
               <a href="">Careers</a> 
                <br />
               <a href="">Zerodha. tech</a>
                <br />
               <a href="">Press & media</a>
                <br />
               <a href="">Zerodha cares (CSR)</a>
                <br />
             </div>
              <div className='col'></div>
              <p>Support</p>
               <a href="">Contact</a>
               <br />
               <a href="">Support Portal</a> 
                <br />
               <a href="">Z-Connect blog</a>
                <br />
               <a href="">List of charges</a>
                <br />
               <a href="">Downloads & Resources</a> 
                <br />
              
               <div className='col'>
                <br />
              <p>Account</p>
              <a href="">Open an account</a>
              <br />
              <a href="">Fund transfer</a>
              <br />
              <a href="">60 day challenge</a>
              <br />
            </div>
        
            <div className="mt- 5 fs-6 text-muted" style={{fontSize:"16px"}}>
                <br></br>
            <p> Zerodha Broking Ltd.: Member of NSE & BSE | SEBI Registration No.: INZ000031633

CDSL: Depository services through Zerodha Securities Pvt. Ltd.
SEBI Registration No.: IN-DP-100-2015

Commodity Trading through Zerodha Commodities Pvt. Ltd.
MCX: 46025

Registered Address:
Zerodha Broking Ltd.
#153/154, 4th Cross,
Dollars Colony,
Opp. Clarence Public School,
J.P. Nagar 4th Phase,
Bengaluru – 560078,
Karnataka, India.

For any complaints pertaining to securities broking please write to:
complaints@zerodha.com

For DP-related complaints:
dp@zerodha.com

Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.</p>


<p>Procedure to file a complaint on SEBI SCORES:
Register on the SCORES portal.

Details for filing complaints on SCORES:
Name, PAN, Address, Mobile Number, Email ID.

Benefits:
Effective communication and speedy redressal of grievances.</p>

<p>Investments in securities market are subject to market risks.
Read all the related documents carefully before investing.</p>

<p>"Prevent unauthorised transactions in your account.
Update your mobile number/email ID with your stock brokers.
Receive information of your transactions directly from the Exchange on your mobile/email at the end of the day."
            </p>
           </div> 
        </div>
     </div>
     </footer>  
     );
}

export default Footer;