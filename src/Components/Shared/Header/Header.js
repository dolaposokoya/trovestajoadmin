import React, { useState, useEffect } from 'react'
// import  './header.css'
import style from './header.module.css'
import close from '../../../Assets/Images/close.png'
import hamburger from '../../../Assets/Svg/hamburger.svg'

export default function Header() {
    const [show, setshow] = useState(false)

    useEffect(() => {
        console.log('show value when page loads', show)
    }, [show])
    const changeIcon = (value) => {
        console.log('show === true', value)
        setshow(value)
    }
    return (
        <>
            <div className={show === true ? style.headerView : style.headerViewNone}>
                <div div className={style.harmburger}>
                    <div className={style.harmburgerView} onClick={() => changeIcon(false)}>
                        <img src={close} className={style.close} />
                    </div>
                </div>
                <div className={`${style.header}`}>
                    <nav>
                        <ul>
                            {/* <li> <a href='/'>Home</a></li> */}
                            <li> <a>About Us</a></li>
                            <li> <a>How it works</a></li>
                            <li> <a>Contact Support</a></li>
                            <li className={`${style.connect}`}> <a>Connect with us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {
                <div className={style.harmburger}>
                    <div className={style.harmburgerView} onClick={() => changeIcon(true)}>
                        <img src={hamburger} className={style.hamburger1} />
                    </div>
                </div>
            }
        </>
    )
}
