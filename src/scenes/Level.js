
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
		const lower_background = this.add.rectangle(0, 544, 128, 128);
		lower_background.scaleX = 15;
		lower_background.scaleY = 4.27;
		lower_background.setOrigin(0, 0);
		lower_background.isFilled = true;
		lower_background.fillColor = 0;
		container_background.add(lower_background);

		// upper_background
		const upper_background = this.add.rectangle(0, 544, 128, 128);
		upper_background.scaleX = 15;
		upper_background.scaleY = 4.27;
		upper_background.setOrigin(0, 1);
		upper_background.isFilled = true;
		container_background.add(upper_background);

		// background
		const background = this.add.image(960, 536, "background");
		container_background.add(background);

		// container_barriers
		const container_barriers = this.add.container(0, 1);
		body.add(container_barriers);

		// barrier_1
		const barrier_1 = this.add.image(1120, 548, "blue-barrier");
		barrier_1.setOrigin(0.5, 1);
		container_barriers.add(barrier_1);

		// barrier_2
		const barrier_2 = this.add.image(2683, 548, "pink-barrier");
		barrier_2.setOrigin(0.5, 0);
		container_barriers.add(barrier_2);

		// barrier_3
		const barrier_3 = this.add.image(4032, 548, "blue-barrier");
		barrier_3.setOrigin(0.5, 1);
		container_barriers.add(barrier_3);

		// barrier_4
		const barrier_4 = this.add.image(4032, 548, "pink-barrier");
		barrier_4.setOrigin(0.5, 0);
		container_barriers.add(barrier_4);

		// barrier_5
		const barrier_5 = this.add.image(5245, 548, "blue-barrier");
		barrier_5.setOrigin(0.5, 1);
		container_barriers.add(barrier_5);

		// barrier_6
		const barrier_6 = this.add.image(6214, 548, "blue-barrier");
		barrier_6.setOrigin(0.5, 1);
		container_barriers.add(barrier_6);

		// barrier_7
		const barrier_7 = this.add.image(7187, 548, "pink-barrier");
		barrier_7.setOrigin(0.5, 0);
		container_barriers.add(barrier_7);

		// barrier_8
		const barrier_8 = this.add.image(8257, 548, "blue-barrier");
		barrier_8.setOrigin(0.5, 1);
		container_barriers.add(barrier_8);

		// barrier_9
		const barrier_9 = this.add.image(9330, 548, "pink-barrier");
		barrier_9.setOrigin(0.5, 0);
		container_barriers.add(barrier_9);

		// barrier_10
		const barrier_10 = this.add.image(10691, 548, "pink-barrier");
		barrier_10.setOrigin(0.5, 0);
		container_barriers.add(barrier_10);

		// barrier_11
		const barrier_11 = this.add.image(10691, 548, "blue-barrier");
		barrier_11.scaleY = 1.5;
		barrier_11.setOrigin(0.5, 0);
		container_barriers.add(barrier_11);

		// barrier_12
		const barrier_12 = this.add.image(12316, 548, "blue-barrier");
		barrier_12.scaleY = 2;
		barrier_12.setOrigin(0.5, 1);
		container_barriers.add(barrier_12);

		// barrier_13
		const barrier_13 = this.add.image(12316, 548, "pink-barrier");
		barrier_13.scaleY = 2;
		barrier_13.setOrigin(0.5, 0);
		container_barriers.add(barrier_13);

		// barrier_14
		const barrier_14 = this.add.image(13370, 548, "blue-barrier");
		barrier_14.scaleY = 2.3;
		barrier_14.setOrigin(0.5, 0);
		container_barriers.add(barrier_14);

		// barrier_15
		const barrier_15 = this.add.image(14157, 548, "pink-barrier");
		barrier_15.scaleY = 2;
		barrier_15.setOrigin(0.5, 0);
		container_barriers.add(barrier_15);

		// container_balls
		const container_balls = this.add.container(0, -7);
		body.add(container_balls);

		// container_score
		const container_score = this.add.container(0, -7);
		body.add(container_score);

		// score_text
		const score_text = this.add.text(51, 93, "", {});
		score_text.setOrigin(0.5, 0.5);
		score_text.text = "0";
		score_text.setStyle({ "align": "center", "color": "#000000ff", "fontSize": "60px", "fontStyle": "italic" });
		container_score.add(score_text);

		// container_button
		const container_button = this.add.container(0, -7);
		body.add(container_button);

		this.lower_background = lower_background;
		this.upper_background = upper_background;
		this.container_background = container_background;
		this.container_barriers = container_barriers;
		this.container_balls = container_balls;
		this.score_text = score_text;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	lower_background;
	/** @type {Phaser.GameObjects.Rectangle} */
	upper_background;
	/** @type {Phaser.GameObjects.Container} */
	container_background;
	/** @type {Phaser.GameObjects.Container} */
	container_barriers;
	/** @type {Phaser.GameObjects.Container} */
	container_balls;
	/** @type {Phaser.GameObjects.Text} */
	score_text;

	/* START-USER-CODE */

	// Write more your code here

	scoreUpdate() {
		let score = 0;
		this.score = setInterval(() => {
			this.score_text.setText(score);
			if (!this.scene.isPaused("Level")) {
				score++;
			}
		}, 100);
	}

	clearTimer() {
		clearInterval(this.score);
		this.scoreUpdate();
	}

	// particalAnimation(ball) {
	// 	this.partical1 = this.add.particles("particle");
	// 	this.partical1.setTexture("particle");
	// 	this.emitter = this.partical1.createEmitter({
	// 		speed : 80,
	// 		scale : { start : 1 , end : 0 },
	// 		blendMode : 'ADD',
	// 		lifespan : { min : 10, max : 100}		
	// 	});
	// 	this.emitter.startFollow(ball,0.06);
	// 	this.emitter.setScale(0.06);
	// 	this.emitter.setGravityX(-20000);
	// 	this.emitter.flow(0,1);
	// }

	create() {

		this.editorCreate();

		this.isPointerDown = false;

		this.clearTimer();

		this.barriarGroup = this.add.group();
		this.ballGroup = this.physics.add.group();

		this.upper_ball = this.ballGroup.create(188, 544, "fire-ball")
		this.upper_ball.setOrigin(0.5, 1);
		this.upper_ball.body.setCircle(65, 55, 40).setGravityY(3000).setCollideWorldBounds(true);
		this.container_balls.add(this.upper_ball);
		this.lower_ball = this.ballGroup.create(188, 544, "Ice-ball");
		this.lower_ball.setOrigin(0.5, 0);
		this.lower_ball.body.setCircle(65, 55, 40).setGravityY(-3000).setCollideWorldBounds(true);
		this.container_balls.add(this.lower_ball);

		// this.container_balls.list.forEach((ball) => {
		// 	this.physics.add.existing(ball, false);
		// 	if (ball.scaleX == 0.26) {
		// 		ball.body.setCircle(250, 0.5, 1.5);
		// 		ball.body.setGravityY(3000);
		// 	}
		// 	else {
		// 		ball.body.setCircle(65, 55, 40);
		// 		ball.body.setGravityY(-3000);
		// 	}
		// 	this.ballGroup.add(ball);
		// 	ball.body.setCollideWorldBounds(true);
		// })


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
			// this.particalAnimation(this.upper_ball);
			// this.particalAnimation(this.lower_ball);
		})


		this.physics.add.collider(this.lower_ball, this.upper_background, () => {
			this.lower_ball.body.setVelocityY(0);
			// this.particalAnimation(this.lower_ball);

		})
		this.physics.add.collider(this.upper_ball, this.lower_background, () => {
			this.lower_ball.setX(this.upper_ball.x);
			// this.particalAnimation(this.upper_ball);
		})

		this.physics.add.collider(this.ballGroup, this.barriarGroup, () => {
			this.scene.pause();

			// setTimeout(() => {
			// 	this.scene.restart();
			// }, 3000);
		})

		this.input.on("pointerdown", () => {
			this.isPointerDown = true;
		})

		this.input.on("pointerup", () => {
			this.isPointerDown = false;
		})
	}

	update() {
		let cursors = this.input.keyboard.createCursorKeys();

		if (cursors.up.isDown) {
			this.upper_ball.body.setVelocityY(-2000);

		}

		if (this.isPointerDown) {
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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
