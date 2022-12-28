import musicOperation from './music.js';

const audio = document.querySelector('#audio');

const bgMusicList = document.querySelector('.bg-music-list');

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
    <h3>${card.name}</h3>
    <h4 class="hidden">Title song</h4>
    </div>`;
    bgMusicList.append(musicCard);

    musicCard.addEventListener(('click'), () => {
      const stop = () => {
        audio.pause();
        audio.currentTime = 0;
      };
      const cardClassic = document.querySelector('.classic');
      const cardNature = document.querySelector('.nature');
      const cardLofi = document.querySelector('.lofi');
      if (musicCard.classList.contains('classic')) {
        musicCard.classList.toggle('music-active');
        if (!musicCard.classList.contains('music-active')) {
          stop();
        }
        cardNature.classList.remove('music-active');
        cardLofi.classList.remove('music-active');
      } else if (musicCard.classList.contains('nature')) {
        musicCard.classList.toggle('music-active');
        if (!musicCard.classList.contains('music-active')) {
          stop();
        }
        cardClassic.classList.remove('music-active');
        cardLofi.classList.remove('music-active');
      } else if (musicCard.classList.contains('lofi')) {
        musicCard.classList.toggle('music-active');
        if (!musicCard.classList.contains('music-active')) {
          stop();
        }
        cardNature.classList.remove('music-active');
        cardClassic.classList.remove('music-active');
      }
    });
  });
};

export default populateMusicCard;
