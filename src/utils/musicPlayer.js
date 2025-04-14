export default class MusicPlayer {
  static WIN_SOUND = new Audio("./win.wav");
  static LOSE_SOUND = new Audio("./lose.wav");
  static DRAW_SOUND = new Audio("./draw.wav");
  static CLICK_SOUND = new Audio("./click.wav");
  static GAME_OVER_SOUND = new Audio("./game-over.wav");
  static isPlaying = false;
  static currentSound = null;

  static play(sound) {
    if (this.isPlaying) {
      this.currentSound.pause();
    }
    this.isPlaying = true;
    this.currentSound = sound;
    sound.play();
    console.log("Playing sound:", sound.src);
    sound.volume = 0.3; // Set volume to 30%
    sound.onended = () => {
      this.isPlaying = false;
    };
  }
}
