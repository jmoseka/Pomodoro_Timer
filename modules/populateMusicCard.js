/* eslint-disable no-plusplus */
const audio = document.querySelector('#audio');
const prevBtn = document.querySelector('#prev-music');
const nextBtn = document.querySelector('#next-music');
const bgMusicList = document.querySelector('.bg-music-list');
const musicTitleEl = document.querySelector('#music-title');
const playBtn = document.querySelector('#play-music');
const progress = document.querySelector('.progress');

let songIndex = 0;
const noSong = 'No song selected';

const cardList = [
  {
    name: 'Classic',
    alt: 'choir playing violin',
  },
  {
    name: 'Nature',
    alt: 'A photo of waterfall',
  },
  {
    name: 'Lofi',
    alt: 'Animated boy chilling by the window',
  },
];

const isMusicPlaying = {
  isClassical: false,
  isNature: false,
  isLofi: false,
};

const classicalMusic = [
  {
    title: 'Foggy countryside',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/Foggy-Countryside.mp3?raw=true',
  },
  {
    title: 'Prelude',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/classical-prelude.mp3?raw=true',
  },
  {
    title: 'Awakening dew',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/classical-awakening.mp3?raw=true',
  },
  {
    title: 'Andate',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/classical-andate.mp3?raw=true',
  },
];

const natureMusic = [
  {
    title: 'Birds of elm',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/The-Birds-World-Elm-Lake.mp3?raw=true',
  },
  {
    title: 'Contemplate the stars',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/09-Meydan-Contemplate-the-stars.mp3?raw=true',
  },
  {
    title: 'A gentle reminder',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/A-Gentle-Reminder.mp3?raw=true',
  },

  {
    title: 'Fly away',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/Fly-Away-When-The-Fog-Settled-Down.mp3?raw=true',
  },

  {
    title: 'Sonido Ambiente',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/sonido-ambiente.mp3?raw=true',
  },

  {
    title: 'Evening Improvisation',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/Evening-Improvisation-with-Ethera.mp3?raw=true',
  },
];

const lofiMusic = [
  {
    title: 'H.K trap',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/hk.mp3?raw=true',
  },
  {
    title: 'Jazy hiphop',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/jazzy-hiphop.mp3?raw=true',
  },
  {
    title: 'Coding night',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/coding-night.mp3?raw=true',
  },
  {
    title: 'The untitled',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/untitled.mp3?raw=true',
  },
  {
    title: 'Lofi study',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/lofi-study.mp3?raw=true',
  },

  {
    title: 'Sleepy cat',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/sleepy-cat.mp3?raw=true',
  },
  {
    title: 'Chill',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/chill.mp3?raw=true',
  },

  {

    title: 'Upbeat',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/upbeat.mp3?raw=true',
  },

  {
    title: 'Empty mind',
    mp3: 'https://github.com/jmoseka/Pomodoro_Timer/blob/feature-music/music/empty-mind.mp3?raw=true',
  },
];

const stop = () => {
  audio.pause();
  audio.currentTime = 0;
  document.querySelector('.icon-play').classList.add('fa-play');
};

function loadSong(song) {
  audio.src = song;
}

const playSong = () => {
  document.querySelector('.icon-play').classList.add('fa-pause');
  document.querySelector('.icon-play').classList.remove('fa-play');

  audio.addEventListener('loadedmetadata', () => {
    audio.play();
  });
};

const pause = () => {
  document.querySelector('.icon-play').classList.add('fa-play');
  document.querySelector('.icon-play').classList.remove('fa-pause');
  audio.pause();
};

const prevSong = () => {
  if (isMusicPlaying.isClassical) {
    songIndex--;
    if (songIndex < 0) {
      songIndex = classicalMusic.length - 1;
    }

    loadSong(classicalMusic[songIndex].mp3);
    playSong();
    musicTitleEl.textContent = classicalMusic[songIndex].title;
  }

  if (isMusicPlaying.isNature) {
    songIndex--;
    if (songIndex < 0) {
      songIndex = natureMusic.length - 1;
    }

    loadSong(natureMusic[songIndex].mp3);
    playSong();
    musicTitleEl.textContent = natureMusic[songIndex].title;
  }

  if (isMusicPlaying.isLofi) {
    songIndex--;
    if (songIndex < 0) {
      songIndex = lofiMusic.length - 1;
    }

    loadSong(lofiMusic[songIndex].mp3);
    playSong();
    musicTitleEl.textContent = lofiMusic[songIndex].title;
  }
};

