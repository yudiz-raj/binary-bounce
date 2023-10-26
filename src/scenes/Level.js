
// You can write more code here

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
		const lower_background = this.add.rectangle(0, 554, 128, 128);
		lower_background.scaleX = 15;
		lower_background.scaleY = 4.27;
		lower_background.setOrigin(0, 0);
		lower_background.isFilled = true;
		lower_background.fillColor = 0;
		container_background.add(lower_background);

		// upper_background
		const upper_background = this.add.rectangle(0, 554, 128, 128);
		upper_background.scaleX = 15;
		upper_background.scaleY = 4.27;
		upper_background.setOrigin(0, 1);
		upper_background.isFilled = true;
		container_background.add(upper_background);

		// background
		const background = this.add.image(960, 540, "background");
		container_background.add(background);

		// container_barriers
		const container_barriers = this.add.container(0, 1);
		body.add(container_barriers);

		// barrier_1
		const barrier_1 = this.add.image(1120, 550, "blue-barrier");
		barrier_1.setOrigin(0.5, 1);
		container_barriers.add(barrier_1);

		// barrier_2
		const barrier_2 = this.add.image(2683, 550, "pink-barrier");
		barrier_2.setOrigin(0.5, 0);
		container_barriers.add(barrier_2);

		// barrier_3
		const barrier_3 = this.add.image(4032, 550, "blue-barrier");
		barrier_3.setOrigin(0.5, 1);
		container_barriers.add(barrier_3);

		// barrier_4
		const barrier_4 = this.add.image(4032, 550, "pink-barrier");
		barrier_4.setOrigin(0.5, 0);
		container_barriers.add(barrier_4);

		// barrier_5
		const barrier_5 = this.add.image(5245, 550, "blue-barrier");
		barrier_5.setOrigin(0.5, 1);
		container_barriers.add(barrier_5);

		// barrier_6
		const barrier_6 = this.add.image(6214, 550, "blue-barrier");
		barrier_6.setOrigin(0.5, 1);
		container_barriers.add(barrier_6);

		// barrier_7
		const barrier_7 = this.add.image(7187, 550, "pink-barrier");
		barrier_7.setOrigin(0.5, 0);
		container_barriers.add(barrier_7);

		// barrier_8
		const barrier_8 = this.add.image(8257, 550, "blue-barrier");
		barrier_8.setOrigin(0.5, 1);
		container_barriers.add(barrier_8);

		// barrier_9
		const barrier_9 = this.add.image(9330, 550, "pink-barrier");
		barrier_9.setOrigin(0.5, 0);
		container_barriers.add(barrier_9);

		// barrier_10
		const barrier_10 = this.add.image(10691, 550, "pink-barrier");
		barrier_10.setOrigin(0.5, 1);
		container_barriers.add(barrier_10);

		// barrier_11
		const barrier_11 = this.add.image(10691, 609.5, "blue-barrier");
		barrier_11.setOrigin(0.5, 0);
		container_barriers.add(barrier_11);

		// barrier_12
		const barrier_12 = this.add.image(12316, 431, "blue-barrier");
		barrier_12.setOrigin(0.5, 1);
		container_barriers.add(barrier_12);

		// barrier_13
		const barrier_13 = this.add.image(12316, 635, "pink-barrier");
		barrier_13.setOrigin(0.5, 0);
		container_barriers.add(barrier_13);

		// barrier_14
		const barrier_14 = this.add.image(13370, 704.7000122070312, "blue-barrier");
		barrier_14.setOrigin(0.5, 0);
		container_barriers.add(barrier_14);

		// barrier_15
		const barrier_15 = this.add.image(14157, 550, "pink-barrier");
		barrier_15.setOrigin(0.5, 0);
		container_barriers.add(barrier_15);

		// container_balls
		const container_balls = this.add.container(0, -7);
		body.add(container_balls);

		// container_score
		const container_score = this.add.container(0, -7);
		body.add(container_score);

		// score_bar
		const score_bar = this.add.image(165, 63, "score-bar");
		container_score.add(score_bar);

		// score_text
		const score_text = this.add.text(39, 55, "", {});
		score_text.setOrigin(0, 0.5);
		score_text.text = "Score:   00";
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
		const music_button = this.add.image(1728, 64, "music-on-button");
		music_button.name = "music_button";
		music_button.setInteractive(this.input.makePixelPerfect());
		container_audio.add(music_button);

		this.lower_background = lower_background;
		this.upper_background = upper_background;
		this.background = background;
		this.container_background = container_background;
		this.container_barriers = container_barriers;
		this.container_balls = container_balls;
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
		}, 100);
	}
	clearTimer() {
		clearInterval(this.scoreInterval);
		this.scoreUpdate();
	}
	particalAnimation() {
		const createParticleEmitter = (texture, offsetX, offsetY, speed, scaleStart, scaleEnd, ball, lifespanMin, lifespanMax) => {
			const particleSystem = this.add.particles();
			particleSystem.setTexture(texture);
			const emitter = particleSystem.createEmitter({
				speed: speed,
				scale: { start: scaleStart, end: scaleEnd },
				blendMode: 'ADD',
				lifespan: { min: lifespanMin, max: lifespanMax }
			});
			emitter.startFollow(ball, offsetX, offsetY);
			emitter.flow(0, 1);
			emitter.setGravityX(-200);
			return particleSystem;
		}
		this.bluePartical1 = createParticleEmitter("blue-large", -40, 70, 150, 1, 0, this.lower_ball, 500, 1000);
		this.bluePartical2 = createParticleEmitter("blue-blur-medium", 20, 60, 150, 1, 0, this.lower_ball, 500, 1000);
		this.bluePartical3 = createParticleEmitter("blue-blur-large", 40, 140, 150, 1, 0, this.lower_ball, 500, 1000);
		this.bluePartical4 = createParticleEmitter("blue-fire", -40, 150, 80, 1, 0, this.lower_ball, 500, 1000);
		this.redPartical1 = createParticleEmitter("red-large", -40, -70, 150, 1, 0, this.upper_ball, 500, 1000);
		this.redPartical2 = createParticleEmitter("red-blur-medium", 20, -60, 150, 1, 0, this.upper_ball, 500, 1000);
		this.redPartical3 = createParticleEmitter("red-blur-large", 40, -140, 150, 1, 0, this.upper_ball, 500, 1000);
		this.redPartical4 = createParticleEmitter("red-fire", -40, -150, 80, 1, 0, this.upper_ball, 500, 1000);
	}
	create() {

		this.editorCreate();
		this.oTweenManager = new TweenManager(this);
		this.oInputManager = new InputManager(this);
		localStorage.setItem("shadowLeapCurrentScore", 0);
		this.isPointerDown = false;
		this.gameOver = false;
		this.clearTimer();
		this.barriarGroup = this.add.group();
		this.ballGroup = this.physics.add.group();

		this.oInputManager.buttonClick(this.retry_button);
		this.oInputManager.buttonClick(this.home_button);
		this.oInputManager.buttonClick(this.sound_button);
		this.oInputManager.buttonClick(this.music_button);

		this.upper_ball = this.ballGroup.create(188, 544, "fire-ball")
		this.upper_ball.setOrigin(0.5, 1);
		this.upper_ball.body.setCircle(65, 55, 40).setGravityY(3000).setCollideWorldBounds(true);
		this.container_balls.add(this.upper_ball);
		this.lower_ball = this.ballGroup.create(188, 544, "Ice-ball");
		this.lower_ball.setOrigin(0.5, 0);
		this.lower_ball.body.setCircle(65, 55, 40).setGravityY(-3000).setCollideWorldBounds(true);
		this.container_balls.add(this.lower_ball);

		this.particalAnimation();

		this.container_background.list.forEach((background) => {
			this.physics.add.existing(background, false);
			background.body.setSize(128, 128);
			background.body.setOffset(0, 0);
			background.body.immovable = true;
		})


		this.container_barriers.list.forEach((barrier) => {
			this.physics.add.existing(barrier, true);
			barrier.body.setSize(145, 110);
			if (barrier.texture.key == "blue-barrier") {
				barrier.body.setOffset(0, 7);
			}
			else {
				barrier.body.setOffset(0, 15);
			}
			this.barriarGroup.add(barrier);
		})

		this.physics.add.collider(this.lower_ball, this.upper_ball, () => {
			this.lower_ball.body.setBounceY(0.85);
			this.lower_ball.setX(this.upper_ball.x);
		})


		this.physics.add.collider(this.lower_ball, this.upper_background, () => {
			this.lower_ball.body.setVelocityY(0);
		})
		this.physics.add.collider(this.upper_ball, this.lower_background, () => {
			this.lower_ball.setX(this.upper_ball.x);
		})

		this.physics.add.collider(this.ballGroup, this.barriarGroup, (barrier, ball) => {
			this.physics.pause();
			console.log(ball.body.velocity.y);
			clearInterval(this.scoreInterval);
			this.gameOver = true;
			localStorage.setItem("shadowLeapCurrentScore", this.score - 1);
			Number(localStorage.getItem('shadowLeapBestScore')) <= Number(this.score - 1) ?
				localStorage.setItem('shadowLeapBestScore', Number(this.score - 1)) :
				localStorage.setItem('shadowLeapBestScore', Number(localStorage.getItem('shadowLeapBestScore')));
			this.current_score.setText(`YOUR SCORE: ${localStorage.getItem('shadowLeapCurrentScore')}`);
			this.best_score.setText(`YOUR SCORE: ${localStorage.getItem('shadowLeapBestScore')}`);
			this.container_result.setVisible(true);
		});

		this.input.on("pointerdown", () => {
			this.isPointerDown = true;
		})

		this.input.on("pointerup", () => {
			this.isPointerDown = false;
		})
	}

	update() {
		if (!this.gameOver) {

			let cursors = this.input.keyboard.createCursorKeys();
			if (cursors.up.isDown || this.isPointerDown) {
				this.upper_ball.body.setVelocityY(-2000);
			}
			this.container_barriers.getAll().forEach((barrier) => {
				if (barrier.x < -200) {
					barrier.x += 14037;
					barrier.body.x += 14037;
				}
				barrier.x -= 20;
				barrier.body.x -= 20;
			})
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
