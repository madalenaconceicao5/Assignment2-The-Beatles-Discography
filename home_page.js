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
    let visibleBars = Math.floor(progress * bars.length) - 10;

    for (let [index, bar] of bars.entries()) {
        if (index < visibleBars) {
            bar.style.opacity = 1;
        } else {
            bar.style.opacity = 0;
        }
    }
}
window.addEventListener('scroll', frequencyAnimation);