import React from "react";

import logo from "../../components/assests/hospital_referral_logo.png";
import QR from "../../components/assests/hrs_mobile_app_qr.jpeg";
import Footer from "../../components/footer.component";

function Home({ children }) {
  return (
    <div className="">
      <div>
        <div className="pt-2 ">
          <div className="container d-flex justify-content-start  ">
            <div className="">
              <a href="/" className="px-3">
                <img src={logo} alt="hospital referral logo" width="110" />
              </a>
            </div>
            <div className="container d-flex align-items-center justify-content-between">
              <div className="d-flex flex-column px-4">
                <h3>Hospital Referral System </h3>
                <span> By Lumbini Hospitals</span>
              </div>

              <div className="d-flex flex-column align-items-center px-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.hcoe.lumbini_hospital"
                  // target="_blank"
                  // rel="noreferrer"
                >
                  <img src={QR} alt="hospital referral logo" width="110" />
                </a>
                <p className="p-12 text-black-50 ">scan to download </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="container-fluid mb-5">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
