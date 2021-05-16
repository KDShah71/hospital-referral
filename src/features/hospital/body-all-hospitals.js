import React, { useState } from "react";
import HospitalCard from "../../components/hospital-card.component";

const HospitalsBody = ({ hospitals }) => {
  const [searchText, setSearchText] = useState("");
  const [searchedHospitals, setSearchHospitals] = useState(hospitals.results);

  const handleTextChange = (text) => {
    const newData = hospitals.results.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setSearchText(text);

    setSearchHospitals(newData);
  };

  return (
    <div className="container-fluid">
      <form className="d-flex justify-content-center mb-4 mx-2">
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
      </form>

      <div className="row row-cols-1  row-cols-sm-2  row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3 g-lg-3">
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
