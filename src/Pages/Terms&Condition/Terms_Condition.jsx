import React from 'react'
import Navbar from '../../Componants/Navbar'
import Footer from '../../Componants/Footer/Footer'

const Terms_Condition = () => {
  return (
    <>
    <Navbar />
    <div className='container-xxl '>
        <div className='text-center lg:px-56 pt-44 pb-72 w-full h-auto bg-gradient-to-r from-amber-50 from-10% via-green-50 via-50% to-purple-50 to-90%'>
        <div className=' xs:w-full'>
            <h1 className='text-7xl font-bold '>Terms and Conditions</h1>
            <p className='pt-16 text-center px-16 text-lg text-gray-500 '>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            </div>
        </div>

        <div className='h-auto w-2/3 mx-auto shadow-lg bg-white px-20 py-20 mb-32 -mt-44'>
            <h1 className='text-xl font-semibold'>Last updated: September 18, 2022</h1>
            <p className='text-lg text-gray-500 font-semibold pt-5'>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                <br />
                <br />
                By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that Harry will collect, use, and share your information in the following ways. Remember that your use of Services is at all times subject to the Terms as set forth at https://harry.com/legal/terms, which incorporate this Privacy Policy. Any terms Harry uses in this Privacy Policy without defining them have the definitions given to them in the Terms.</p>

            <h1 className='text-4xl font-bold pt-5'>Definitions</h1>
            <p className='text-lg text-gray-500 font-semibold pt-5'>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                

            <h1 className='text-4xl font-bold mt-10'>Purposes of these Terms and Conditions:</h1>
            <ul className='list-disc text-lg text-gray-500  font-semibold leading-loose pt-5 ps-5'>
                <li><b>Affiliate</b> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                <li><b>Country</b> refers to: California, United States</li>
                <li><b>Company</b> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Harry.</li>
                <li><b>Device</b> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><b>Service</b> refers to the Website.</li>
                <li><b>Website</b> refers to Harry, accessible from harry.com</li>
            </ul>

            <h1 className='text-4xl font-bold mt-10'> Contact us</h1>
            <p className='leading-loose text-gray-500 text-lg font-semibold pt-5'>You may contact us at any time via:<br />

                <a href='#' className='hover:text-custom-pink'>Email: support@harry.com</a><br />
                <a href='#' className='hover:text-custom-pink'> harry PTY LTD<br />
                    4270, Brisbane, Australia</a></p>
        </div>
    </div> 
    <Footer />
</>
  )
}

export default Terms_Condition
