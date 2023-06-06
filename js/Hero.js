import Entity from "./Entity.js";

export default class Hero extends Entity {

	constructor(image, coordinates, tileSize) {
		super(coordinates);
		this.tileSize = tileSize;
		this.Img = image;
		// this.playerImg.src = "./img/tiles/player.png";

	}

	draw(ctx) {
		ctx.drawImage(this.Img, this.coordinates.x * this.tileSize, this.coordinates.y * this.tileSize, this.tileSize, this.tileSize);
	}


}