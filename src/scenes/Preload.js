
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progress
		const progress = this.add.text(960, 540, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "54px" });

		// background
		this.add.image(960, 540, "background");

		// logo
		const logo = new LogoPrefab(this, 960, 588);
		this.add.existing(logo);

		// outerbar
		this.add.image(960, 919, "outerbar");

		// innerBar
		const innerBar = this.add.image(745, 911, "innerBar");
		innerBar.setOrigin(0, 0.5);
		innerBar.visible = false;

		// progress (components)
		new PreloadText(progress);

		this.logo = logo;
		this.innerBar = innerBar;

		this.events.emit("scene-awake");
	}

	/** @type {LogoPrefab} */
	logo;
	/** @type {Phaser.GameObjects.Image} */
	innerBar;

	/* START-USER-CODE */

	// Write your code here
	preload() {

		this.editorCreate();

		this.editorPreload();
		this.isGameLoaded1 = false;
		this.isGameLoaded2 = false;
		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {
			this.isGameLoaded1 = true;
		});

		this.innerBarWidth = this.innerBar.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			this.innerBar.displayWidth,
			this.innerBar.displayHeight
		);

		this.innerBar.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			this.innerBar.setVisible(true);
			const currentProgress = currentInterval * progressIncrement;
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.innerBar.x,
				this.innerBar.y - this.innerBar.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.innerBar.displayHeight
			);
			currentInterval++;
			if (currentProgress >= 1.07) {
				clearInterval(progressInterval);
				this.isGameLoaded2 = true;
			}
		};
		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}
	update() {
		if (this.isGameLoaded1 && this.isGameLoaded2) {
			this.scene.stop("Preload");
			this.scene.start("Home");
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
