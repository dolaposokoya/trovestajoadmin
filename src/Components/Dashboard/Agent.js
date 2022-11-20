import React, { useEffect, useState } from 'react'
import styles from './agent.module.css'
import style from './dashboard.module.css'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import { convertToThousand, defaultImage, dateFormat } from '../../config';
import mail from '../../Assets/Svg/mail.svg'
import next from '../../Assets/Images/next.png'
import nextwhite from '../../Assets/Images/nextwhite.png'
import Card from '../Shared/Card/Card'
import Loader from '../Modal/Loader';


export default function Agent() {
    const navigate = useNavigate()
    const { agents } = useSelector(state => state.agents)
    const [loading, setloading] = useState(false)
    const { agentid } = useParams();
    const [agent, setagent] = useState({})
    useEffect(() => {
        setloading(true)
        checkAgent()
        const filteredAgent = agents?.find(item => {
            return item._id === agentid
        })
        setagent(filteredAgent)
        setTimeout(() => {
            setloading(false)
        }, 1300);
    }, [agentid])
    const checkAgent = () => {
        if (agents.length <= 0) {
            navigate('/dashboard')
        }
    }
    return (
        <>
            {loading && <Loader />}
            <div className='container' style={{
                flexDirection: 'column',
                marginBottom: '9em'
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
                }}>
                    <div className={style.notification} style={{
                        marginRight: '1em',
                        marginTop: '.2em'
                    }}>
                        <img src={mail} alt="mail" />
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
                        <div className={styles.profiledetails} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}>
                            <div className={styles.profiledetails1}>
                                <h3 style={{
                                    marginTop: '1.3em'
                                }}>Clients Onboarded</h3>
                                <p>{agent?.artisans?.length || 0}</p>
                            </div>
                            <img src={nextwhite} alt="mail" />
                        </div>
                    </div>
                </div>
                <div className={styles.transaction}>
                    <h3>Transaction Record</h3>
                    <img src={next} alt="mail" />
                </div>
                <div className={styles.transaction} style={{
                    justifyContent: 'center',
                    marginTop: '.5em'
                }}>
                    <div className={styles.deposit}>
                        <h3>Deposits</h3>
                    </div>
                    <div className={styles.withdrawn}>
                        <h3>Withdrawn</h3>
                    </div>
                </div>
                <div className={styles.transaction1}>
                    <h3>Ref No</h3>
                    <h3>Amount</h3>
                </div>
                {agents?.map(item => (
                    <Card styles={style.tabledata} key={item._id} style={{
                        width: '97%'
                    }}>
                        <div className={style.details}>
                            <div className={style.namedetails}>
                                <h3>{`Trc2564876/34552242321`}</h3>
                                <h3 className={style.date}>{dateFormat(item.createdAt)}</h3>
                            </div>
                        </div>
                        <div className={style.amount}>
                            <h3>{`${convertToThousand(8838292)}`}</h3>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    )
}
