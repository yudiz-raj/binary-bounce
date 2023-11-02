class InputManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    buttonClick(button) {
        button.on("pointerover", () => {
            this.oScene.input.setDefaultCursor("pointer");
            button.setScale(1.05, 1.05);
        });
        button.on("pointerout", () => {
            this.oScene.input.setDefaultCursor("default");
            button.setScale(1, 1);
        });
        button.setInteractive().on("pointerdown", () => {
            this.oScene.oSoundManager.playSound(this.oScene.oSoundManager.clickSound, false);
            this.oScene.input.setDefaultCursor("default");
            this.oScene.oTweenManager.buttonAnimation(button);
        });
    }
}