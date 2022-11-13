import React from 'react'
import style from './dashboard.module.css'
import Bell from '../../Assets/Svg/bell.svg'
import mail from '../../Assets/Svg/mail.svg'
import ellipse from '../../Assets/Svg/ellipse.svg'
import search from '../../Assets/Svg/search.svg'
import FormInput from '../Shared/FormInput/FormInput'
import Card from '../Shared/Card/Card'

export default function Index() {
  return (
    <div className={style.container}>
      <div className={style.dashboard}>
        <div className={style.dashboardintro}>
          <div className={style.notification}>
            <img src={mail} />
            <img src={Bell} />
            <div className={style.ellipse}>
              <img src={ellipse} />
              <img src={ellipse} />
              <img src={ellipse} />
            </div>
          </div>
          <div className={style.notification1}>
            <h3>Hi James</h3>
            <p>How are you doing today?</p>
          </div>
          <div className={style.notification2}>
            <FormInput
              placeholder="Search Agent"
              type="text"
              className={style.input}
            />
            <img src={search} className={style.absolute1} />
          </div>
        </div>
        <div className={style.dashboard}>
          <Card styles={style.styles}>
          <h3>Total Revenue</h3>
            <p>$56700,0454</p>
          </Card>
        </div>
        <div className={style.dashboard1}>
        <Card styles={style.styles1}>
          <h3>Total Agents</h3>
            <p>64</p>
          </Card>
          <Card styles={style.styles1}>
          <h3>Total Clients</h3>
            <p>125</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
