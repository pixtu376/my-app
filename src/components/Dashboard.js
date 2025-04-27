import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import '../Styles/PersonalAccount.css'

const Dashboard = () => {
	const { user } = useAuth()

	// Если пользователь не авторизован, перенаправляем на страницу входа
	if (!user) {
		return <Navigate to='/LoginPage' replace />
	}

	const renderValue = (value) => {
		if (!value || value === 'Не заполнено') {
			return <span className='not-specified'>не указан</span>
		}
		return value
	}

	return (
		<div className='personal-account'>
			<div className='account-container'>
				<aside className='account-sidebar'>
					<nav>
						<ul>
							<li className='active'>Уведомления</li>
							<li>Настройки</li>
							<li>Мои данные</li>
							<li className='user-name'>
								{user?.firstName || user?.email || 'Пользователь'}
							</li>
						</ul>
					</nav>
				</aside>

				<main className='account-content'>
					<div className='top-row'>
						<section className='main-info-block'>
							<h2>Основная информация</h2>
							<div className='info-table'>
								<div className='info-row'>
									<span className='info-label'>ФИО</span>
									<span className='info-value'>
										{renderValue(
											`${user?.lastName || ''} ${user?.firstName || ''} ${user?.middleName || ''}`.trim() || 'Не заполнено'
										)}
									</span>
								</div>
								<div className='info-row'>
									<span className='info-label'>Дата рождения</span>
									<span className='info-value'>01.01.2023</span>
								</div>
								<div className='info-row'>
									<span className='info-label'>Пол</span>
									<span className='info-value'>Мужской</span>
								</div>
							</div>
						</section>

						<section className='documents-block'>
							<h2>Мои документы</h2>
							<div className='info-section'>
								<h3>Тип документа</h3>
								<p className='info-value'>{renderValue('Не заполнено')}</p>
							</div>

							<div className='info-section'>
								<h3>Серия и номер</h3>
								<p className='info-value'>{renderValue('Не заполнено')}</p>
							</div>

							<div className='info-section'>
								<h3>Дата выдачи</h3>
								<p className='info-value'>{renderValue('Не заполнено')}</p>
							</div>

							<div className='info-section'>
								<h3>Кем выдан</h3>
								<p className='info-value'>{renderValue('Не заполнено')}</p>
							</div>

							<div className='info-section'>
								<h3>СНИЛС</h3>
								<p className='info-value'>{renderValue('Не заполнено')}</p>
							</div>
						</section>
					</div>

					<section className='address-block'>
						<h2>Адрес регистрации</h2>
						<div className='address-grid'>
							<div className='address-item'>
								<span>Населённый пункт</span>
								<p className='info-value'>{renderValue('Не заполнено')}</p>
							</div>
							<div className='address-item'>
								<span>Улица</span>
								<p className='info-value'>{renderValue('Не заполнено')}</p>
							</div>
							<div className='address-item'>
								<span>Дом</span>
								<p className='info-value'>{renderValue('Не заполнено')}</p>
							</div>
							<div className='address-item'>
								<span>Корпус</span>
								<p className='info-value'>{renderValue('Не заполнено')}</p>
							</div>
							<div className='address-item'>
								<span>Квартира</span>
								<p className='info-value'>{renderValue('Не заполнено')}</p>
							</div>
						</div>
					</section>

					<section className='applications-block'>
						<h2>Мои заявления</h2>
						<div className='applications-list'>
							<div className='application-item'>
								<div className='application-info'>
									<p className='service-name'>Регистрация и ликвидация юр. лиц</p>
									<p className='registration-date'>12.04.24</p>
									<p className='total-check'>Мнота</p>
								</div>
								<div className='application-actions'>
									<button className='status-btn'>Статус</button>
									<button className='cancel-btn'>Отменить заявку</button>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	)
}

export default Dashboard
