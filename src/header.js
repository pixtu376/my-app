import React from 'react'
import logo from './Image/logo.png'
import user from './Image/User.png'
import { Link } from 'react-router-dom'
import './Styles/header.css'


function Header () {
    return (
			<div className='header'>
				<div className='logo'>
					<img src={logo} alt='' className='imgHeader'></img>
					<p className='textLogo'>Nova</p>
				</div>
				<div className='buttons'>
					<button>
						<Link to='/Kalkulate'>Калькулятор</Link>
					</button>
					<button>
						<Link to='/ClientFirstPage'>Для физ. лиц</Link>
					</button>
					<button>
						<Link to='/ClientSecondPage'>Для юр. лиц</Link>
					</button>
				</div>
				<button className='User'>
					<Link to='/dashboard'>
						<img className='Userlogo' src={user} alt=''></img>
						<p>Личный кабинет</p>
					</Link>
				</button>
			</div>
		)
}

export default Header