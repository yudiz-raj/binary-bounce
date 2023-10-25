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
}