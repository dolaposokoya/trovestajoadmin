import React, { useState, useEffect } from "react";
import Home from '../Components/Home/Index'
import Dashboard from '../Components/Dashboard/Index'
import BroadCast from '../Components/BroadCast/Index'
import { createBrowserRouter, Route, Routes, RouterProvider, useNavigate } from "react-router-dom";
import { user_storage_token } from "../config";

export default function App() {
    // const navigate = useNavigate();
    const [token, settoken] = useState(null)
    useEffect(() => {
        checkToken()
    }, [])
    const checkToken = () => {
        const adminToken = localStorage.getItem(user_storage_token)
        if (adminToken !== null) {
            settoken(adminToken)
        }
        else {
            settoken('')
        }
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/',
            element: !token && <Home />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/bcm',
            element: token ? <BroadCast /> : <Home />
        },
    ])
    return (
        <RouterProvider router={router} />
    );
}