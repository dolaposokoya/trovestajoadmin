import React, { useEffect } from 'react'
import Header from '../Shared/Header/Header';
import LoginView from '../Shared/LoginView/LoginView';
import Login from '../Login/Index'
import style from './home.module.css'
import Intro from '../../Assets/Images/Intro.png'
import woman from '../../Assets/Images/woman.png'
import nature from '../../Assets/Images/nature.png'
import balance from '../../Assets/Images/balance.png'
import supervisor from '../../Assets/Images/supervisor.png'
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { user_storage_token, user_storage_type } from '../../config';
import { Link, redirect, useNavigate } from "react-router-dom";


export default function Index() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { auth } = useSelector(state => state)
    const adminToken = localStorage.getItem(user_storage_token)
    const adminType = localStorage.getItem(user_storage_type)
    useEffect(() => {
        if (adminToken !== null && adminType === 'admin') {
            return navigate('/dashboard')
        }
        else if (adminToken !== null && adminType === 'super_admin') {
            return navigate('/admin')
        }
        else {
            return 
        }
    }, [])

    return (
        <>
            <div className={style.large}>
                <div className={style.mobile}>
                    <Header />
                    <div className={style.container}>
                        <div className={`${style['home-view']}`}>
                            <div className={style.introView}>
                                <img src={Intro} alt="tro-vest" className={style.intro} />
                                <p className={style.saving}>SAVING MADE EASY</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style['login-view']}>
                    <LoginView navigate={navigate} />
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}
