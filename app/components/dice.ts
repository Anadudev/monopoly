export class Dice {
	// The number of sides on the dice
	  constructor(private sides = 6) {
		this.sides = sides < 2 ? 2 : sides;
	}

  roll(): number {
	return Math.floor(Math.random() * this.sides) + 1;
  }
}
