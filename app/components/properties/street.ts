export class Street {
	name: string;
	color: string;
	owner: string | undefined;
	constructor(name: string, color: string, owner?: string) {
		this.owner = owner;
		this.color = color;
		this.name = name;
	}
}
