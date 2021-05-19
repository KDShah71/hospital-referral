import React from "react";

import logo from "../../components/assests/hospital_referral_logo.png";
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

              <div>
                <p>
                  Download our app from
                  <a
                    href="https://play.google.com/store/apps/details?id=com.hcoe.lumbini_hospital"
                    // target="_blank"
                    // rel="noreferrer"
                  >
                    {" "}
                    here
                  </a>
                </p>
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
