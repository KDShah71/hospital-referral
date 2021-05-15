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
      <div className=" card shadow-sm  border bg-light ">
        <img
          // src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Bp-RwaLbhE1Yop396QUbigHaE7%26pid%3DApi&f=1"
          src={images}
          class="card-img-top"
          alt="hospital"
          height={160}
        />

        <div className="py-3 px-4">
          <div className=" d-flex justify-content-between">
            <div className="card-title ">
              <h5 className=""> {name} </h5>
              <p>{phone}</p>
            </div>
            {icu.available !== 0 ? (
              <CheckIcu icu={icu} state={true} />
            ) : (
              <CheckIcu icu={icu} state={false} />
            )}
          </div>

          <div className="card-text">
            <p className="m-0"> {address}</p>
            <p className="text-black-50">{hospital_type}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalCard;
