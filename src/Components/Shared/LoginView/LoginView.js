import React from 'react'
import style from './loginview.module.css'
import FormInput from '../FormInput/FormInput'
import person from '../../../Assets/Images/person.png'
import lock from '../../../Assets/Images/lock.png'
import { Link } from "react-router-dom";
// import eye from '../../../Assets/Images/eye.png'

export default function LoginView() {

  const loginUser = (event) => {
    event.preventDefault();
    window.location.href = '/dashboard'
  }
  return (
    <div className={style['login-view1']}>
      <div className={style['login-view']}>
        <form>
          <div className={style.inputview}>
            <img src={person} className={style.absolute} />
            <FormInput
              placeholder="Enter Your ID"
              type="text"
              className={style.input}
            />
          </div>
          <div className={style.inputview}>
            <img src={lock} className={style.absolute} />
            <FormInput
              placeholder="Password"
              type="password"
              className={style.input}
            />
            {/* <img src={eye} className={style.absolute1} /> */}
          </div>
          <div className={style.error}>
            <span className={style.errortext}>Wrong password or username Try again</span>
          </div>
          <div className={style.btnview}>
            <button onClick={(event) => loginUser(event)}>Login</button>
          </div>
          <div className={style.supportview}>
            <span className={style.contacttext}>Forgot Password ?</span>
            <span className={style.contacttext1}>Contact Support</span>
          </div>
        </form>
      </div>
    </div>
  )
}