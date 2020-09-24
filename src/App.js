import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppBarContainer from "./Container/AppBarConatiner";

function App() {
  return (
    <BrowserRouter>
      <AppBarContainer />
    </BrowserRouter>
  );
}

export default App;
