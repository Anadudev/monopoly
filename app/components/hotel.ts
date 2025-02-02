import { House } from "@/app/components/house";

export class Hotel extends House {
	name: string;

	constructor(owner: string, name = "") {
		super(owner, name);
		this.name = name;
		this.type = "Hotel";
	}
}
