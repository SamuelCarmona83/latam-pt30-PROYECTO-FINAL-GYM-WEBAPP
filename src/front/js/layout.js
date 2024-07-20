import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { SignUp } from "./pages/SignUp.js";
import { LogIn } from "./pages/LogIn.js";
import { Dashboard } from "./pages/Dashboard.js";
import { Workout } from "./pages/Workout.js"; // Nueva importación por Kevin
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CreateEditPlan } from "./pages/CreateEditPlan.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<SignUp />} path="/" />
            <Route element={<LogIn />} path="/login" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<CreateEditPlan />} path="/creatEditPlan:id>" />
            <Route element={<Workout />} path="/workout/name" />
            <Route element={<h1>Not found!</h1>} path="*"/>
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
