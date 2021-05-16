import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AllHospitalsContextProvider } from "../../services/hospital/all-hospitals.contex";

import Dashboard from "../../features/dashboard/dashboard";
import AllHospitalsScreen from "../../features/hospital/all-hospitals.screen";
import HospitalInfoScreen from "../../features/hospital/hospital-info.screen";
import PageNotFound from "../../features/notfound/pagenotfound.screen";

const AllHospitalDisplay = () => (
  <AllHospitalsContextProvider>
    <AllHospitalsScreen />
  </AllHospitalsContextProvider>
);

function AppNavigator() {
  return (
    <Router>
      <Dashboard>
        <Switch>
          <Route path="/" exact component={AllHospitalDisplay} />

          <Route path="/hospital/:id" exact component={HospitalInfoScreen} />

          <Route component={PageNotFound} />
        </Switch>
      </Dashboard>
    </Router>
  );
}

export default AppNavigator;
