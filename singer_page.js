let urlParameters = new URLSearchParams(window.location.search)
let singer = urlParameters.get('singer')

let singers = {
	john: {
		name: "John Lennon",
		image: "webp/faces/John.webp",
		text: "John Lennon (1940–1980) was an English singer, songwriter, and founding member of The Beatles. Born in Liverpool, he became known for his distinctive voice, creative songwriting, and rebellious personality. Alongside Paul McCartney, he formed one of the most successful songwriting partnerships in music history. After the band split in 1970, Lennon pursued a solo career, releasing songs such as Imagine. He was also an outspoken peace activist and remains one of the most influential musicians of all time."
	},
	paul: {
		name: "Paul McCartney",
		image: "webp/faces/Paul.webp",
		text: "Paul McCartney (born 1942) is an English singer, songwriter, and multi-instrumentalist, best known as a member of The Beatles. Born in Liverpool, he played bass guitar and shared lead vocals and songwriting duties with John Lennon. Known for his melodic talent, he wrote some of the band's most famous songs, including Yesterday and Hey Jude. Following the band's breakup, he formed Wings and continued a successful solo career, becoming one of the most celebrated musicians in history."
	},
	george: {
		name: "George Harrison",
		image: "webp/faces/George.webp",
		text: "George Harrison (1943–2001) was an English musician, singer, and songwriter, best known as the lead guitarist of The Beatles. Born in Liverpool, he gradually developed his own songwriting style, contributing memorable songs such as Something and Here Comes the Sun. Deeply interested in Indian music and spirituality, he introduced Indian instruments and influences into the band's sound. After The Beatles, he pursued a successful solo career, releasing the acclaimed album All Things Must Pass."
	},
	ringo: {
		name: "Ringo Starr",
		image: "webp/faces/Ringo.webp",
		text: "Ringo Starr (born 1940) is an English musician, singer, and actor, best known as the drummer of The Beatles. Born Richard Starkey in Liverpool, he joined the band in 1962, bringing his distinctive drumming style and relaxed personality. Although primarily known for his percussion, he also sang lead vocals on songs such as Yellow Submarine and With a Little Help from My Friends. After the band's breakup, he pursued a solo career and became a successful entertainer, remaining an influential figure in popular music."
	},
}
let data = singers[singer]

document.getElementById('name').textContent = data.name
document.getElementById('image').src = data.image
document.getElementById('text').textContent = data.text
