
// You can write more code here

/* START OF COMPILED CODE */

class LogoPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0.0008398355566896498, y ?? 0);

		// upper_ball
		const upper_ball = scene.add.image(-451, -1293, "fire-ball");
		this.add(upper_ball);

		// lower_ball
		const lower_ball = scene.add.image(411, -1293, "Ice-ball");
		lower_ball.flipX = true;
		this.add(lower_ball);

		// logo_text
		const logo_text = scene.add.image(-14, -13, "logo-text");
		this.add(logo_text);

		// lower_shadow_ball
		const lower_shadow_ball = scene.add.image(415, 1096, "Ice-ball");
		lower_shadow_ball.scaleY = 0.52;
		lower_shadow_ball.flipX = true;
		lower_shadow_ball.flipY = true;
		lower_shadow_ball.alpha = 0.2;
		lower_shadow_ball.alphaTopLeft = 0.2;
		lower_shadow_ball.alphaTopRight = 0.2;
		lower_shadow_ball.alphaBottomLeft = 0.2;
		lower_shadow_ball.alphaBottomRight = 0.2;
		this.add(lower_shadow_ball);

		// upper_shadow_ball
		const upper_shadow_ball = scene.add.image(-448, 1096, "fire-ball");
		upper_shadow_ball.scaleY = 0.52;
		upper_shadow_ball.flipY = true;
		upper_shadow_ball.alpha = 0.2;
		upper_shadow_ball.alphaTopLeft = 0.2;
		upper_shadow_ball.alphaTopRight = 0.2;
		upper_shadow_ball.alphaBottomLeft = 0.2;
		upper_shadow_ball.alphaBottomRight = 0.2;
		this.add(upper_shadow_ball);

		this.upper_ball = upper_ball;
		this.lower_ball = lower_ball;
		this.lower_shadow_ball = lower_shadow_ball;
		this.upper_shadow_ball = upper_shadow_ball;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	upper_ball;
	/** @type {Phaser.GameObjects.Image} */
	lower_ball;
	/** @type {Phaser.GameObjects.Image} */
	lower_shadow_ball;
	/** @type {Phaser.GameObjects.Image} */
	upper_shadow_ball;

	/* START-USER-CODE */

	// Write your code here.
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
