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
const accordions = document.querySelectorAll('.accordion')

accordions.forEach(el => {
	el.addEventListener('click', (e) => {
		const self = e.currentTarget
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

// ===================== Tabs ==========================
const tabs = document.querySelector('.tabs')
const tabsBtn = document.querySelectorAll('.tabs__btn')
const tabsContent = document.querySelectorAll('.tabs__content')

if (tabs) {
	tabs.addEventListener('click', (e) => {
		if (e.target.classList.contains('tabs__btn')) {
			const tabsPath = e.target.dataset.tabsPath
			tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') })
			document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active')
			tabsHandler(tabsPath)
		}

		if (e.target.classList.contains('tabs__arrow--prev')) {
			let activeBtn = document.querySelector('.tabs__btn--active')
			let activeParent = activeBtn.closest('.tabs__item')
			let previousParent = activeParent.previousElementSibling

			if (previousParent) {
				let prevActive = previousParent.querySelector('.tabs__btn')
				tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') })
				prevActive.classList.add('tabs__btn--active')

				let path = prevActive.dataset.tabsPath
				tabsHandler(path)
			}
		}

		if (e.target.classList.contains('tabs__arrow--next')) {
			let activeBtn = document.querySelector('.tabs__btn--active')
			let activeParent = activeBtn.closest('.tabs__item')
			let nextParent = activeParent.nextElementSibling

			if (nextParent) {
				let nextActive = nextParent.querySelector('.tabs__btn')
				tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') })
				nextActive.classList.add('tabs__btn--active')

				let path = nextActive.dataset.tabsPath
				tabsHandler(path)
			}
		}
	});
}

const tabsHandler = (path) => {
	tabsContent.forEach(el => { el.classList.remove('tabs__content--active') })
	document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active')
};

// ================== Swiper ============================
// const swiper = new Swiper('.swiper', {
// 	// Optional parameters
// 	// direction: 'vertical',
// 	loop: true,

// 	// If we need pagination
// 	pagination: {
// 		el: '.swiper-pagination',
// 	},

// 	// Navigation arrows
// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	},

// 	// And if we need scrollbar
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 	},
// });

document.addEventListener("DOMContentLoaded", ready)
