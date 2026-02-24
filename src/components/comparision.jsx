import React from 'react'

const Comparision = () => {
  return (
    <div className='container mt-5 pb-5'>
      <h1 className='fs-2 font-bold text-center my-8'>Every LinkedIn Prospector faces these daily challenges</h1>
      <div className="row mt-5 position-relative">
        <div className="col-lg-6 col-md-12 px-4">
          <div className='comparission-left p-4 rounded-4 overflow-hidden'>
            <img src="/comparission-left-img.png" alt="Challenges" className='img-fluid' />
            <h3 className='text-start mt-4 comparission-title'>Without LeadCRM</h3>
            <ul className='comparission-list ps-0'>
              <li className='list-unstyled mt-4 d-flex gap-4 align-items-center'>
                <img src="/cross-icon.svg" alt="cross-icon" />
                <span>
                  <div className='d-flex align-items-center'>
                    <h3 className='fs-5 mb-0'>Manual Data Entry</h3>
                    <p className='danger-pill mb-0 ms-2'>3+ Hours wasted daily</p>
                  </div>
                  <p className='text-secondary mt-1 mb-0'> Copying LinkedIn contacts to CRM manually plus losing conversation history</p>
                </span>
              </li>
              <li className='list-unstyled mt-4 d-flex gap-4 align-items-center'>
                <img src="/cross-icon.svg" alt="cross-icon" />
                <span>
                  <div className='d-flex align-items-center'>
                    <h3 className='fs-5 mb-0'>Incomplete Data</h3>
                    <p className='danger-pill mb-0 ms-2'>60% Data Incomplete</p>
                  </div>
                  <p className='text-secondary mt-1 mb-0'>LinkedIn profiles missing Email and Phones from 700M+ Database</p>
                </span>
              </li>
              <li className='list-unstyled mt-4 d-flex gap-4 align-items-center'>
                <img src="/cross-icon.svg" alt="cross-icon" />
                <span>
                  <div className='d-flex align-items-center'>
                    <h3 className='fs-5 mb-0'>No CRM Visibility</h3>
                    <p className='danger-pill mb-0 ms-2'>Zero context available</p>
                  </div>
                  <p className='text-secondary mt-1 mb-0'>Can’t see existing CRM contacts when browsing LinkedIn profiles</p>
                </span>
              </li>
              <li className='list-unstyled mt-4 d-flex gap-4 align-items-center'>
                <img src="/cross-icon.svg" alt="cross-icon" />
                <span>
                  <div className='d-flex align-items-center'>
                    <h3 className='fs-5 mb-0'>Limited Productivity</h3>
                    <p className='danger-pill mb-0 ms-2'>No smart assistance</p>
                  </div>
                  <p className='text-secondary mt-1 mb-0'>Writing messages manually plus no AI assistant for reply, Invite or comments.</p>
                </span>
              </li>

            </ul>
          </div>
        </div>

        <div className="d-none d-md-flex separator-container">
          <div className="separator-line"></div>
          <span className="vs-text">vs</span>
        </div>
        <div className="col-lg-6 col-md-12 px-4">
          <div className='comparission-right p-4 rounded-4 overflow-hidden'>
            <img src="/comparission-right-img.png" alt="Challenges" className='w-100' />
            <h3 className='text-start mt-4 comparission-title-success d-flex gap-3 align-items-center'>Without LeadCRM <img src="/comparission-success.png" alt="" /> <p className='success-pill mb-0'>4+ Hours/day Saved</p> </h3>
            <ul className='comparission-list ps-0'>
              <li className='list-unstyled mt-4 d-flex gap-4 align-items-center'>
                <img src="/comparission-1.png" className='w-42' alt="cross-icon" />
                <span>
                  <div className='d-flex align-items-center'>
                    <h3 className='fs-5 mb-0'>Complete Bi-Directional Sync</h3>
                  </div>
                  <p className='text-secondary mt-1 mb-0'>Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.</p>
                </span>
              </li>
              <li className='list-unstyled mt-4 d-flex gap-4 align-items-center'>
                <img src="/comparission-1.png" className='w-42' alt="cross-icon" />
                <span>
                  <div className='d-flex align-items-center'>
                    <h3 className='fs-5 mb-0'>700M+ Contacts + Enrichment</h3>
                  </div>
                  <p className='text-secondary mt-1 mb-0'>Get verified emails and phone numbers from a vast global database.</p>
                </span>
              </li>
              <li className='list-unstyled mt-4 d-flex gap-4 align-items-center'>
                <img src="/markqueue5.png" className='w-42' alt="cross-icon" />
                <span>
                  <div className='d-flex align-items-center'>
                    <h3 className='fs-5 mb-0'>CRM Overlay on LinkedIn</h3>
                  </div>
                  <p className='text-secondary mt-1 mb-0'>See full CRM insights directly on LinkedIn profiles without switching tabs.</p>
                </span>
              </li>
              <li className='list-unstyled mt-4 d-flex gap-4 align-items-center'>
                <img src="/markqueue4.png" className='w-42' alt="cross-icon" />
                <span>
                  <div className='d-flex align-items-center'>
                    <h3 className='fs-5 mb-0'>AI Response + Templates + Bulk Exports</h3>
                  </div>
                  <p className='text-secondary mt-1 mb-0'>Save time with AI-crafted replies, pre-built templates, and one-click data exports.</p>
                </span>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div className="button-container position-relative d-flex justify-content-center mt-5 pt-5">
        <button className='fluoroscent-button px-5'>Start Using LeadCRM Now</button>
        <img src="/arrow.png" alt="" className="arrow-absolute" />
        <p className="save-text-absolute">Save 40+ hours <br /> every Month</p>
      </div>
    </div>
  )
}

export default Comparision