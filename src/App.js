import React from "react";

import { Header } from "./components/header";
import { Home, ViewDetail } from "./pages";

function App() {
  return (
    <>
      <Header></Header>
      <>
        {/* <Home /> */}
        <ViewDetail />
      </>
    </>
  );
}

export default App;
