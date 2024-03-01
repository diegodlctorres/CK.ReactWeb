import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import React from "react";


export const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> }
]);
