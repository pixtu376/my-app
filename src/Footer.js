import React from 'react'
import logo from './Image/logo.png'
import Vk from './Image/Vk.png'
import Tg from './Image/Tg.png'
import './Styles/footer.css'

function Footer() {
	return (
		<footer class='footer'>
			<div class='footer-container'>
				<div class='midle_column'>
					<div class='logo'>
						<img src={logo} alt='Nova Logo'></img>
						<p className='textLogo'>Nova</p>
					</div>
					<p>Юридическая фирма</p>
				</div>

				<div class='small_column'>
					<ul class='footer-links'>
						<li>
							<a href='https://github.com/pixtu376/Labs'>
								<p>О компании</p>
							</a>
						</li>
						<li>
							<a href='https://github.com/pixtu376/Labs'>
								<p>Услуги</p>
							</a>
						</li>
						<li>
							<a href='https://github.com/pixtu376/Labs'>
								<p>Цены</p>
							</a>
						</li>
						<li>
							<a href='https://github.com/pixtu376/Labs'>
								<p>Контакты</p>
							</a>
						</li>
					</ul>
				</div>

				<div class='column'>
					<div class='contact-info'>
						<div>
							<p>E-mail: NeObman@gmail.com</p>
						</div>
						<div>
							<img src={Vk} alt='VK'></img>
							<p>Мы во Вконтакте</p>
						</div>
						<div>
							<img src={Tg} alt='Telegram'></img>
							<p>Мы в Телеграме</p>
						</div>
					</div>
				</div>

				<div class='midle_column'>
					<div class='phone-numbers'>
						<p>+7 800 555 35 35</p>
						<p>Номер по Москве</p>
						<p>+7 800 555 36 52</p>
						<p>Позвонить в офисы</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
