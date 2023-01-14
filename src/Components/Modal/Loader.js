import React from 'react'
import loaderstyles from './loader.module.css'



export default function Loader() {
    return (
        <div className={loaderstyles.modal}>
            <div className={loaderstyles['modal-content']}>
                <div className={loaderstyles.loader}></div>
            </div>
        </div>
    )
}
