import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', function(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});

window.onload = function() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime));
  }
};
