
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(960, 540, "background");

		// logo
		const logo = new LogoPrefab(this, 960, 588);
		this.add.existing(logo);

		// play_button
		const play_button = this.add.image(960, 919, "play-button");
		play_button.name = "play_button";
		play_button.setInteractive(this.input.makePixelPerfect());

		this.logo = logo;
		this.play_button = play_button;

		this.events.emit("scene-awake");
	}

	/** @type {LogoPrefab} */
	logo;
	/** @type {Phaser.GameObjects.Image} */
	play_button;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.oTweenManager = new TweenManager(this);
		this.oInputManager = new InputManager(this);
		this.oTweenManager.ballAnimation();
		this.particalAnimation();
		this.oInputManager.buttonClick(this.play_button);
		localStorage.setItem('shadowLeapBestScore', localStorage.getItem('shadowLeapBestScore') == undefined ? 0 : localStorage.getItem('shadowLeapBestScore'));

	}
	particalAnimation() {
		const createParticleEmitter = (texture, offsetX, offsetY, speed, scaleStart, scaleEnd, alphaSart, alphaEnd, ball, lifespanMin, lifespanMax) => {
			const particleSystem = this.add.particles();
			particleSystem.setTexture(texture);
			const emitter = particleSystem.createEmitter({
				speed: speed,
				scale: { start: scaleStart, end: scaleEnd },
				blendMode: 'ADD',
				alpha: { start: alphaSart, end: alphaEnd },
				lifespan: { min: lifespanMin, max: lifespanMax }
			});
			emitter.startFollow(ball, offsetX, offsetY);
			emitter.flow(0, 1);
			emitter.setGravityX(-200);
			return particleSystem;
		}
		this.bluePartical1 = createParticleEmitter("blue-large", 930, 570, 150, 1, 0, 1, 0, this.logo.lower_ball, 500, 1000);
		this.bluePartical2 = createParticleEmitter("blue-blur-medium", 990, 560, 150, 1, 0, 1, 0, this.logo.lower_ball, 500, 1000);
		this.bluePartical3 = createParticleEmitter("blue-blur-large", 990, 630, 150, 1, 0, 1, 0, this.logo.lower_ball, 500, 1000);
		this.bluePartical4 = createParticleEmitter("blue-fire", 920, 630, 80, 1, 0, 1, 0, this.logo.lower_ball, 500, 1000);
		this.bluePartical5 = createParticleEmitter("blue-large", 930, 570, 150, 1, 0, 0.1, 0, this.logo.lower_shadow_ball, 500, 1000);
		this.bluePartical6 = createParticleEmitter("blue-large", 990, 560, 150, 1, 0, 0.1, 0, this.logo.lower_shadow_ball, 500, 1000);
		this.bluePartical7 = createParticleEmitter("blue-blur-large", 990, 600, 150, 1, 0, 0.1, 0, this.logo.lower_shadow_ball, 500, 1000);
		this.bluePartical8 = createParticleEmitter("blue-fire", 920, 600, 80, 1, 0, 0.1, 0, this.logo.lower_shadow_ball, 500, 1000);
		this.redPartical1 = createParticleEmitter("red-large", 930, 570, 150, 1, 0, 1, 0, this.logo.upper_ball, 500, 1000);
		this.redPartical2 = createParticleEmitter("red-blur-medium", 990, 560, 150, 1, 0, 1, 0, this.logo.upper_ball, 500, 1000);
		this.redPartical3 = createParticleEmitter("red-blur-large", 990, 630, 150, 1, 0, 1, 0, this.logo.upper_ball, 500, 1000);
		this.redPartical4 = createParticleEmitter("red-fire", 920, 630, 150, 1, 0, 1, 0, this.logo.upper_ball, 500, 1000);
		this.bluePartical5 = createParticleEmitter("red-large", 930, 570, 150, 1, 0, 0.1, 0, this.logo.upper_shadow_ball, 500, 1000);
		this.bluePartical6 = createParticleEmitter("red-large", 990, 560, 150, 1, 0, 0.1, 0, this.logo.upper_shadow_ball, 500, 1000);
		this.bluePartical7 = createParticleEmitter("red-blur-large", 990, 600, 150, 1, 0, 0.1, 0, this.logo.upper_shadow_ball, 500, 1000);
		this.bluePartical8 = createParticleEmitter("red-fire", 920, 600, 80, 1, 0, 0.1, 0, this.logo.upper_shadow_ball, 500, 1000);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
