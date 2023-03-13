import React, { useState, useEffect } from "react";
import Home from '../Components/Home/Index'
import Dashboard from '../Components/Dashboard/Index'
import Admin from '../Components/Admin/Index'
import Agent from '../Components/Dashboard/Agent'
import AdminAgent from '../Components/Admin/AdminAgent'
import Agents from '../Components/Admin/Agents'
import AdminCollection from '../Components/Admin/AdminCollection'
import Collection from '../Components/Dashboard/Collection'
import BroadCast from '../Components/BroadCast/Index'
import Profile from '../Components/Profile/Index'
import ErrorPage from '../Components/ErrorPage'
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
            path: '*',
            element: <ErrorPage />
        },
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/admin',
            element: <Admin />
        },
        {
            path: 'admin/:admin_id',
            element: <Agents />
        },
        {
            path: `/admin/agent/:agentid`,
            element: <AdminAgent />
        },
        {
            path: `/admin/agent/:agentid/:collectionid`,
            element: <AdminCollection />
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
        {
            path: '/profile',
            element: <Profile />
        },
        {
            path: `/dashboard/agent/:agentid/:collectionid`,
            element: <Collection />
        },
    ])

    return (
        <RouterProvider router={router} />
    );
}