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
    let visibleBars = Math.floor((progress - 0.05) * bars.length * 4);

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
            albumDiv.style.setProperty('--cover', `url("webp/${album.cover}.webp")`);
            albumDiv.style.setProperty('--vinyl', `url("webp/${album.vinyl}.webp")`);

            let albumNameYear = document.createElement('p');
            albumNameYear.textContent = `${album.name} (${album.year})`;
            let albumDuration = document.createElement('p');
            albumDuration.textContent = `Duration: ${album.duration}`;

            albumDiv.append (albumNameYear, albumDuration);
            albumsContainer.appendChild(albumDiv);

            console.log({
                album: album.name,
                cover: albumDiv.style.getPropertyValue('--cover'),
                vinyl: albumDiv.style.getPropertyValue('--vinyl')
            });
        }
    })
    .catch(error => console.log('Error:', error));
