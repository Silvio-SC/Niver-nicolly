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
        
        // Estado inicial (começa tocando devido ao 'autoplay' no HTML)
        let isPlaying = true; 

        // Função para alternar entre Tocar e Pausar
        function togglePlayPause() {
            if (isPlaying) {
                // Se estiver tocando, pausa o áudio
                audioPlayer.pause();
                // toggleButton.textContent = 'Tocar Música'; // Muda o texto do botão
                isPlaying = false;
                console.log('Música pausada.');
            } else {
                // Se estiver pausado, toca o áudio
                // O método play() só funciona se o arquivo for carregado corretamente
                audioPlayer.play()
                    .then(() => {
                        // toggleButton.textContent = 'Pausar Música'; // Muda o texto do botão
                        isPlaying = true;
                        console.log('Música tocando.');
                    })
                    .catch(error => {
                        // Trata o erro de autoplay bloqueado pelo navegador
                        console.error('Erro ao tentar tocar o áudio. O navegador pode ter bloqueado o autoplay.', error);
                        alert('O áudio foi bloqueado. Por favor, interaja com a página para tocar.');
                        // Tenta definir o estado para 'pausado' para sincronizar o botão
                        isPlaying = false;
                        // toggleButton.textContent = 'Tocar Música';
                    });
            }
        }

        // Adiciona o listener de evento para o botão
        toggleButton.addEventListener('click', togglePlayPause);
        
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


//  let player;
        
//     function onYouTubeIframeAPIReady() {
//         player = new YT.Player('musicId', {
//             events: {
//                 'onReady': onPlayerReady
//             }
//         });
//     }

//         function togglePlayPause() {
//         if (!player) return; 

//         if (player.getPlayerState() === YT.PlayerState.PLAYING) {
//             player.pauseVideo();
//             console.log('Vídeo pausado.');
//         } else {
//             player.playVideo();
//             console.log('Vídeo tocando.');
//         }
//     }

//     function onPlayerReady(event) {
//         const toggleButton = document.querySelector('.music-toggle-button');

//         event.target.mute(); // Muta o vídeo
//         event.target.playVideo(); // Inicia a reprodução
    
//         // Opcional: Desmuta o vídeo na primeira interação do botão
//         let isMuted = true;

//         toggleButton.addEventListener('click', () => {
//             if (isMuted) {
//                 event.target.unMute(); // Desmuta na primeira interação
//             isMuted = false;
//         }
//         togglePlayPause();
//     }
//   )}



