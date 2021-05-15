import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { DeathContextProvider } from "../../services/death/death.context";
import { DischargeContextProvider } from "../../services/discharge/discharge.context";
import { FocalContextProvider } from "../../services/focal/focal.context";
import { HduContextProvider } from "../../services/hdu/hdu.context";
import { IcuContextProvider } from "../../services/icu/icu.context";
import { NormalContextProvider } from "../../services/normal/normal.context";
import { OxygenContextProvider } from "../../services/oxygen/oxygen.context";
import { VentilatorContextProvider } from "../../services/ventilator/ventilator.context";

import Dashboard from "../../features/dashboard/dashboard";
import DeathScreen from "../../features/death/death.screen";
import DischargeScreen from "../../features/discharge/discharge.screen";
import FocalPersonScreen from "../../features/focal/focal-person.screen";
import HduScreen from "../../features/hdu/hdu.screen";
import HospitalDetailsScreen from "../../features/hospital/hospital-details.screen";
import IcuInfoScreen from "../../features/icu/icu-info.screen";
import NormalScreen from "../../features/normal/normal.screen";
import OxygenScreen from "../../features/oxygen/oxygen.screen";
import VentilatorScreen from "../../features/ventilator/ventilator.screen";
import AllHospitalsScreen from "../../features/hospital/all-hospitals.screen";
import { AllHospitalsContextProvider } from "../../services/hospital/all-hospitals.contex";
import HospitalInfoScreen from "../../features/hospital/hospital-info.screen";
import PageNotFound from "../../features/notfound/pagenotfound.screen";

const AllHospitalDisplay = () => (
  <AllHospitalsContextProvider>
    <AllHospitalsScreen />
  </AllHospitalsContextProvider>
);

const NormalDisplay = () => (
  <NormalContextProvider>
    <NormalScreen />
  </NormalContextProvider>
);

const HduDisplay = () => (
  <HduContextProvider>
    <HduScreen />
  </HduContextProvider>
);

const FocalDisplay = () => (
  <FocalContextProvider>
    <FocalPersonScreen />
  </FocalContextProvider>
);

const IcuDisplay = () => (
  <IcuContextProvider>
    <IcuInfoScreen />
  </IcuContextProvider>
);

const DeathDisplay = () => (
  <DeathContextProvider>
    <DeathScreen />
  </DeathContextProvider>
);

const VentilatorDisplay = () => (
  <VentilatorContextProvider>
    <VentilatorScreen />
  </VentilatorContextProvider>
);

const DischargeDisplay = () => (
  <DischargeContextProvider>
    <DischargeScreen />
  </DischargeContextProvider>
);

const OxygenDisplay = () => (
  <OxygenContextProvider>
    <OxygenScreen />
  </OxygenContextProvider>
);

const HospitalDetailsDisplay = () => <HospitalDetailsScreen />;

function AppNavigator() {
  return (
    <Router>
      <Dashboard>
        <Switch>
          <Route path="/" exact component={AllHospitalDisplay} />

          <Route path="/profile" exact component={HospitalDetailsDisplay} />

          <Route path="/hospital/:id" exact component={HospitalInfoScreen} />

          <Route path="/icus" exact component={IcuDisplay} />

          <Route path="/ventilators" exact component={VentilatorDisplay} />

          <Route path="/oxygen" exact component={OxygenDisplay} />

          <Route path="/normal" exact component={NormalDisplay} />

          <Route path="/hdu" exact component={HduDisplay} />

          <Route path="/focal" exact component={FocalDisplay} />

          <Route path="/discharge" exact component={DischargeDisplay} />

          <Route path="/death" exact component={DeathDisplay} />

          <Route component={PageNotFound} />
        </Switch>
      </Dashboard>
    </Router>
  );
}

export default AppNavigator;