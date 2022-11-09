import React from 'react'
import style from './login.module.css'
import FormInput from '../Shared/FormInput/FormInput'
import person from '../../Assets/Images/person.png'
import lock from '../../Assets/Images/lock.png'
import eye from '../../Assets/Images/eye.png'

export default function Index() {
  return (
    <div className={style['login-view']}>
      <form autoComplete={false}>
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
          <button>Login</button>
        </div>
        <div className={style.supportview}>
          <span className={style.contacttext}>Forgot Password ?</span>
          <span className={style.contacttext1}>Contact Support</span>
        </div>
      </form>
    </div>
  )
}
