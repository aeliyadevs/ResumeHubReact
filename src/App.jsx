import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./assets/css/Main.css";
import "./assets/scss/Main.scss";
import HelloWorld from "./components/HelloWorld";
import Resume from "./components/Resume";
import Unique from "./components/Unique";
import WebcamCapture from "./components/WebcamCapture";
import JokeBox from "./components/JokeBox";
import Login from "./components/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Cookies from "js-cookie";
import My404Page from "./components/My404Page";

function App() {
  useEffect(() => {});
  return (
    // <>
    //   {userLoggedIn == false ? (
    //     <Login LoggedInStatus={LoggedInStatus} />
    //   ) : (
    //     <>
    //       <Resume userData={userData} />
    //       <Unique />
    //       <JokeBox />
    //       <WebcamCapture />
    //     </>
    //   )}
    // </>
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Resume />
            <Unique />
            <JokeBox />
            <WebcamCapture />
          </PrivateRoute>
        }
      />
      <Route path="*" exact={true} element={<My404Page />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
