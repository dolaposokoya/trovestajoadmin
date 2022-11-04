import React from 'react'
import Header from '../Shared/Header/Header';
import Login from '../Login/Index'
import style from './home.module.css'
import Intro from '../../Assets/Images/Intro.png'
import woman from '../../Assets/Images/woman.png'

export default function Index() {
    return (
        <>
            <div className='container'>
                <div className={`${style['home-view']}`}>
                    <Header />
                    <img src={Intro} alt="tro-vest" className={style.intro} />
                    <p className='saving'>SAVING MADE EASY</p>
                </div>
                <Login />
            </div>
            <div className='container' style={{
                backgroundColor: '#F8F9FB'
            }}>
                <img src={woman} alt="tro-vest-woman" className={style.woman} />
                <div>
                    
                </div>
            </div>
        </>
    )
}
