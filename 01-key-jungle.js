window.addEventListener('keydown', playAudio)
window.addEventListener('keydown', pauseAudio)

function pauseAudio (e) {
    const audios = document.querySelectorAll('audio');
    const pauseButton = document.querySelector('.pauseContainer')
    if (e.keyCode === 80) audios.forEach(function (audio) {
        audio.pause();
        pauseButton.classList.toggle('playing')
        pauseButton.addEventListener('transitionend', reverseTransition)
    });
}


function playAudio (e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const animals = document.querySelector(`div[data-key='${e.keyCode}']`);
    if (!audio) return;
    animals.classList.toggle('playing');
    e.keyCode === 67 ? audio.currentTime = 18 : audio.currentTime = 2 ;
    audio.play();
    audio.loop = false
}
function reverseTransition(){
    this.classList.remove('playing')
}

const contenedor = document.querySelectorAll('.animal')
contenedor.forEach(animal => animal.addEventListener('transitionend', reverseTransition))