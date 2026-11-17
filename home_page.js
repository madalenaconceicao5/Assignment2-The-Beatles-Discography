const faces = ['john', 'paul', 'george', 'ringo']
const bars = document.querySelectorAll('.bar')

async function main() {
	changeFaces()
	setInterval(changeFaces, 1000)

	window.addEventListener('scroll', frequencyAnimation)

	let albumsContainer = document.getElementById('discography')
	let response = await fetch('albums_info.json')
	let albums = (response.ok && await response.json())?.albums

	if (albums) {
		for (const album of albums) {
			let albumDiv = document.createElement('div')
			albumDiv.classList.add('album')

			let albumImage = document.createElement('div')
			albumImage.classList.add('image')
			albumImage.style.setProperty('--cover', `url("webp/${album.cover}.webp")`)
			albumImage.style.setProperty('--vinyl', `url("webp/${album.vinyl}.webp")`)
			let albumNameYear = document.createElement('p')
			albumNameYear.textContent = `${album.name} (${album.year})`
			let albumDuration = document.createElement('p')
			albumDuration.textContent = `Duration: ${album.duration}`

			albumDiv.append(albumImage, albumNameYear, albumDuration)
			albumsContainer.appendChild(albumDiv)
		}
	} else {
		albumsContainer.textContent = 'Could not load albums.'
	}
}


function changeFaces() {
	let i = 0

	for (const face of faces) {
		const number = Math.floor(Math.random() * 5) + 1

		document.getElementById('face' + (i + 1)).src = 'webp/faces/' + face + number + '.webp'
		i++
	}
}

function frequencyAnimation() {
	const scrollPosition = window.scrollY
	const maxScroll = document.documentElement.scrollHeight - window.innerHeight
	const progress = scrollPosition / maxScroll
	let visibleBars
	if (window.matchMedia("(max-width: 600px)").matches) {
		visibleBars = Math.floor((progress) * bars.length * 6)
	} else {
		visibleBars = Math.floor((progress - 0.05) * bars.length * 5)
	}

	for (const [index, bar] of bars.entries()) {
		if (index < visibleBars) {
			bar.style.opacity = 1
		} else {
			bar.style.opacity = 0
		}
	}
}

main()