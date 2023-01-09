window.addEventListener('DOMContentLoaded', () => {
	const navItem = document.querySelectorAll('.nav_item')

	function isNavItemActive() {
		for (let i = 0; i < navItem.length; i++) {
			navItem[i].classList.contains('nav_item__active')
				? navItem[i].classList.remove('nav_item__active')
				: null
		}
	}

	navItem.forEach(item => {
		item.addEventListener('click', () => {
			isNavItemActive()
			item.classList.add('nav_item__active')
		})
	})
})
