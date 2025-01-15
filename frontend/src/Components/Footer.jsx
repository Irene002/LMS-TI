import { FaFacebook, FaYoutube, FaCircleInfo, FaPhone } from "react-icons/fa6"

const Footer = () => {
  return (
    <>
      <footer className='bg-orange-500 p-8 text-center text-white'>
        <div className='flex justify-center gap-24'>
          <div className='text-start w-[30%]'>
            <h4 className='text-xl mb-4'>Learning Management System</h4>
            <p className='leading-loose'>Comprehensive Learning Management System (LMS) designed to support and streamline the educational experience for both lecturers and students.</p>
          </div>
          <div className='flex flex-row gap-12'>
            <div className="text-start">
              <h4 className='text-xl mb-4'>Contact Us</h4>
              <li className="flex flex-col gap-4">
                <div className='flex flex-row gap-2 items-center'>
                  <FaCircleInfo/>
                  <p>Website</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                  <FaPhone/>
                  <p>081342312642</p>
                </div>
              </li>
            </div>
            <div>
              <h4 className='text-xl mb-4'>Stay in Touch</h4>
              <li className="flex flex-col gap-4">  
                <div className='flex flex-row gap-2 items-center'>
                  <FaFacebook />
                  <p>Facebook</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                  <FaYoutube />
                  <p>YouTube</p>
                </div>
              </li>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <p>&copy; 2021 Politeknik Negeri Nusa Utara</p>
        </div>
      </footer>
    </>
  )
}

export default Footer