let faces = ['john', 'paul', 'george', 'ringo'];

function changeFaces() {
    let i = 0;

    for (let face of faces) {
        let number = Math.floor(Math.random() * 5) + 1;

        document.getElementById('face' + (i + 1)).src = 'webp/faces/' + face + number + '.webp';
        i++;
    }
}
changeFaces();
setInterval(changeFaces, 1000);



let bars = document.querySelectorAll('.bar')

function frequencyAnimation() {
    let scrollPosition = window.scrollY;
    let maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    let progress = scrollPosition / maxScroll;
    let visibleBars = Math.floor((progress - 0.1) * bars.length *2);

    for (let [index, bar] of bars.entries()) {
        if (index < visibleBars) {
            bar.style.opacity = 1;
        } else {
            bar.style.opacity = 0;
        }
    }
}
window.addEventListener('scroll', frequencyAnimation);



fetch('albums_info.json')
    .then(response => response.json())
    .then(data => {

        let albumsContainer = document.getElementById('discography');

        for(let album of data.albums){
            let albumDiv = document.createElement('div');
            albumDiv.classList.add('album');
            
            let albumCover = document.createElement('img');
            albumCover.src = `webp/covers/${album.cover}.webp`;
            albumCover.alt = album.name;
            let albumName = document.createElement('p');
            albumName.textContent = album.name;
            let albumYear = document.createElement('p');
            albumYear.textContent = album.year;
            let albumDuration = document.createElement('p');
            albumDuration.textContent = album.duration;

            albumDiv.append (albumCover, albumName, albumYear, albumDuration);
            albumsContainer.appendChild(albumDiv);

        }
    })
    .catch(error => console.log('Error:', error));
