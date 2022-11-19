import React, { useState } from 'react'
import agentStyles from './agent.modal.module.css'
import FormInput from '../Shared/FormInput/FormInput'
import { addAgentAction,setAgentAction } from '../../Reducers/agent.reducer'
import { useDispatch, useSelector } from 'react-redux'
import { createdminAgent } from '../../Sagas/Requests'
import { user_storage_token } from '../../config'
import Loader from './Loader'



export default function AgentModal(props) {
    const { setopenModal, auth, setloading,loading } = props
    const dispatch = useDispatch()
    const { agents } = useSelector(state => state)
    const [agentData, setagentData] = useState({
        first_name: '',
        last_name: '',
        mobile: '',
        gender: '',
        nin: '',
        state: '',
        lga: '',
        address: '',
    })

    const checkInput = () => {
        let valid = true
        if (agentData.first_name === '' || agentData.last_name === '' || agentData.mobile === '' || agentData.gender === '' || agentData.nin === '' || agentData.state === '' || agentData.lga === '' || agentData.address === '') {
            valid = false
        }
        return valid
    }
    const createAgent = async (event) => {
        event.preventDefault()
        const valid = checkInput()
        if (valid === false) {
            alert('some fileds are empty')
        } else {
            const data = {
                data: agentData,
                token: sessionStorage.getItem(user_storage_token)
            }
            setloading(true)
            const response = await createdminAgent(data)
            const { success, message } = response.data
            if (success === false) {
                setloading(false)
                alert(message)
            }
            else {
                setopenModal(false)
                // dispatch(setAgentAction(newAgent))
                setloading(false)
                alert(message)
            }
        }
    }
    return (
        <>
            <div className={agentStyles.modal}>
            {loading && <Loader/>}
            <div className={agentStyles['modal-content']}>
                <div className={agentStyles.header}>
                    <p className={agentStyles.headertext}>Register New Agent</p>
                    <span className={agentStyles.close} onClick={() => setopenModal(false)}>&times;</span>
                </div>
                <div className={agentStyles.formView}>
                    <form>
                        <div className={agentStyles.forminput} style={{
                            marginTop: '.7em'
                        }}>
                            <FormInput
                                type="text"
                                placeholder="First Name"
                                className={agentStyles.input}
                                value={agentData.first_name}
                                onChange={(event) => setagentData({ ...agentData, first_name: event.target.value })}
                            />
                            {agentData.first_name === '' && <span className={agentStyles.error}>First name is empty</span>}
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="Last Name"
                                className={agentStyles.input}
                                value={agentData.last_name}
                                onChange={(event) => setagentData({ ...agentData, last_name: event.target.value })}
                            />
                            {agentData.last_name === '' && <span className={agentStyles.error}>Last name is empty</span>}
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="Phone Number"
                                maxLength={11}
                                className={agentStyles.input}
                                value={agentData.mobile}
                                onChange={(event) => setagentData({ ...agentData, mobile: event.target.value })}
                            />
                            {agentData.mobile === '' && <span className={agentStyles.error}>Mobile is empty</span>}
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="Gender"
                                className={agentStyles.input}
                                value={agentData.gender}
                                onChange={(event) => setagentData({ ...agentData, gender: event.target.value })}
                            />
                            {agentData.gender === '' && <span className={agentStyles.error}>Gender is empty</span>}
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="NIN"
                                className={agentStyles.input}
                                value={agentData.nin}
                                onChange={(event) => setagentData({ ...agentData, nin: event.target.value })}
                            />
                            {agentData.nin === '' && <span className={agentStyles.error}>NIN is empty</span>}
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="State"
                                className={agentStyles.input}
                                value={agentData.state}
                                onChange={(event) => setagentData({ ...agentData, state: event.target.value })}
                            />
                            {agentData.state === '' && <span className={agentStyles.error}>State is empty</span>}
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="Local Govt Area"
                                className={agentStyles.input}
                                value={agentData.lga}
                                onChange={(event) => setagentData({ ...agentData, lga: event.target.value })}
                            />
                        </div>
                        {agentData.lga === '' && <span className={agentStyles.error}>Local Govt Area is empty</span>}
                        <div className={agentStyles.forminput}>
                            <textarea id="w3review" name="w3review" rows="5" type="text"
                                placeholder="Address"
                                className={agentStyles.textarea}
                                value={agentData.address}
                                onChange={(event) => setagentData({ ...agentData, address: event.target.value })}></textarea>
                            {agentData.address === '' && <span className={agentStyles.error}>Address is empty</span>}
                        </div>
                        <div className={agentStyles.forminput}>
                            <button onClick={(event) => createAgent(event)}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
