class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    ballAnimation() {
        this.oScene.tweens.add({
            targets: [this.oScene.logo.upper_ball, this.oScene.logo.lower_ball],
            y: "-=70",
            ease: "power2",
            duration: 500,
            repeat: -1,
            yoyo: true,
        });
        this.oScene.tweens.add({
            targets: [this.oScene.logo.upper_shadow_ball, this.oScene.logo.lower_shadow_ball],
            y: "+=30",
            ease: "power2",
            duration: 500,
            repeat: -1,
            yoyo: true,
        });
    }
    buttonAnimation(target) {
        console.log(target);
        this.oScene.tweens.add({
            targets: target,
            scale: "-=0.08",
            ease: "power2",
            duration: 200,
            yoyo: true,
            onComplete: () => {
                switch (target.name) {
                    case "home_button":
                        this.oScene.scene.stop("Level");
                        this.oScene.scene.start("Home");
                        break;
                    case "retry_button":
                        this.oScene.scene.restart("Level");
                        break;
                    case "play_button":
                        this.oScene.scene.stop("Home");
                        this.oScene.scene.start("Level");
                        break;
                    case "music_button":
                        if (target.texture.key == "music-on-button") {
                            target.setTexture("music-off-button");
                        }
                        else {
                            target.setTexture("music-on-button");
                        }
                        break;
                    case "sound_button":
                        if (target.texture.key == "sound-on-button") {
                            target.setTexture("sound-off-button");
                        }
                        else {
                            target.setTexture("sound-on-button");
                        }
                        break;

                    default:
                        break;
                }
            }
        });
    }
}