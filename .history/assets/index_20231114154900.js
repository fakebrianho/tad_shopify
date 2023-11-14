let imageIndex = 0 // start with the first image
const slides = document.querySelectorAll('.slide')
const enterPassword = document.querySelector('.nav_login')
const form = document.querySelector('#mainForm') // Add your form's ID
// function showSlides() {
// 	for (let i = 0; i < slides.length; i++) {
// 		slides[i].classList.remove('active') // hide all slides
// 	}

// 	imageIndex++
// 	if (imageIndex > slides.length) {
// 		imageIndex = 1 // reset to first image if it's the last one
// 	}

// 	slides[imageIndex - 1].classList.add('active') // show current image
// 	setTimeout(showSlides, 4000) // change image every 3 seconds
// }
// window.onload = function () {
// 	showSlides()
// }

enterPassword.addEventListener('click', () => {
	const comingSoon = document.querySelector('.content_comingSoon')
	const signUp = document.querySelector('.content_signUp')
	const passwordInput = document.querySelector('.content_subscribe')
	const input = passwordInput.querySelector('.emailPassword')
	input.type = 'password'
	form.action = '/password' // Change to the correct action for password submission
	input.classList.add('input-fade-out')
	setTimeout(() => {
		// Change placeholder text
		input.placeholder = 'PASSWORD'

		// Fade the new placeholder in
		input.classList.remove('input-fade-out')
		input.classList.add('input-fade-in')

		// Optionally, remove the fade-in class after it's complete to allow for future changes
		setTimeout(() => {
			input.classList.remove('input-fade-in')
		}, 500) // match this timeout to the duration of the fade-in transition
	}, 500) // m
	// input.placeholder = 'PASSWORD'
	comingSoon.classList.add('hidden')
	signUp.classList.add('hidden')
	passwordInput.classList.add('move_up')
})
