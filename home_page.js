const faces = ['john', 'paul', 'george', 'ringo']
const bars = document.querySelectorAll('.bar')
const urls = []
let albums

async function main() {
	let i = 0
	for (const face of faces) {
		for (let n = 1; n <= faces.length; n++) {
			urls.push(`webp/faces/${face}${i}.webp`)
		}
	}

	urls.push(
		'webp/faces/John.webp',
		'webp/faces/Paul.webp',
		'webp/faces/George.webp',
		'webp/faces/Ringo.webp',
	)

	changeFaces()
	setInterval(changeFaces, 1000)

	window.addEventListener('scroll', frequencyAnimation)

	let albumsContainer = document.getElementById('discography')
	let response = await fetch('albums_info.json')
	if (response.ok) {
		let data = await response.json()
		albums = data.albums
	}

	if (albums) {
		for (const album of albums) {
			urls.push(`webp/faces/${album.cover}.webp`, `webp/faces/${album.vinyl}.webp`)

			let albumDiv = document.createElement('div')
			albumDiv.classList.add('album')

			let albumImage = document.createElement('div')
			albumImage.classList.add('image')
			albumImage.style.setProperty('--cover', `url("webp/albums/${album.cover}.webp")`)
			albumImage.style.setProperty('--vinyl', `url("webp/albums/${album.vinyl}.webp")`)
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

	await preload(urls)
	document.getElementById('loader').classList.add('hidden')
	document.body.classList.remove('loading')
}

function preload(urls) {
	return Promise.all(urls.map((src) => new Promise((resolve) => {
		const img = new Image()
		img.onload = img.onerror = resolve
		img.src = src
	})))
}


function changeFaces() {
	let m = 0

	for (const face of faces) {
		const number = Math.floor(Math.random() * faces.length) + 1

		document.getElementById('face' + (m + 1)).src = 'webp/faces/' + face + number + '.webp'
		m++
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