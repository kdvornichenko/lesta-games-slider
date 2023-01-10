window.addEventListener('DOMContentLoaded', () => {
	const data = {
		ussr: {
			title: 'ссср',
			count: '141',
			models: 'Т-34, ИС, ИС-7, КВ-1, ИСУ-152',
		},
		germany: {
			title: 'ссср',
			count: '141',
			models: 'Т-34, ИС, ИС-7, КВ-1, ИСУ-152',
		},
		usa: {
			title: 'ссср',
			count: '141',
			models: 'Т-34, ИС, ИС-7, КВ-1, ИСУ-152',
		},
		france: {
			title: 'ссср',
			count: '141',
			models: 'Т-34, ИС, ИС-7, КВ-1, ИСУ-152',
		},
		uk: {
			title: 'ссср',
			count: '141',
			models: 'Т-34, ИС, ИС-7, КВ-1, ИСУ-152',
		},
		czech: {
			title: 'ссср',
			count: '141',
			models: 'Т-34, ИС, ИС-7, КВ-1, ИСУ-152',
		},
	}

	const nav = document.querySelector('.nav')
	const navItem = nav.querySelectorAll('.nav_item')

	const navArrowNext = document.querySelector('.nav_arrow__next')
	const navArrowPrev = document.querySelector('.nav_arrow__prev')

	const technic = document.querySelector('.technic')
	const title = technic.querySelector('.technic_title')
	const count = technic.querySelector('.technic_count')
	const countSubtext = technic.querySelector('.technic_count-subtext')
	const models = technic.querySelector('.technic_text')

	navArrowNext.addEventListener('click', () => {
		onArrowClick('next')
	})
	navArrowPrev.addEventListener('click', () => {
		onArrowClick('prev')
	})

	function onArrowClick(arrow) {
		const activeItem = document.querySelector('.nav_item__active')

		if (arrow === 'next') {
			activeItem.nextElementSibling
				? activeItem.nextElementSibling.click()
				: nav.firstChild.nextSibling.click()
		}
		if (arrow === 'prev') {
			activeItem.previousElementSibling
				? activeItem.previousElementSibling.click()
				: nav.lastChild.previousSibling.click()
		}
	}

	function isNavItemActive() {
		for (let i = 0; i < navItem.length; i++) {
			navItem[i].classList.contains('nav_item__active')
				? navItem[i].classList.remove('nav_item__active')
				: null
		}
	}

	function setCountSubtext(country) {
		countSubtext.innerHTML = `${country} машина в игре`
	}

	function setTechnicVisibility(setParams) {
		technic.style.opacity = '0'

		setTimeout(() => {
			technic.style.opacity = '1'
			setParams()
		}, 300)
	}

	navItem.forEach(item => {
		item.addEventListener('click', () => {
			if (item.classList.contains('nav_item__active')) {
				return
			}

			const dataFlag = item.dataset.flag
			const currentFlag = data[dataFlag]

			setTechnicVisibility(setParams)

			function setParams() {
				title.innerText = currentFlag.title
				count.innerText = currentFlag.count

				switch (dataFlag) {
					case 'ussr':
						setCountSubtext('советская')
						break

					case 'germany':
						setCountSubtext('советская')
						break

					case 'usa':
						setCountSubtext('советская')
						break

					case 'france':
						setCountSubtext('советская')
						break

					case 'uk':
						setCountSubtext('советская')
						break

					case 'czech':
						setCountSubtext('советская')
						break

					default:
						setCountSubtext('советская')
						break
				}
			}

			isNavItemActive()
			item.classList.add('nav_item__active')
		})
	})
})
