import Vimeo from '@vimeo/player';

const player = new Vimeo('vimeo-player');

player.on('timeupdate', function (event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});

document.addEventListener('DOMContentLoaded', function () {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime));
  }
});
import throttle from 'lodash.throttle';

player.on(
  'timeupdate',
  throttle(function (event) {
    const currentTime = event.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);
