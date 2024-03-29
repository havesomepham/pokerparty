import { Component, Input, inject } from "@angular/core";
import { Card } from "../card";
import { DealerService } from "../dealer.service";

@Component({
	selector: "app-community",
	templateUrl: "./community.component.html",
	styleUrl: "./community.component.css",
})
export class CommunityComponent {
	@Input() community!: Card[];
	// community!: Card[];

	ngOnInit() {
		// this.community = DealerService.community;
	}
}
