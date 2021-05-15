import React from "react";
import AppNavigator from "./infrastructure/navigation/app.navigation";
import { HospitalContextProvider } from "./services/hospital/hospital.context";

function App() {
  return (
    <HospitalContextProvider>
      <AppNavigator />
    </HospitalContextProvider>
  );
}

export default App;
