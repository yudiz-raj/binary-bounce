
// You can write more code here
let oParticalData = {
	texture: ["blue-large", "blue-blur-medium", "blue-blur-large", "blue-fire", "red-large", "red-blur-medium", "red-blur-large", "red-fire"],
	offsetX: [-40, 20, 40, -40, -40, 20, 40, -40],
	offsetY: [70, 60, 140, 150, -70, -60, -140, -150],
}
/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// body
		const body = this.add.container(0, 7);

		// container_background
		const container_background = this.add.container(0, -3);
		body.add(container_background);

		// lower_background
		const lower_background = this.add.rectangle(2, 551, 127.7, 128);
		lower_background.scaleX = 15;
		lower_background.scaleY = 4.27;
		lower_background.setOrigin(0, 0);
		lower_background.visible = false;
		lower_background.isFilled = true;
		lower_background.fillColor = 0;
		container_background.add(lower_background);

		// upper_background
		const upper_background = this.add.rectangle(2, 551, 127.7, 128);
		upper_background.scaleX = 15;
		upper_background.scaleY = 4.27;
		upper_background.setOrigin(0, 1);
		upper_background.isFilled = true;
		container_background.add(upper_background);

		// background
		const background = this.add.image(960, 536, "background");
		background.name = "background";
		container_background.add(background);

		// container_barriers
		const container_barriers = this.add.container(0, 1);
		body.add(container_barriers);

		// container_balls
		const container_balls = this.add.container(0, -7);
		body.add(container_balls);

		// container_particles
		const container_particles = this.add.container(0, -7);
		body.add(container_particles);

		// container_score
		const container_score = this.add.container(0, -7);
		body.add(container_score);

		// score_bar
		const score_bar = this.add.image(960, 63, "score-bar");
		container_score.add(score_bar);

		// score_text
		const score_text = this.add.text(834, 55, "", {});
		score_text.setOrigin(0, 0.5);
		score_text.text = "Score:   00 ";
		score_text.setStyle({ "align": "center", "color": "#431b59", "fontFamily": "Bungee", "fontSize": "40px", "fontStyle": "italic" });
		container_score.add(score_text);

		// container_result
		const container_result = this.add.container(0, -7);
		container_result.visible = false;
		body.add(container_result);

		// score_board
		const score_board = this.add.image(960, 496, "score-board");
		container_result.add(score_board);

		// retry_button
		const retry_button = this.add.image(1090, 690, "retry-button");
		retry_button.name = "retry_button";
		retry_button.setInteractive(this.input.makePixelPerfect());
		container_result.add(retry_button);

		// home_button
		const home_button = this.add.image(830, 690, "home-button");
		home_button.name = "home_button";
		home_button.setInteractive(this.input.makePixelPerfect());
		container_result.add(home_button);

		// best_score
		const best_score = this.add.text(961, 450, "", {});
		best_score.setOrigin(0.5, 0.5);
		best_score.text = "HIGH SCORE: 00";
		best_score.setStyle({ "align": "center", "color": "#ffe7c5", "fontFamily": "Bungee", "fontSize": "36px" });
		container_result.add(best_score);

		// current_score
		const current_score = this.add.text(960, 570, "", {});
		current_score.setOrigin(0.5, 0.5);
		current_score.text = "YOUR SCORE: 00";
		current_score.setStyle({ "align": "center", "color": "#ffe7c5", "fontFamily": "Bungee", "fontSize": "46px" });
		container_result.add(current_score);

		// container_audio
		const container_audio = this.add.container(0, -7);
		body.add(container_audio);

		// sound_button
		const sound_button = this.add.image(1851, 63, "sound-on-button");
		sound_button.name = "sound_button";
		sound_button.setInteractive(this.input.makePixelPerfect());
		container_audio.add(sound_button);

		// music_button
		const music_button = this.add.image(1728, 63, "music-on-button");
		music_button.name = "music_button";
		music_button.setInteractive(this.input.makePixelPerfect());
		container_audio.add(music_button);

		this.lower_background = lower_background;
		this.upper_background = upper_background;
		this.background = background;
		this.container_background = container_background;
		this.container_barriers = container_barriers;
		this.container_balls = container_balls;
		this.container_particles = container_particles;
		this.score_text = score_text;
		this.retry_button = retry_button;
		this.home_button = home_button;
		this.best_score = best_score;
		this.current_score = current_score;
		this.container_result = container_result;
		this.sound_button = sound_button;
		this.music_button = music_button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	lower_background;
	/** @type {Phaser.GameObjects.Rectangle} */
	upper_background;
	/** @type {Phaser.GameObjects.Image} */
	background;
	/** @type {Phaser.GameObjects.Container} */
	container_background;
	/** @type {Phaser.GameObjects.Container} */
	container_barriers;
	/** @type {Phaser.GameObjects.Container} */
	container_balls;
	/** @type {Phaser.GameObjects.Container} */
	container_particles;
	/** @type {Phaser.GameObjects.Text} */
	score_text;
	/** @type {Phaser.GameObjects.Image} */
	retry_button;
	/** @type {Phaser.GameObjects.Image} */
	home_button;
	/** @type {Phaser.GameObjects.Text} */
	best_score;
	/** @type {Phaser.GameObjects.Text} */
	current_score;
	/** @type {Phaser.GameObjects.Container} */
	container_result;
	/** @type {Phaser.GameObjects.Image} */
	sound_button;
	/** @type {Phaser.GameObjects.Image} */
	music_button;

	/* START-USER-CODE */

	// Write more your code here

	scoreUpdate() {
		this.score = 0;
		this.scoreInterval = setInterval(() => {
			if (this.score < 10) {
				this.score_text.setText(`Score:   0${this.score}`);
			}
			if (this.score >= 10 && this.score < 100) {
				this.score_text.setText(`Score:   ${this.score}`);
			}
			if (this.score >= 100) {
				this.score_text.setText(`Score: ${this.score}`);
			}
			if (!this.scene.isPaused("Level")) {
				this.score++;
			}
		}, 500);
	}
	clearTimer() {
		clearInterval(this.scoreInterval);
		this.scoreUpdate();
	}
	particalAnimation() {
		let ball;
		const createParticleEmitter = (texture, offsetX, offsetY, followBall) => {
			const particleSystem = this.add.particles();
			this.container_particles.add(particleSystem);
			particleSystem.setTexture(texture);
			const emitter = particleSystem.createEmitter({
				speed: 150,
				scale: { start: 1, end: 0 },
				blendMode: 'ADD',
				lifespan: { min: 500, max: 1000 }
			});
			emitter.startFollow(followBall, offsetX, offsetY);
			emitter.flow(0, 1);
			emitter.setGravityX(-200);
			return particleSystem;
		}

		for (let i = 0; i < oParticalData.texture.length; i++) {
			i <= 3 ? ball = this.lower_ball : ball = this.upper_ball;
			this.bluePartical1 = createParticleEmitter(oParticalData.texture[i], oParticalData.offsetX[i], oParticalData.offsetY[i], ball);
		}
	}
	setAudio() {
		const isMusicOn = (flag) => {
			flag ? this.music_button.setTexture("music-on-button") : this.music_button.setTexture("music-off-button");
			localStorage.setItem("isShadowLeapMusicOn", flag);
			this.oSoundManager.backgroundMusic.setMute(!flag);
			this.oSoundManager.playSound(this.oSoundManager.backgroundMusic, true);
		}
		const isSoundOn = (flag) => {
			flag ? this.sound_button.setTexture("sound-on-button") : this.sound_button.setTexture("sound-off-button");
			localStorage.setItem('isShadowLeapSoundOn', flag);
			this.oSoundManager.clickSound.setMute(!flag);
			this.oSoundManager.ballCollisionSound.setMute(!flag);
			this.oSoundManager.barrierCollisionSound.setMute(!flag);
		}
		this.sound_button.setInteractive().on('pointerdown', () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			isSoundOn(!JSON.parse(localStorage.getItem("isShadowLeapSoundOn")));
		});
		this.music_button.setInteractive().on('pointerdown', () => {
			this.oSoundManager.playSound(this.oSoundManager.clickSound, false);
			isMusicOn(!JSON.parse(localStorage.getItem("isShadowLeapMusicOn")));
		});
		isMusicOn(JSON.parse(localStorage.getItem("isShadowLeapMusicOn")));
		isSoundOn(JSON.parse(localStorage.getItem("isShadowLeapSoundOn")));
	}
	create() {

		this.editorCreate();
		this.oTweenManager = new TweenManager(this);
		this.oInputManager = new InputManager(this);
		this.oSoundManager = new SoundManager(this);

		localStorage.setItem("shadowLeapCurrentScore", 0);
		this.nSpeed = 20;
		this.isPointerDown = false;
		this.gameOver = true;
		this.clearTimer();
		this.barriarGroup = this.add.group();
		this.ballGroup = this.physics.add.group();

		this.oInputManager.buttonClick(this.retry_button);
		this.oInputManager.buttonClick(this.home_button);
		this.oInputManager.buttonClick(this.sound_button);
		this.oInputManager.buttonClick(this.music_button);

		this.upper_ball = this.ballGroup.create(188, 544, "fire-ball")
		this.upper_ball.setOrigin(0.5, 1);
		this.upper_ball.body.setCircle(65, 55, 36).setGravityY(3000).setCollideWorldBounds(true);
		this.container_balls.add(this.upper_ball);
		this.lower_ball = this.ballGroup.create(188, 541, "Ice-ball");
		this.lower_ball.setOrigin(0.5, 0);
		this.lower_ball.body.setCircle(65, 55, 40).setGravityY(-3000).setCollideWorldBounds(true).setBounceY(0.9);
		this.container_balls.add(this.lower_ball);

		this.particalAnimation();
		this.setBarriers();
		this.setAudio();

		this.container_background.list.forEach((background) => {
			if (background.name != "background") {
				this.physics.add.existing(background, false);
				background.body.setSize(128, 128);
				background.body.setOffset(0, 0);
				background.body.immovable = true;
			}
		});

		this.ballCollider = this.physics.add.collider(this.lower_ball, this.upper_ball, () => {
			this.oSoundManager.playSound(this.oSoundManager.ballCollisionSound, false);
			this.lower_ball.body.setBounceY(0.9);
			this.lower_ball.setX(this.upper_ball.x);
		})

		this.physics.add.collider(this.lower_ball, this.upper_background, () => {
			this.lower_ball.body.setVelocityY(0);
		})
		this.physics.add.collider(this.upper_ball, this.lower_background, () => {
			this.lower_ball.setX(this.upper_ball.x);
		})

		this.physics.add.collider(this.ballGroup, this.barriarGroup, (barrier, ball) => {
			this.oSoundManager.playSound(this.oSoundManager.barrierCollisionSound, false);
			this.physics.pause();
			clearInterval(this.scoreInterval);
			clearInterval(this.generateBarrierInterval);
			clearInterval(this.generationSpeedInterval);
			this.gameOver = true;
			localStorage.setItem("shadowLeapCurrentScore", this.score - 1);
			Number(localStorage.getItem('shadowLeapBestScore')) <= Number(this.score - 1) ?
				localStorage.setItem('shadowLeapBestScore', Number(this.score - 1)) :
				localStorage.setItem('shadowLeapBestScore', Number(localStorage.getItem('shadowLeapBestScore')));
			this.current_score.setText(`YOUR SCORE: ${localStorage.getItem('shadowLeapCurrentScore')}`);
			this.best_score.setText(`HIGH SCORE: ${localStorage.getItem('shadowLeapBestScore')}`);
			this.container_result.setVisible(true);
		});
		this.input.on("pointerdown", () => {
			this.isPointerDown = true;
		})
		this.input.on("pointerup", () => {
			this.isPointerDown = false;
		})
	}
	setBarriers() {
		let barrierCount = 0;
		this.nTime = 500;
		this.nMax = 2500;
		this.nMin = 1500;
		this.generationSpeed = 0;

		const generateLowerBarriers = () => {
			const nRandomXLower = Math.floor(Math.random() * (this.nMax - this.nMin)) + this.nMin;
			let lower_barrier;
			if (barrierCount > 3) {
				barrierCount = 0;
				this.nTime = 500;
				lower_barrier = this.physics.add.staticSprite(this.container_barriers.list[this.container_barriers.list.length - 1].x, 545, "pink-barrier").setOrigin(0.5, 0);
			}
			else {
				this.nTime = 1000;
				lower_barrier = this.physics.add.staticSprite(this.container_barriers.list[this.container_barriers.list.length - 1].x + nRandomXLower, 545, "pink-barrier").setOrigin(0.5, 0);
			}
			this.barriarGroup.add(lower_barrier);
			lower_barrier.setSize(150, 100);
			lower_barrier.setOffset(0, 90);
			this.container_barriers.add(lower_barrier);
		}
		const generateUpperBarriers = () => {
			const nRandomXUpper = Math.floor(Math.random() * (this.nMax - this.nMin)) + this.nMin;
			let upper_barrier;
			if (this.container_barriers.list.length <= 0) {
				upper_barrier = this.physics.add.staticSprite(nRandomXUpper, 550, "blue-barrier").setOrigin(0.5, 1);
			}
			else {
				upper_barrier = this.physics.add.staticSprite(this.container_barriers.list[this.container_barriers.list.length - 1].x + nRandomXUpper, 550, "blue-barrier").setOrigin(0.5, 1);
			}
			this.barriarGroup.add(upper_barrier);
			upper_barrier.setSize(150, 100);
			upper_barrier.setOffset(0, -50);
			this.container_barriers.add(upper_barrier);
			barrierCount++;
			generateLowerBarriers();
		}
		this.generateBarrierInterval = setInterval(() => {
			if (this.generationSpeed > 50 && this.generationSpeed < 100) {
				this.nMax = 2000;
				this.nMin = 1000;
			}
			if (this.generationSpeed > 100 && this.generationSpeed < 150) {
				this.nMax = 1500;
				this.nMin = 1000;
			}
			if (this.generationSpeed > 150) {
				this.nMax = 1000;
				this.nMin = 700;
			}
			generateUpperBarriers();
			this.gameOver = false;
		}, this.nMax / 5);
		this.generationSpeedInterval = setInterval(() => {
			this.generationSpeed++;
		}, 100);
	}
	update() {
		if (!this.gameOver) {
			let cursors = this.input.keyboard.createCursorKeys();
			if (this.isPointerDown || cursors.up.isDown) {
				this.upper_ball.body.setVelocityY(-2000);
			}
			this.container_barriers.getAll().forEach((barrier) => {
				if (barrier.x < -200) {
					// barrier.x += 14037;
					// barrier.body.x += 14037;
					barrier.destroy();
				}
				else {
					barrier.x -= this.nSpeed;
					barrier.body.x -= this.nSpeed;
				}
			})
			if (this.nSpeed < 40) {
				this.nSpeed += 0.004;
			}
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
