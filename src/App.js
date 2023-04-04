import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header";
import { Home, ViewDetail, SignUp, Login, UserProfile, EditProfile, CreateProject } from "./pages";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ViewDetail />} />
        <Route path="/auth/register" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/login" element={<UserProfile />} />
        <Route path="/users/update" element={<EditProfile />} />
        <Route path="/projects/:id/edit" element={<CreateProject /> } /> 
      </Routes>
    </>
  );
}

export default App;
