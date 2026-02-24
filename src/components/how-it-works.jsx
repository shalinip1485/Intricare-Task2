import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const HowItWorks = () => {
    return (
        <div className='howItWorksSection py-5'>
            <div className="container">
                <h2 className='howItWorksTitlte'>How It Works</h2>
                <p>From setup to success in <span className='fw-medium'>4 simple steps</span></p>
                <div className="row mt-5" style={{ position: 'relative', zIndex: 0 }}>
                    <img
                        src="/howitworksarrow-1.svg"
                        alt=""
                        className="how-it-works-arrow"
                        style={{ position: 'absolute', top: '35%', left: '16%', width: '18%', zIndex: -1 }}
                    />
                    <img
                        src="/HowItWorks-Arrow-2.svg"
                        alt=""
                        className="how-it-works-arrow"
                        style={{ position: 'absolute', top: '35%', left: '41%', width: '18%', zIndex: -1 }}
                    />
                    <img
                        src="/HowItWorks-Arrow-3.svg"
                        alt=""
                        className="how-it-works-arrow"
                        style={{ position: 'absolute', top: '35%', left: '66%', width: '18%', zIndex: -1 }}
                    />

                    <div className="col-md-3">
                        <div className="card py-3 border-0 rounded-4 p-3 h-100" style={{ position: 'relative', zIndex: 1 }}>
                            <h1 className='tertiary-font tertiary-font-heading text-center'>1</h1>
                            <h3 className='howItWorksTitlte-cardtitle text-center'>Install the Extension</h3>
                            <p className='text-secondary text-center'>Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.</p>
                            <img src="/howitworks1.png" className="mt-auto" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card py-3 border-0 rounded-4 p-3 h-100" style={{ position: 'relative', zIndex: 1 }}>
                            <h1 className='tertiary-font tertiary-font-heading text-center'>2</h1>
                            <h3 className='howItWorksTitlte-cardtitle text-center'>Browse LinkedIn</h3>
                            <p className='text-secondary text-center'>Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.</p>
                            <img src="/HowItWorks2.png" className="mt-auto" alt="" />
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="card py-3 border-0 rounded-4 p-3 h-100" style={{ position: 'relative', zIndex: 1 }}>
                            <h1 className='tertiary-font tertiary-font-heading text-center'>3</h1>
                            <h3 className='howItWorksTitlte-cardtitle text-center'>Get Enriched Data</h3>
                            <p className='text-secondary text-center'>Enrich profiles with verified emails, phones, and company data with.</p>
                            <img src="/HowItWorks3.png" className="mt-auto" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card py-3 border-0 rounded-4 p-3 h-100" style={{ position: 'relative', zIndex: 1 }}>
                            <h1 className='tertiary-font tertiary-font-heading text-center'>4</h1>
                            <h3 className='howItWorksTitlte-cardtitle text-center'>Sync to CRM Instantly</h3>
                            <p className='text-secondary text-center'>Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.</p>
                            <img src="/HowItWorks4.png" className="mt-auto" alt="" />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <button className='fluoroscent-button px-5'>Try LeadCRM Now <FaArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks