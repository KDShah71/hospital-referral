import React from "react";
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
      {/* <Link to={to} style={{ color: "inherit", textDecoration: "inherit" }}> */}
      <div className="col py-3 px-4  card shadow-sm  border bg-light ">
        <h5 className="card-title"> {title} </h5>

        <div className="card-text ">
          {Object.keys(data).map((key, index) => {
            if (key === "id") return null;

            if (key === "updated_at") {
              if (typeof data[key] === "number") return null;

              return (
                <div key={index} className="row d-flex align-items-center py-1">
                  <span className="col-6">{key}</span>
                  <div className="col-6  d-flex justify-content-center ">
                    {data[key].slice(0, 10)}
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
      {/* </Link> */}
    </div>
  );
}

export default DetailsCard;
