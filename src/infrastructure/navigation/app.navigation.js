import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AllHospitalsContextProvider } from "../../services/hospital/all-hospitals.contex";

import AllHospitalsScreen from "../../features/hospital/all-hospitals.screen";
import HospitalInfoScreen from "../../features/hospital/hospital-info.screen";
import PageNotFound from "../../features/notfound/pagenotfound.screen";
import Home from "../../features/home/home.screen";

const AllHospitalDisplay = () => (
  <AllHospitalsContextProvider>
    <AllHospitalsScreen />
  </AllHospitalsContextProvider>
);

function AppNavigator() {
  return (
    <Router>
      <Home>
        <Switch>
          <Route path="/" exact component={AllHospitalDisplay} />

          <Route path="/hospital/:id" exact component={HospitalInfoScreen} />

          <Route component={PageNotFound} />
        </Switch>
      </Home>
    </Router>
  );
}

export default AppNavigator;
