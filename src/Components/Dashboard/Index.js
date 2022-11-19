import React, { useState, useEffect } from 'react'
import style from './dashboard.module.css'
import Bell from '../../Assets/Svg/bell.svg'
import mail from '../../Assets/Svg/mail.svg'
import ellipse from '../../Assets/Svg/ellipse.svg'
import search from '../../Assets/Svg/search.svg'
import plus from '../../Assets/Svg/plus.svg'
import FormInput from '../Shared/FormInput/FormInput'
import Card from '../Shared/Card/Card'
import { Link, useNavigate } from "react-router-dom";
import AgentModal from '../Modal/Agent.modal'
import { useSelector, useDispatch } from 'react-redux'
import { user_storage_token, user_storage_name, dateFormat, convertToThousand, Naira } from '../../config'
import Loader from '../Modal/Loader'
import { getAdminAgents } from '../../Sagas/Requests'
import { setAgentAction } from '../../Reducers/agent.reducer'



export default function Index() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { auth } = useSelector(state => state)
  const [openModal, setopenModal] = useState(false)
  const [admin, setadmin] = useState({})
  const [loading, setloading] = useState(false)
  const [skip, setskip] = useState(0)
  const [limit, setlimit] = useState(10)
  const [agents, setagents] = useState([])

  // console.log('auth', auth)
  useEffect(() => {
    checkToken()
    getAgents()
  }, [])

  useEffect(() => {
    getAgents()
  }, [skip, limit])

  const getAgents = async () => {
try {
  const token = localStorage.getItem(user_storage_token)
  const payload = {
    token: token,
    skip: skip,
    limit: limit
  }
  setloading(true)
  const response = await getAdminAgents(payload)
  const { data, message, success } = response.data
  if (success === true) {
    dispatch(setAgentAction(data))
    setagents(data.agents)
    setloading(false)
  }
  else {
    setloading(false)
    alert(message)
  }
} catch (error) {
  setloading(false)
  alert(error.message)
}
  }

  const getTotalAgents = async () => {
    const token = localStorage.getItem(user_storage_token)
    const payload = {
      token: token,
      skip: skip,
      limit: limit
    }
    const response = await getAdminAgents(payload)
    const { data, message, success } = response.data
    if (success === true) {
      setagents(data)
    }
    else {
      alert(message)
    }
  }

  const adminToken = localStorage.getItem(user_storage_token)
  const checkToken = () => {
    const adminData = localStorage.getItem(user_storage_name)
    adminData !== null ? setadmin(JSON.parse(adminData)) : setadmin({})
    if (adminToken === null) {
      navigate('/')
    }
  }
  const totalGenerated = () => {
    let total = 0;
    agents.map(item => {
      total += item.amount
    })
    return total
  }

  const navigateToAgent = (id) => {
    navigate(`/dashboard/agent/${id}`)
  }
  return (
    <>
      {loading && <Loader />}
      <div className={style.container}>
        {openModal === true && <AgentModal setopenModal={setopenModal} auth={auth} setloading={setloading} loading={loading} getAgents={getAgents} />}
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
              <h3>Hi {admin.first_name}</h3>
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
              <p>{`${convertToThousand(totalGenerated())}`}</p>
            </Card>
          </div>
          <div className={style.dashboard1}>
            <Card styles={style.styles1}>
              <h3>Total Agents</h3>
              <p>{agents?.length}</p>
            </Card>
            <Card styles={style.styles1}>
              <h3>Total Clients</h3>
              <p>125</p>
            </Card>
          </div>
          <div className={style.dashboard2}>
            <Card styles={style.styles1}>
              <Link to="/bcm">Send BCM</Link>
            </Card>
            <Card styles={`${style.styles1} ${style.more}`} onClick={() => setopenModal(true)} >
              <img src={plus} />
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
            {agents?.map((item) =>
            (
              <Card styles={style.tabledata} key={item._id} onClick={() => navigateToAgent(item._id)}>
                <div className={style.details}>
                  <div className={style.cycle} />
                  <div className={style.namedetails}>
                    <h3>{`${item.first_name} ${item.last_name}`}</h3>
                    <p>{item.assigned_id}</p>
                  </div>
                </div>
                <h3 className={style.date}>{dateFormat(item.createdAt)}</h3>
                <div className={style.amount}>
                  <h3>{`${convertToThousand(item?.amount || 0)}`}</h3>
                </div>
              </Card>
            )
            )}
          </div>
        </div>
      </div>
    </>
  )
}
