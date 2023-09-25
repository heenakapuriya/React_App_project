import React from 'react'
import Navbar from '../../Componants/Navbar'
import Footer from '../../Componants/Footer/Footer'

const Privacy = () => {
    return (
        <>
            <Navbar />
            <div className='container-xxl w-full justify-center '>
                <div className='text-center  lg:px-56 pt-44 pb-72  h-auto bg-gradient-to-r from-amber-50 from-10% via-green-50 via-50% to-purple-50 to-90% grid xs:grid-cols-1 '>
                <div className=' xs:w-full'>
                    <h1 className='text-7xl font-bold '>Privacy Policy</h1>

                    <p className='pt-16 text-center text-lg text-gray-500 '>Your privacy is important to us. It is Harry’s policy to respect your privacy regarding  any information we may collect from you across our website, https:// Harry.com,
                        and other sites we own and operate.</p>
                        </div>
                </div>

                <div className='h-auto w-2/3 md:grid-cols-1 mx-auto shadow-lg bg-white px-20 py-20 mb-32 -mt-44'>
                    <h1 className='text-xl font-semibold'>Effective date: May 25, 2023</h1>
                    <p className='text-lg text-gray-500 font-semibold pt-5'>Harry knows that you care about how your personal information is used and shared, and Harry takes your privacy seriously. Please read the following to learn more about Harry Privacy Policy (“Privacy Policy”). This Privacy Policy also tells you about your rights and choices with respect to your Personal Information, and how you can reach us to update your contact information or get answers to questions you may have about our privacy practices.
                        <br />
                        <br />
                        By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that Harry will collect, use, and share your information in the following ways. Remember that your use of Services is at all times subject to the Terms as set forth at https://harry.com/legal/terms, which incorporate this Privacy Policy. Any terms Harry uses in this Privacy Policy without defining them have the definitions given to them in the Terms.</p>

                    <h1 className='text-4xl font-bold pt-5'>Information Collection</h1>
                    <p className='text-lg text-gray-500 font-semibold pt-5'>You can visit and enjoy our Website without disclosing any Personal Information about yourself. However, for the Service to work properly we will need you to share with us certain Personal Information.
                        <br />
                        <br />
                        For the purposes of this Privacy Policy, “Personal Information” means information that identifies, relates to, describes, is reasonably capable of being associated with, or could be reasonably linked, directly or indirectly, with a particular consumer, device or household. It does not include de-identified or aggregate information, or public information lawfully available from governmental records.</p>

                    <h1 className='text-4xl font-bold mt-10'>Use of Personal Information</h1>
                    <ul className='list-disc text-lg text-gray-500  font-semibold leading-loose pt-5 ps-5'>
                        <li>To provide and maintain the Service;</li>
                        <li>To detect, prevent and address technical issues;</li>
                        <li>To register you as a user and to provide the services you require;</li>
                        <li>To decide whether to offer you a Capchase product or service;</li>
                        <li>To notify you about changes to our Service;</li>
                        <li>To provide customer care and support;</li>
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

export default Privacy
