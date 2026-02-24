import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Herosection() {
    return (
        <div className="herobgimg">
        <div className="container d-flex align-items-center justify-content-center gap-3 flex-column">

            <div className="mt-5 mb-4">

                <button type="button" className="btn btn-outline d-flex align-items-center justify-content-center gap-2 ">
                    <img src="/heroimg.svg" alt="hero img" className="heroimg" />
                    Thousands of Professional using LeadCRM
                </button>
            </div>
            <div className="text-center mb-2">

                <h1>LinkedIn CRM Integration <br />
                    Capture, Sync and Enrich in <span className="headingcolor position-relative"> Both Ways <img src="/line.png" alt="" className="lineimg" /></span>
                </h1>
            </div>
            <div className="text-center">
                <p>Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on <br />
                    LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.</p>
            </div>
            <div className="card-section mb-3">
                <p className="workswith">Works with</p>
                <img src="/workswith1.svg" alt="" />
                <img src="/workswith2.svg" alt="" />
                <img src="/workswith3.svg" alt="" />
            </div>
            <div className="main-star d-flex gap-5 mb-3">
            <div className="card-star d-flex align-items-center justify-content-center gap-2">
                <div className="chrome-img">

                <img src="/chrome-logo1.svg" alt="" />
                </div>
                <div>
                <img src="/star.svg" alt="" />
                <img src="/star.svg" alt="" />
                <img src="/star.svg" alt="" />
                <img src="/star.svg" alt="" />
                <img src="/star.svg" alt="" />
                </div>
                <div>
                <p className="m-0">5/5</p>
                </div>
            </div>
            <div className="card-star d-flex align-items-center justify-content-center gap-2">
                <div className="chrome-img">

                <img src="/capterra-logo1.svg" alt="" />
                </div>
                <div>
                <img src="/star.svg" alt="" />
                <img src="/star.svg" alt="" />
                <img src="/star.svg" alt="" />
                <img src="/star.svg" alt="" />
                <img src="/star.svg" alt="" />
                </div>
                <div>
                <p className="m-0">5/5</p>
                </div>
            </div>
            </div>
            <div className="trial-btn d-flex gap-3 mb-5">
                 <button type="button" className="btn btn-chrome d-flex align-items-center justify-content-center gap-3">
                    <div>
                      <p className="m-0"> Available in </p>  
                      <span>Chrome Web Store</span>
                      </div>
                       <img src="/chrome-circle.svg" alt="Chrome Logo" className=""/>
                    </button>
         
                <button type="button" className="btn btn-free-trial ">
                    Get a Free Trial Now!
                </button>
            </div>
        </div>
        </div>
    );
}

export default Herosection;