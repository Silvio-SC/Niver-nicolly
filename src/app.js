const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

const render = (days, hours, minutes, seconds) => {
  daysElement.innerHTML = String(days).padStart("2", 0);
  hoursElement.innerHTML = String(hours).padStart("2", 0);
  minutesElement.innerHTML = String(minutes).padStart("2", 0);
  secondsElement.innerHTML = String(seconds).padStart("2", 0);
};

const countdown = () => {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const targetDate = new Date(2025, 10, 28, 19, 0, 0);

  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  render(days, hours, minutes, seconds);
};

countdown();
setInterval(countdown, 1000);

const audioPlayer = document.getElementById('musicId');
const toggleButton = document.querySelector('.music-toggle-button');
const displayButton = document.querySelector('.button-display')
const displayButtonPlay = document.querySelector('.play')
const displayMusic = document.querySelector('.musicOrNot')
        
  // Estado inicial (começa tocando devido ao 'autoplay' no HTML)
  let isPlaying = false; 

  // Função para alternar entre Tocar e Pausar
  
  function display () {
    displayMusic.style.display = 'none';
  }

  displayButton.addEventListener('click', display );

  function togglePlayPause() {
      if (isPlaying) {
          audioPlayer.pause();
          isPlaying = false;
          console.log('Música pausada.');
      } else {
          audioPlayer.play()
              .then(() => {
                  isPlaying = true;
                  console.log('Música tocando.');
              })
              .catch(error => {
                  console.error('Erro ao tentar tocar o áudio. O navegador pode ter bloqueado o autoplay.', error);
                  alert('O áudio foi bloqueado. Por favor, interaja com a página para tocar.');
                  isPlaying = false;
              });
      }
  }

  // Adiciona o listener de evento para o botão
  toggleButton.addEventListener('click', togglePlayPause);
  displayButtonPlay.addEventListener('click', togglePlayPause);
  
  // Opcional: Atualiza o texto do botão se o autoplay falhar
  audioPlayer.addEventListener('pause', () => {
      if (audioPlayer.currentTime > 0) { // Garante que não é o início
          // toggleButton.textContent = 'Tocar Música';
          isPlaying = false;
      }
  });
  audioPlayer.addEventListener('play', () => {
      //  toggleButton.textContent = 'Pausar Música';
      isPlaying = true;
  });