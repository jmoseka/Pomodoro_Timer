/* eslint-disable no-plusplus */
const playBtn = document.querySelector('#play-music');
const prevBtn = document.querySelector('#prev-music');
const nextBtn = document.querySelector('#next-music');
const title = document.querySelector('#music-title');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const musicContainer = document.querySelector('.music-container');
const musicCard = document.querySelector('.music-card');
const songs = ['chill', 'upbeat', 'empty-mind'];
const audio = document.querySelector('#audio');
const musicOperation = () => {
  
  let songIndex = 2;

  // initially load song

  const loadSong = (song) => {
    title.textContent = song;
    // audio.src = `music/${song}.mp3`;
    // audio.src = 'https://www.mediafire.com/file/yh98gq9m40rwfhv/chill.mp3/file';
  };

  const playSong = () => {
    playBtn.querySelector('.icon-play').classList.add('fa-pause');
    audio.play();
  };

  const pauseSong = () => {
    playBtn.querySelector('.icon-play').classList.add('fa-play');
    playBtn.querySelector('.icon-play').classList.remove('fa-pause');
    audio.pause();
  };

  const prevSong = () => {
    songIndex--;
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
  };

  const nextSong = () => {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
  };

  const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  };

  const setProgress = (e) => {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const { duration } = audio;

    audio.currentTime = (clickX / width) * duration;
  };

  // event listeners

  // musicCard.forEach((card) => {
  //   card.addEventListener('click', (e) => {
  //     if (e.target.contains('classic')) {
  //       const musicActive = card.classList.contains('music-active');
  //       e.classList.toggle('music-active');

  //       if (!musicActive) {
  //         playSong();
  //       } else {
  //         pauseSong();
  //         audio.currentTime = 0;
  //       }
  //     }
  //   });
  // });

  // musicCard.addEventListener(('click'), () => {
  //   const musicActive = musicCard.classList.contains('music-active');
  //   musicCard.classList.toggle('music-active');

  //   if (!musicActive) {
  //     playSong();
  //   } else {
  //     pauseSong();
  //     audio.currentTime = 0;
  //   }
  // });

  playBtn.addEventListener(('click'), () => {
    if (playBtn.querySelector('.icon-play').classList.contains('fa-pause')) {
      musicContainer.classList.remove('playing-music');
      pauseSong();
    } else {
      // playBtn.querySelector('.icon-play').classList.toggle('fa-play');
      playBtn.querySelector('.icon-play').classList.add('fa-pause');
      playSong();
    }
    // if (isPlaying) {
    //   playSong();
    // } else {
    //   pauseSong();
    // }
  });

  prevBtn.addEventListener(('click'), prevSong);
  nextBtn.addEventListener(('click'), nextSong);
  audio.addEventListener(('timeupdate'), updateProgress);
  progressContainer.addEventListener(('click'), setProgress);

  audio.addEventListener('ended', nextSong);

  loadSong(songs[songIndex]);
};
export default musicOperation;