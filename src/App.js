import React from "react";

import { Header } from "./components/header";
import { Home, ViewDetail, SignUp, Login, UserProfile } from "./pages";

function App() {
  return (
    <>
      <Header></Header>
      <>
        {/* <Home /> */}
        {/* <ViewDetail /> */}
        {/* <SignUp /> */}
        {/* <Login /> */}
        <UserProfile />
      </>
    </>
  );
}

export default App;
