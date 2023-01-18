import React, { useState } from 'react'
import style from './loginview.module.css'
import FormInput from '../FormInput/FormInput'
import person from '../../../Assets/Images/person.png'
import lock from '../../../Assets/Images/lock.png'
import { Link, redirect } from "react-router-dom";
import eye from '../../../Assets/Svg/eye.svg'
import { loginAdminAction, setAdminAction } from '../../../Reducers/admin.reducer'
import { useDispatch, useSelector } from 'react-redux'
import { loginAdminRequest } from '../../../Sagas/Requests'
import { user_storage_name, user_storage_token } from '../../../config'
import Loader from '../../Modal/Loader';

export default function LoginView(props) {
  const { navigate } = props
  const { auth } = useSelector(state => state)
  const [secure, setsecure] = useState(true)
  const [loading, setloading] = useState(false)
  const [adminData, setadminData] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()

  const loginUser = async (event) => {
    event.preventDefault()
    try {
      const data = {
        email: adminData.email,
        password: adminData.password,
      }
      setloading(true)
      const response = await loginAdminRequest(data)
      const { success, token, message } = response.data
      if (success === false) {
        setloading(false)
        alert(message)
      }
      else {
        const adminData = {
          data: response.data.data,
          token: token,
          success: success,
          message: message
        }
        if (token) {
          dispatch(setAdminAction(adminData))
          const jsonData = JSON.stringify(response.data.data)
          localStorage.setItem(user_storage_token, token)
          localStorage.setItem(user_storage_name, jsonData)
          navigate('/dashboard')
          setloading(false);
        }
        else {
          alert(message)
          setloading(false)
        }
      }
    } catch (error) {
      setloading(false)
      alert(error.message)
    }
  }
  return (
    <>
      {loading && <Loader />}
      <div className={style['login-view1']}>
        <div className={style['login-view']}>
         
          <div className={style.dropdown}>
            <select className={style.dropdownlist}>
              <option>Select User Type</option>
              <option>Admin</option>
              <option>Super Admin</option>
            </select>
          </div>
          <form>
            <div className={style.inputview}>
              <img src={person} className={style.absolute} />
              <FormInput
                placeholder="Enter Your ID"
                type="text"
                className={style.input}
                value={adminData.email}
                onChange={(event) => {
                  setadminData({ ...adminData, email: event.target.value })
                }}
              />
            </div>
            <div>
              <div className={style.inputview}>
                <img src={lock} className={style.absolute2} />
                <FormInput
                  placeholder="Password"
                  type={secure === true ? 'password' : 'text'}
                  className={style.input}
                  value={adminData.password}
                  onChange={(event) => {
                    setadminData({ ...adminData, password: event.target.value })
                  }}
                />
                <img src={eye} className={style.absolute1} onClick={() => {
                  setsecure(!secure)
                }} />
              </div>
              {adminData.password === '' && <span>Password is empty</span>}
              {auth.token && <Link to="/dashboard" replace={true} />}
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
            <div className={style.supportview}>
              <a href='https://expo.dev/artifacts/eas/8KQQDwH88yVi4VGs66toaL.apk' className={`${style.appLink}`}><span style={{marginTop:'10%'}}>Download App</span></a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
