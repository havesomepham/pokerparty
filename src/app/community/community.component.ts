import { Component, Input } from "@angular/core";
import { Card } from "../card";

@Component({
	selector: "app-community",
	templateUrl: "./community.component.html",
	styleUrl: "./community.component.css",
})
export class CommunityComponent {
	@Input() community!: Card[];
}
