class SoundManager {
    constructor(oScene) {
        this.oScene = oScene;
        this.backgroundMusic = this.oScene.sound.add("background-music");
        this.clickSound = this.oScene.sound.add("click-sound").setVolume(3);
        this.ballCollisionSound = this.oScene.sound.add("ballCollision-sound");
        this.barrierCollisionSound = this.oScene.sound.add("barrierCollision-sound");
    }
    playSound(key, loop) {
        key.play();
        key.loop = loop;
    }
    stopSound(key, loop) {
        key.loop = loop
        key.stop();
    }
}