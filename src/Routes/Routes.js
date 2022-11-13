import React from "react";
import Home from '../Components/Home/Index'
import Dashboard from '../Components/Dashboard/Index'
import BroadCast from '../Components/BroadCast/Index'
import { Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/bcm" element={<BroadCast/>} />
        </Routes>
    );
}