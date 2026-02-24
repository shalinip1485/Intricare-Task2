import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Supportsystem = () => {
  return (
    <div className="container py-4">


      <div className="features-header col-12 col-md-8 col-lg-6 mx-auto px-3">
        <h2 className="features-title">Our Supported LeadCRM</h2>
        <p className="features-subtitle">LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don’t want you to miss any revenue opportunity on the internet!</p>
      </div>
      <img src="/support-system.svg" className='w-100' alt="" />
      <div className="d-flex justify-content-center mt-5 mb-5">
        <button className='fluoroscent-button px-5'>Lets Integrate your CRM Now! <FaArrowRight /></button>
      </div>
    </div>
  )
}

export default Supportsystem