export class Money {
	value: number;
	currency: string;
	symbol: string;
	pcs: number;
	constructor(value: number, currency: string = "$", symbol: string = "USD", pcs?: number) {
		this.value = value;
		this.currency = currency;
		this.symbol = symbol;
		if (pcs) {
			this.pcs = pcs;
		} else {
			if (value > 1000) { this.pcs = 2; }
			else if (value > 500) { this.pcs = 2; }
			else if (value > 200) { this.pcs = 2; }
			else if (value > 100) { this.pcs = 6; }
			else if (value > 50) { this.pcs = 5; }
			else {
				{ this.pcs = 5; }
			}
		}
	}
}