const nextSong = () => {
  if (isMusicPlaying.isClassical) {
    songIndex++;
    if (songIndex > classicalMusic.length - 1) {
      songIndex = 0;
    }

    loadSong(classicalMusic[songIndex].mp3);
    musicTitleEl.textContent = classicalMusic[songIndex].title;
    playSong();
  }

  if (isMusicPlaying.isNature) {
    songIndex++;
    if (songIndex > natureMusic.length - 1) {
      songIndex = 0;
    }

    loadSong(natureMusic[songIndex].mp3);
    musicTitleEl.textContent = natureMusic[songIndex].title;
    playSong();
  }

  if (isMusicPlaying.isLofi) {
    songIndex++;
    if (songIndex > lofiMusic.length - 1) {
      songIndex = 0;
    }

    loadSong(lofiMusic[songIndex].mp3);
    musicTitleEl.textContent = lofiMusic[songIndex].title;
    playSong();
  }
};

const updateProgress = (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
};

audio.addEventListener('ended', nextSong);
audio.addEventListener(('timeupdate'), updateProgress);
prevBtn.addEventListener(('click'), prevSong);
nextBtn.addEventListener(('click'), nextSong);
playBtn.addEventListener(('click'), () => {
  if (isMusicPlaying.isClassical || isMusicPlaying.isNature || isMusicPlaying.isLofi) {
    if (playBtn.querySelector('.icon-play').classList.contains('fa-pause')) {
      pause();
    } else {
      playSong();
    }
  }
});

const populateMusicCard = () => {
  cardList.forEach((card) => {
    const nameLowercase = card.name.toLocaleLowerCase();
    const musicCard = document.createElement('li');
    musicCard.classList.add('music-card');
    musicCard.classList.add(`${nameLowercase}`);
    musicCard.innerHTML = `
    <div class="music-card__img">
    <img src="images/${nameLowercase}.jpg" alt="${card.alt}" />
    </div>
    <div class="music-card__desc">
    <h3>${card.name === 'Nature' ? `${card.name} & Ambience` : card.name}</h3>
    <h4 class="hidden">Title song</h4>
    </div>`;
    bgMusicList.append(musicCard);

    musicCard.addEventListener(('click'), () => {
      const cardClassic = document.querySelector('.classic');
      const cardNature = document.querySelector('.nature');
      const cardLofi = document.querySelector('.lofi');

      if (musicCard.classList.contains('classic')) {
        musicCard.classList.toggle('music-active');

        if (!musicCard.classList.contains('music-active')) {
          isMusicPlaying.isClassical = false;
          stop();
          musicTitleEl.textContent = noSong;
        } else {
          loadSong(classicalMusic[0].mp3);
          playSong();
          musicTitleEl.textContent = classicalMusic[0].title;
          isMusicPlaying.isClassical = true;
        }
        cardNature.classList.remove('music-active');
        cardLofi.classList.remove('music-active');
        isMusicPlaying.isNature = false;
        isMusicPlaying.isLofi = false;
      } else if (musicCard.classList.contains('nature')) {
        musicCard.classList.toggle('music-active');

        if (!musicCard.classList.contains('music-active')) {
          isMusicPlaying.isNature = false;
          stop();
          musicTitleEl.textContent = noSong;
        } else {
          loadSong(natureMusic[0].mp3);
          playSong();
          musicTitleEl.textContent = natureMusic[0].title;
          isMusicPlaying.isNature = true;
        }
        cardClassic.classList.remove('music-active');
        cardLofi.classList.remove('music-active');
        isMusicPlaying.isClassical = false;
        isMusicPlaying.isLofi = false;
      } else if (musicCard.classList.contains('lofi')) {
        musicCard.classList.toggle('music-active');

        if (!musicCard.classList.contains('music-active')) {
          isMusicPlaying.isLofi = false;
          stop();
          musicTitleEl.textContent = noSong;
        } else {
          loadSong(lofiMusic[0].mp3);
          playSong();
          musicTitleEl.textContent = lofiMusic[0].title;
          isMusicPlaying.isLofi = true;
        }
        cardNature.classList.remove('music-active');
        cardClassic.classList.remove('music-active');
        isMusicPlaying.isClassical = false;
        isMusicPlaying.isNature = false;
      }
    });
  });
};

export default populateMusicCard;
