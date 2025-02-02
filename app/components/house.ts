export class House {
	owner: string;
	name: string;
	type: string;

	constructor(owner: string, name = "") {
		this.owner = owner;
		this.name = name;
		this.type = "House";
	}
}
