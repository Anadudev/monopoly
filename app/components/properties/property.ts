export class Property {
	name: string;
	color: string;
	description: string | undefined;
	constructor(name: string, color="", description?: string) {
		this.description = description;
		this.color = color;
		this.name = name;
	}
}
