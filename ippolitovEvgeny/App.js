import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./components/NavigationT";

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
