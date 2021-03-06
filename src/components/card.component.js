import React from "react";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";

function DetailsCard({ title = "Title", to, data = {} }) {
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: `/${to}`,
      state: { id: data.id },
    });
  };

  return (
    <div
      className="col"
      onClick={() => {
        if (to) {
          handleClick();
        }
        return;
      }}
    >
      <div className="col scale py-3 px-4  card shadow-sm  border bg-white ">
        <h5 className="card-title"> {title} </h5>

        <div className="card-text ">
          {Object.keys(data).map((key, index) => {
            if (key === "id") return null;

            if (key === "updated_at") {
              if (typeof data[key] === "number") return null;

              return (
                <div key={index} className="row d-flex align-items-end py-1">
                  <span className="col-6">updated time</span>
                  <div className="col-6  d-flex justify-content-center ">
                    <div className="d-flex text-muted p-14 flex-column align-items-center">
                      <span>
                        <Moment fromNow>{data[key]}</Moment>
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className="row d-flex align-items-center py-1">
                <span className="col-6   ">{key}</span>
                <div className="col-6  d-flex justify-content-center ">
                  {data[key]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
