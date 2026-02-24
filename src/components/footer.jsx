import React from 'react'

const Footer = () => {
  return (
    <>

      <footer className="footer-wrapper py-5 mt-5">
        <div className="container">
          <div className="row gy-4 gx-4">

            <div className="col-12 col-sm-6 col-lg-3">
              <img src="/Leadcrm-Logo.svg" className='mb-4' alt="" />
              <p className="footer-tagline mb-4">
                LeadCRM is LinkedIn integration tool for your CRM
              </p>
              <div className="d-flex gap-2 flex-wrap">
                <div className='social-btn'>
                  <img src="/facebook.svg" alt="" />
                </div>
                <div className='social-btn'>
                  <img src="/twitter.svg" alt="" />
                </div>
                <div className='social-btn'>
                  <img src="/linkedin.svg" alt="" />
                </div>
                <div className='social-btn'>
                  <img src="/instagram.svg" alt="" />
                </div>

              </div>
            </div>

            <div className="col-6 col-sm-3 col-lg-2">
              <div className="footer-col-title">Integrations</div>
              <a href="#" className="footer-link">HubSpot</a>
              <a href="#" className="footer-link">Salesforce</a>
              <a href="#" className="footer-link">Pipedrive</a>
              <a href="#" className="footer-link">
                Clover <span className="coming-soon-badge">Soon</span>
              </a>
              <a href="#" className="footer-link">
                Insightly <span className="coming-soon-badge">Soon</span>
              </a>
            </div>

            <div className="col-6 col-sm-3 col-lg-2">
              <div className="footer-col-title">Alternative</div>
              <a href="#" className="footer-link">Suite VS LeadCRM</a>
              <a href="#" className="footer-link">Linkmatch Alternative</a>
            </div>

            <div className="col-6 col-sm-3 col-lg-2">
              <div className="footer-col-title">Legal</div>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Use</a>
            </div>

            <div className="col-6 col-sm-3 col-lg-3">
              <div className="footer-col-title">Contact Us</div>
              <a href="mailto:support@leadcrm.io" className="contact-item">
                <img src="/mail.svg" alt="" />
                support@leadcrm.io
              </a>
              <a href="tel:+12315357455" className="contact-item">
                <img src="/call.svg" alt="" />
                +1 231-535-7455
              </a>
              <a href="#" className="contact-item">
                <img src="/question.svg" alt="" />
                Help Center
              </a>
              <div className="mt-3">
                <a href="#" className="chrome-badge">
                  <img src='/chrome-logo-1.svg' />
                  Available in Chrome
                </a>
              </div>
            </div>
          </div>

          <hr className="footer-divider my-4" />

          <div className="gy-2">
            <div className="col-12 text-center mb-3">
              <p className="footer-disclaimer mb-0 text-center">
                Disclaimer: LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.
              </p>
            </div>
            <div className="col-12 text-center pt-3 footer-line">
              <span className="footer-copyright text-center">Copyright © 2025 LeadCRM. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer