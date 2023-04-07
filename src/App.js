import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "./components/header";
import { Home, ViewDetail, SignUp, Login, UserProfile, EditProfile, CreateProject } from "./pages";
import { fetchAuthMe, isAuthSelector } from "./redux/slices/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, []);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ViewDetail />} />
        <Route path="/auth/register" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/users/me" element={<UserProfile />} />
        <Route path="/users/update" element={<EditProfile />} />
        <Route path="/projects/create" element={<CreateProject /> } /> 
      </Routes>
    </>
  );
}

export default App;
