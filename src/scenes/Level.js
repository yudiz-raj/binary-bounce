
// You can write more code here
let score = 0;
let pointer = false;
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
		const lower_background = this.add.rectangle(0, 540, 128, 128);
		lower_background.scaleX = 15;
		lower_background.scaleY = 4.27;
		lower_background.setOrigin(0, 0);
		lower_background.isFilled = true;
		lower_background.fillColor = 0;
		container_background.add(lower_background);

		// upper_background
		const upper_background = this.add.rectangle(0, 540, 128, 128);
		upper_background.scaleX = 15;
		upper_background.scaleY = 4.27;
		upper_background.setOrigin(0, 1);
		upper_background.isFilled = true;
		container_background.add(upper_background);

		// container_barriers
		const container_barriers = this.add.container(0, 1);
		body.add(container_barriers);

		// barrier_1
		const barrier_1 = this.add.rectangle(1120, 536, 128, 128);
		barrier_1.setOrigin(0.5, 1);
		barrier_1.isFilled = true;
		barrier_1.fillColor = 0;
		container_barriers.add(barrier_1);

		// barrier_2
		const barrier_2 = this.add.rectangle(2683, 536, 128, 128);
		barrier_2.setOrigin(0.5, 0);
		barrier_2.isFilled = true;
		container_barriers.add(barrier_2);

		// barrier_3
		const barrier_3 = this.add.rectangle(4032, 536, 128, 128);
		barrier_3.setOrigin(0.5, 1);
		barrier_3.isFilled = true;
		barrier_3.fillColor = 0;
		container_barriers.add(barrier_3);

		// barrier_4
		const barrier_4 = this.add.rectangle(4032, 536, 128, 128);
		barrier_4.setOrigin(0.5, 0);
		barrier_4.isFilled = true;
		container_barriers.add(barrier_4);

		// barrier_5
		const barrier_5 = this.add.rectangle(5245, 536, 128, 128);
		barrier_5.setOrigin(0.5, 1);
		barrier_5.isFilled = true;
		barrier_5.fillColor = 0;
		container_barriers.add(barrier_5);

		// barrier_6
		const barrier_6 = this.add.rectangle(6214, 536, 128, 128);
		barrier_6.setOrigin(0.5, 1);
		barrier_6.isFilled = true;
		barrier_6.fillColor = 0;
		container_barriers.add(barrier_6);

		// barrier_7
		const barrier_7 = this.add.rectangle(7187, 536, 128, 128);
		barrier_7.setOrigin(0.5, 0);
		barrier_7.isFilled = true;
		container_barriers.add(barrier_7);

		// barrier_8
		const barrier_8 = this.add.rectangle(8257, 536, 128, 128);
		barrier_8.setOrigin(0.5, 1);
		barrier_8.isFilled = true;
		barrier_8.fillColor = 0;
		container_barriers.add(barrier_8);

		// barrier_9
		const barrier_9 = this.add.rectangle(9330, 536, 128, 128);
		barrier_9.setOrigin(0.5, 0);
		barrier_9.isFilled = true;
		container_barriers.add(barrier_9);

		// container_balls
		const container_balls = this.add.container(0, -7);
		body.add(container_balls);

		// upper_ball
		const upper_ball = this.add.sprite(188, 544, "upper_ball");
		upper_ball.scaleX = 0.26;
		upper_ball.scaleY = 0.26;
		upper_ball.setOrigin(0.5, 1);
		container_balls.add(upper_ball);

		// lower_ball
		const lower_ball = this.add.sprite(188, 544, "lower_ball");
		lower_ball.scaleX = 0.375;
		lower_ball.scaleY = 0.375;
		lower_ball.setOrigin(0.5, 0);
		container_balls.add(lower_ball);

		// container_score
		const container_score = this.add.container(0, -7);
		body.add(container_score);

		// score_text
		const score_text = this.add.text(51, 93, "", {});
		score_text.setOrigin(0.5, 0.5);
		score_text.text = "0";
		score_text.setStyle({ "align": "center", "color": "#000000ff", "fontSize": "60px", "fontStyle": "italic" });
		container_score.add(score_text);

		this.container_background = container_background;
		this.lower_background = lower_background;
		this.upper_background = upper_background;
		this.container_barriers = container_barriers;
		this.container_balls = container_balls;
		this.upper_ball = upper_ball;
		this.lower_ball = lower_ball;
		this.score_text = score_text;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_background;
	/** @type {Phaser.GameObjects.Rectangle} */
	lower_background;
	/** @type {Phaser.GameObjects.Rectangle} */
	upper_background;
	/** @type {Phaser.GameObjects.Container} */
	container_barriers;
	/** @type {Phaser.GameObjects.Container} */
	container_balls;
	/** @type {Phaser.GameObjects.Sprite} */
	upper_ball;
	/** @type {Phaser.GameObjects.Sprite} */
	lower_ball;
	/** @type {Phaser.GameObjects.Text} */
	score_text;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

		this.barriarGroup = this.add.group();
		this.ballGroup = this.add.group();

		// this.input.keyboard.on('keydown', this.handleKeyDown, this);
		this.container_balls.list.forEach((ball) => {
			this.physics.add.existing(ball, false);
			if (ball.scaleX == 0.26) {
				ball.body.setCircle(250, 0.5, 1.5);
				ball.body.setGravityY(2500);
			}
			else {
				ball.body.setCircle(175, 0.5, 0.5);
				console.log(ball.positionY);
				ball.body.setGravityY(-2500);
			}
			this.ballGroup.add(ball);
			console.log(this.ballGroup);
			ball.body.setCollideWorldBounds(true);
		})

		// this.upper_ball.body.setCollideWorldBounds(true);

		this.container_background.list.forEach((background) => {
			this.physics.add.existing(background, false);
			background.body.setSize(128, 128);
			background.body.setOffset(0, 0);
			background.body.immovable = true;
		})


		this.container_barriers.list.forEach((barrier) => {
			this.physics.add.existing(barrier, true);
			barrier.body.setSize(125, 125);
			if (barrier.fillColor == 0X000000) {
				barrier.body.setOffset(0, 10);
			}
			else {
				barrier.body.setOffset(0, 10);
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

		this.physics.add.collider(this.ballGroup, this.barriarGroup, () => {
			this.scene.pause("Level");
		})

	}

	bounceHandler() {
		this.upper_ball.body.setVelocityY(-1500);
	}

	update() {
		let cursors = this.input.keyboard.createCursorKeys();

		if (cursors.up.isDown) {
			this.bounceHandler();
		}

		this.container_barriers.getAll().forEach((barrier) => {
			if (barrier.x < -200) {
				barrier.x += 9210;
				barrier.body.x += 9210;
			}
			barrier.x -= 15;
			barrier.body.x -= 15;
		})

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
