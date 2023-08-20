import Audic from 'audic';

const path = '/Users/hc/Music/Music\ HC/';

const audic = new Audic(path + 'Franz Hlusek _ Jorge Nava - Cosmic Dreamer (Fast Distance Mix).mp3');
await audic.play();

audic.addEventListener('ended', () => {
	audic.destroy();
});