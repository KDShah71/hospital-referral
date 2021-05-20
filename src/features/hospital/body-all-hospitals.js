import React, { useEffect, useState } from "react";
import HospitalCard from "../../components/hospital-card.component";

const HospitalsBody = ({ hospitals }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedHospitals, setSearchHospitals] = useState(hospitals.results);
  const [active, setActive] = useState("");
  const [refresh, setRefresh] = React.useState(1);

  const handleTextChange = (text) => {
    const newData = hospitals.results.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setSearchText(text);
    setSearchHospitals(newData);
  };

  useEffect(() => {
    setRefresh(1); //helps to force update after sorting
  }, [refresh]);

  const handleSortbyICU = () => {
    const sorted = searchedHospitals.sort(
      (a, b) => b.icu.available - a.icu.available
    );
    setSearchHospitals(sorted);
    setActive("icu");
    setRefresh(0);
  };

  const handleSortbyName = () => {
    const sorted = searchedHospitals.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });

    setSearchHospitals(sorted);
    setActive("name");
    setRefresh(0);
  };

  return (
    <div className="container">
      <div className="d-flex flex-column  align-items-center mb-4 mx-2">
        <input
          style={{ maxWidth: "800px" }}
          className="form-control  py-2 px-4"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchText}
          onChange={(e) => {
            handleTextChange(e.target.value);
          }}
        />
        <div className="d-flex align-items-center justify-content-start align-self-end py-2">
          <span className="text-muted"> sort by :</span>
          <div className="mx-1 ">
            <button
              className={`btn btn-outline-secondary btn-sm ms-2 ${
                active === "icu" && "active"
              }`}
              onClick={handleSortbyICU}
            >
              icu
            </button>
            <button
              className={`btn btn-outline-secondary btn-sm ms-2 ${
                active === "name" && "active"
              }`}
              onClick={handleSortbyName}
            >
              name
            </button>
          </div>
        </div>
      </div>

      <div className="row  row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 g-sm-2 g-md-2 g-lg-3">
        {searchedHospitals.map((result, index) => {
          const { name, address, phone_no, images, hospital_type, id, icu } =
            result;
          return (
            <HospitalCard
              key={index}
              address={address}
              name={name}
              hospital_type={hospital_type}
              images={images}
              to={id}
              icu={icu}
              phone={phone_no}
            />
          );
        })}
      </div>
    </div>
  );
};
export default HospitalsBody;
