import React, { useEffect, useState } from 'react'
import styles from './agent.module.css'
import style from './dashboard.module.css'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import { convertToThousand, defaultImage, Naira } from '../../config';
import Bell from '../../Assets/Svg/bell.svg'
import mail from '../../Assets/Svg/mail.svg'
import ellipse from '../../Assets/Svg/ellipse.svg'
import search from '../../Assets/Svg/search.svg'
import plus from '../../Assets/Svg/plus.svg'


export default function Agent() {
    const navigate = useNavigate()
    const { agents } = useSelector(state => state.agents)
    const { agentid } = useParams();
    const [agent, setagent] = useState({})
    useEffect(() => {
        checkAgent()
        const filteredAgent = agents?.find(item => {
            return item._id === agentid
        })
        setagent(filteredAgent)
    }, [agentid])
    const checkAgent = () => {
        if (agents.length <= 0) {
            navigate('/dashboard')
        }
    }
    return (
        <div className='container' style={{
            flexDirection: 'column'
        }}>
            <div className={styles.profile}>
                <img src={defaultImage} alt="profile-image" className='card' />
                <div className={styles.data}>
                    <h3>{`${agent.first_name} ${agent.last_name}`}</h3>
                    <h4>{`${agent.assigned_id}`}</h4>
                    <h4>{`${agent.mobile}`}</h4>
                    <h4>{`${agent.gender}`}</h4>
                </div>
            </div>
            <div className={style.dashboardintro} style={{
                width: '97%',
                marginTop: '3em',
                // padding: '.1em 0em',
            }}>
                <div className={style.notification} style={{
                    marginRight: '1em',
                    marginTop: '.2em'
                }}>
                    <img src={mail} />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '100%'
                }}>
                    <div className={styles.profiledetails}>
                        <h3>Revenue Generated</h3>
                        <h5>{`${convertToThousand(agent?.amount || 0)}`}</h5>
                    </div>
                    <div className={styles.profiledetails}>
                        <h3 style={{
                            marginTop: '1.3em'
                        }}>Clients Onboarded</h3>
                        <p>{agent?.artisans?.length || 0}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
