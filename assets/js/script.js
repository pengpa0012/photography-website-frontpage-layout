

const navBurger = document.querySelector('.nav-burger')
const navLine = document.querySelectorAll('.nav-burger .line')
const navContent = document.querySelector('.nav-content')


navBurger.addEventListener('click', ()=>{
	console.log('test')
	navContent.classList.toggle('active')
	navLine.forEach(line => {
		line.classList.toggle('active')
	})

})