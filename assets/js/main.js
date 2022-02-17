'use strict'

const ready = () => {
	//============ Мобильное Меню  =============================
	const menuIconWrapper = document?.querySelector('.menu-icon-wrapper')
	const menuIcon = document?.querySelector('.menu-icon')
	const navList = document?.querySelector('.nav-menu')

	const mobileMenu = () => {
		menuIcon?.classList.toggle('active')
		navList?.classList.toggle('active')
	}

	menuIconWrapper?.addEventListener('click', mobileMenu)

	//============ Проверка на Touchscrin =============================
	let isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i)
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i)
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i)
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i)
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i)
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
		}
	};
	let body = document.querySelector('body')
	if (isMobile.any()) {
		body.classList.add('touch')
	} else {
		body.classList.add('mouse')
	}
}

// ===================== Accordion ==========================
const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control')
			const content = self.querySelector('.accordion__content')

			self.classList.toggle('open')

			// если открыт аккордеон
			if (self.classList.contains('open')) {
				control.setAttribute('aria-expanded', true)
				content.setAttribute('aria-hidden', false)
				content.style.maxHeight = content.scrollHeight + 'px'
			} else {
				control.setAttribute('aria-expanded', false)
				content.setAttribute('aria-hidden', true)
				content.style.maxHeight = null
			}
		})
	})

document.addEventListener("DOMContentLoaded", ready)
