import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import LoginView from '../Shared/LoginView/LoginView';
import Login from '../Login/Index';
import style from './home.module.css';
import Intro from '../../Assets/Images/Intro.png';
import woman from '../../Assets/Images/woman.png';
import nature from '../../Assets/Images/nature.png';
import balance from '../../Assets/Images/balance.png';
import supervisor from '../../Assets/Images/supervisor.png';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { user_storage_token, user_storage_type } from '../../config';
import { Link, redirect, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
	Container,
	Col,
	Row,
	Form,
	FormGroup,
	FormSelect,
	FormControl,
	Button,
} from 'react-bootstrap';
import animatedLogo from '../../Assets/Gifs/tovMind.gif';
import { Formik } from 'formik';

export default function Index() {
	const initialValues = { userType: '', userId: '', userPassword: '' };
	const validationSchema = yup.object().shape({
		userType: yup
			.string()
			.typeError('Must be a string')
			.required('Id Is required'),
		userId: yup
			.string()
			.typeError('Must be a string')
			.required('Id Is required'),
		userPassword: yup
			.string()
			.typeError('Must be a string')
			.required('Id Is required'),
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { auth } = useSelector((state) => state);
	const { user, setUser } = useState();
	const adminToken = localStorage.getItem(user_storage_token);
	const adminType = localStorage.getItem(user_storage_type);
	useEffect(() => {
		if (adminToken !== null && adminType === 'admin') {
			return navigate('/dashboard');
		} else if (adminToken !== null && adminType === 'super_admin') {
			return navigate('/admin');
		} else {
			return;
		}
	}, []);

	return (
		<Container fluid className={`bg-light p-0 min-vh-100 ${style.container}`}>
			<ToastContainer />
			<Col
				className={`bg-white flex-column gap-2 justify-content-center align-items-center ${style.leftCol}`}
			>
				<Row className="d-flex justify-content-center mb-4 w-100">
					<div className="d-flex justify-content-center">
						<img src={animatedLogo} alt="Logo" height={400} width={420} />
					</div>
				</Row>
				<Row
					className="d-flex
                justify-content-center w-100"
					style={{ marginTop: '15%', fontFamily: 'Montserrat' }}
				>
					Saving Made Easy
				</Row>
			</Col>
			<Col
				className={`d-flex 
                justify-content-center align-items-center  p-0 ${style.rightCol}`}
			>
				<Row className="w-100 d-flex justify-content-center" style={{}}>
					<Col className="w-75 d-flex justify-content-center px-4">
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={(val) => {
								console.log(val);

								toast.success('Data collected!');
							}}
						>
							{({ values, handleChange, handleSubmit, errors }) => (
								<Form
									onSubmit={handleSubmit}
									className="w-75 p-4 rounded border border-primary"
								>
									<div className="w-75 d-flex flex-column mt-4 align-items-center">
										<FormGroup
											className="bg-primary mt-4 mb-4 rounded w-75"
											style={{ marginTop: 20, fontFamily: 'Montserat' }}
										>
											<select
												name="userType"
												onChange={handleChange}
												className="py-2 px-2 rounded pr-2 w-100 bg-primary text-light"
												style={{ outline: 'none', fontFamily: 'Montserrat' }}
											>
												<option>Select User Type</option>
												<option value={'superA'}>Super Admin</option>
												<option value={'A'}>Admin</option>
												<option value={'F'}>Fin Con</option>
											</select>
										</FormGroup>

										<FormGroup className="border px-2 gap-1 d-flex  align-items-center border-primary mt-4 rounded w-75">
											<i class="bi bi-person-fill color-primary"></i>
											<input
												name="userId"
												onChange={handleChange}
												type="text"
												className="w-100 bg-transparent outline-0 border py-2 border-0 rounded"
												placeholder="Enter Your ID"
												style={{ outline: 'none', fontFamily: 'Montserrat' }}
											/>
										</FormGroup>
										<FormGroup className="border px-2 gap-1 d-flex  align-items-center border-primary mt-4 rounded w-75">
											<i class="bi bi-lock-fill"></i>
											<input
												name="userPassword"
												onChange={handleChange}
												type="text"
												className="w-100 bg-transparent outline-0 border py-2 border-0 rounded"
												placeholder="Password"
												style={{ outline: 'none', fontFamily: 'Montserrat' }}
											/>
										</FormGroup>

										<FormGroup className="border px-0 gap-2 d-flex  align-items-center border-primary mt-5 rounded w-50">
											<Button
												style={{ fontFamily: 'Montserrat' }}
												onChange={handleChange}
												type="submit"
												variant="primary"
												className=" px-3 w-100"
												disabled={Object.keys(errors).length > 0}
											>
												Login
											</Button>
										</FormGroup>

										<p
											style={{
												marginTop: '20%',
												fontSize: 14,
												fontFamily: 'Montserrat',
											}}
											className="p-0 "
										>
											Forgot Password ?
										</p>
										<p
											style={{
												fontSize: 14,
												fontFamily: 'Montserrat',
												color: '#7A0D0C',
											}}
											className="m-0 p-0 color-secondary"
										>
											Contact Support
										</p>
									</div>
									<p>{Object.keys(errors)}</p>
								</Form>
							)}
						</Formik>
					</Col>
				</Row>
			</Col>
		</Container>
	);
}
