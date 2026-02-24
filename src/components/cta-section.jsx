import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const CTASections = () => {
  return (
    <div className='howItWorksSection py-5'>
            <div className="container">
                <h2 className='howItWorksTitlte'>Join Thousands of Professionals Using LeadCRM</h2>
                <img src="/CTASection.svg" className='mt-5 w-100' alt="" />
                
                <div className="d-flex justify-content-center mt-5">
                    <button className='fluoroscent-button px-5'>Get Started Today <FaArrowRight /></button>
                </div>
            </div>
        </div>
  )
}

export default CTASections