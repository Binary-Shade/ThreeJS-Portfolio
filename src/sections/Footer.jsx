import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="c-space pt-7 pb-3 border-t text-white border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href='https://github.com/Binary-Shade' className='social-icon'>

          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          
        </div>
        <div className="social-icon">
          <a href='https://www.instagram.com/mr_darkxy/' className='social-icon'>
          <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href='https://www.linkedin.com/in/sureshk0204' className='social-icon'>
          <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© {year} binary-shade . All rights reserved.</p>
    </footer>
  )
}

export default Footer
