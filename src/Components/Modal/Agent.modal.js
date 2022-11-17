import React from 'react'
import agentStyles from './agent.modal.module.css'
import FormInput from '../Shared/FormInput/FormInput'
import {  addAgentAction } from '../../Reducers/admin.reducer'
import { useDispatch,useSelector } from 'react-redux'



export default function AgentModal(props) {
    const { setopenModal } = props
    const dispatch = useDispatch()
    const { agent } = useSelector(state => state)
    const createAgent = async (event) => {
        event.preventDefault()
        const data = {
            first_name: 'first',
            last_name: 'first',
            mobile: 'first',
            gender: 'first',
            nin: 'first',
            state: 'first',
            lga: 'first',
            address: 'first',
        }
        dispatch(addAgentAction(data))
        if (agent?.loading === false) {
            alert(agent?.message)
        }
        else {
            console.log('Loading')
        }
    }
    return (
        <div className={agentStyles.modal}>
            <div className={agentStyles['modal-content']}>
                <div className={agentStyles.header}>
                    <p className={agentStyles.headertext}>Register New Agent</p>
                    <span className={agentStyles.close} onClick={() => setopenModal(false)}>&times;</span>
                </div>
                <div className={agentStyles.formView}>
                    <form>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="First Name"
                                className={agentStyles.input}
                            />
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="Last Name"
                                className={agentStyles.input}
                            />
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="Phone Number"
                                maxLength={11}
                                className={agentStyles.input}
                            />
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="Gender"
                                className={agentStyles.input}
                            />
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="NIN"
                                className={agentStyles.input}
                            />
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="State"
                                className={agentStyles.input}
                            />
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="Local Govt Area"
                                className={agentStyles.input}
                            />
                        </div>
                        <div className={agentStyles.forminput}>
                            <FormInput
                                type="text"
                                placeholder="Address"
                                className={agentStyles.input}
                            />
                        </div>
                        <div className={agentStyles.forminput}>
                            <button onClick={(event) => createAgent(event)}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
