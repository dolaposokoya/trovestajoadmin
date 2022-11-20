import React from 'react'
import loaderstyles from './menu.module.css'



export default function Menu(props) {
    const { setmenu } = props
    return (
        <div className={loaderstyles.modal}>
            <div className={loaderstyles['modal-content']}>
            <span className={loaderstyles.close} onClick={() => setmenu(false)}>&times;</span>
                {/* <div className={loaderstyles.loader}></div> */}
                <h3>My Profile</h3>
                <h3>Setting</h3>
                <h3>Signout</h3>
            </div>
        </div>
    )
}
