import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout' // Изменено с { Layout }
import PageMain from './PageMain'
import ClientFirstPage from './ClientFirstPage'
import ClientSecondPage from './ClientSecondPage'
import Kalkulate from './Kalkulate'
import LoginPage from './LoginPage'
import Registration from './Registration'
import Dashboard from './Dashboard'
import './Styles/main.css'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<PageMain />} />
				<Route path='ClientFirstPage' element={<ClientFirstPage />} />
				<Route path='ClientSecondPage' element={<ClientSecondPage />} />
				<Route path='kalkulate' element={<Kalkulate />} />
				<Route path='LoginPage' element={<LoginPage />} />
				<Route path='register' element={<Registration />} />
				<Route path='dashboard' element={<Dashboard />} />
			</Route>
		</Routes>
	)
}

export default App
