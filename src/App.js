import React from "react";

import { Header } from "./components/header";
import { Home, ViewDetail, SignUp, Login, UserProfile, EditProfile, CreateProject } from "./pages";

function App() {
  return (
    <>
      <Header></Header>
      <>
        {/* <Home /> */}
        {/* <ViewDetail /> */}
        {/* <SignUp /> */}
        {/* <Login /> */}
        {/* <UserProfile /> */}
        {/* <EditProfile /> */}
        <CreateProject />
      </>
    </>
  );
}

export default App;
