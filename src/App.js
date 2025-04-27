import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import MainPage from './components/MainPage'
import LegalClientsPage from './components/LegalClientsPage'
import PhysicalClientsPage from './components/PhysicalClientsPage'
import Calculator from './components/Calculator'
import LoginPage from './components/LoginPage'
import RegistrationPage from './components/RegistrationPage'
import Dashboard from './components/Dashboard'
import './Styles/main.css'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<MainPage />} />
				<Route path='LegalClientsPage' element={<LegalClientsPage />} />
				<Route path='PhysicalClientsPage' element={<PhysicalClientsPage />} />
				<Route path='calculator' element={<Calculator />} />
				<Route path='LoginPage' element={<LoginPage />} />
				<Route path='register' element={<RegistrationPage />} />
				<Route path='dashboard' element={<Dashboard />} />
			</Route>
		</Routes>
	)
}

export default App
