import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';


export default function Agent() {
    const navigate = useNavigate()
    const { agents } = useSelector(state => state.agents)
    const { agentid } = useParams();
    const [agent, setagent] = useState({})
    useEffect(() => {
        console.log('agents',agents.length)
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
        <div>Agent {agent?.assigned_id}</div>
    )
}
