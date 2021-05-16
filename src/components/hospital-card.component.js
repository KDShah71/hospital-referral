import React from "react";
import { useHistory } from "react-router-dom";
import CheckIcu from "./check-icu.component";

function HospitalCard({
  name = "Title",
  address = "Address",
  hospital_type = "Gov",
  to = "/",
  images = "",
  data = {},
  icu = {},
  phone = 981,
}) {
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: `/hospital/${to}`,
    });
  };

  return (
    <div className="col" onClick={() => handleClick()}>
      <div
        className=" card shadow-sm  border bg-light "
        style={{
          cursor: "pointer",
        }}
      >
        <img
          src={images}
          className="card-img-top"
          alt="hospital"
          height={160}
        />
        <div className="p-3">
          <div
            className="card-title d-flex align-items-center"
            style={{
              height: "60px",
            }}
          >
            <h6 className=" m-0"> {name} </h6>
          </div>

          <div className=" mb-2 d-flex justify-content-end ">
            {icu.available !== 0 ? (
              <CheckIcu icu={icu} state={true} />
            ) : (
              <CheckIcu icu={icu} state={false} />
            )}
          </div>

          <div className="card-text mt-4 mb-4">
            <p className="m-0 text-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-telephone text-black-50 me-2"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              <span className=" p-14"> {phone}</span>
            </p>
            <p className="mt-2 text-muted"> {address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalCard;
