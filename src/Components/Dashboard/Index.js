import React from 'react'
import style from './dashboard.module.css'
import Bell from '../../Assets/Svg/bell.svg'
import mail from '../../Assets/Svg/mail.svg'
import ellipse from '../../Assets/Svg/ellipse.svg'
import search from '../../Assets/Svg/search.svg'
import plus from '../../Assets/Svg/plus.svg'
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
        <div className={style.dashboard2}>
          <Card styles={style.styles1}>
            <h3>Send BCM</h3>
          </Card>
          <Card styles={`${style.styles1} ${style.more}`}>
            <img src={plus} className={style.absolute1} />
          </Card>
        </div>
        <div style={{
          width: '100%',
          paddingBottom: '1em'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h2 className={style.registered}>Registered Agents</h2>
            <h2 className={style.seeall}>See all</h2>
          </div>
          <div className={style.tablehead}>
            <h3>Name</h3>
            <h3>Date Created</h3>
            <h3>Amount</h3>
          </div>
          <Card styles={style.tabledata}>
            <div className={style.details}>
              <div className={style.cycle} />
              <div className={style.namedetails}>
                <h3>Akindele Joshua A</h3>
                <p>AG-2657002</p>
              </div>
            </div>
            <h3>15/10/2022</h3>
            <div className={style.amount}>
              <h3>$3,532.00</h3>
            </div>
          </Card>
          <Card styles={style.tabledata}>
            <div className={style.details}>
              <div className={style.cycle} />
              <div className={style.namedetails}>
                <h3>Akindele Joshua A</h3>
                <p>AG-2657002</p>
              </div>
            </div>
            <h3>15/10/2022</h3>
            <div className={style.amount}>
              <h3>$3,532.00</h3>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
