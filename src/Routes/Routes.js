import React, { useState, useEffect } from "react";
import Home from '../Components/Home/Index'
import Dashboard from '../Components/Dashboard/Index'
import Agent from '../Components/Dashboard/Agent'
import BroadCast from '../Components/BroadCast/Index'
import { createBrowserRouter, Route, Routes, RouterProvider, useParams } from "react-router-dom";
import { user_storage_token } from "../config";

export default function App() {
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
            path: `/dashboard/agent/:agentid`,
            element: <Agent />
        },
        {
            path: '/bcm',
            element: <BroadCast />
        },
    ])
    return (
        <RouterProvider router={router} />
    );
}