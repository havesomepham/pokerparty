import { Component, Input } from "@angular/core";
import { Player } from "../player";

@Component({
	selector: "app-player",
  templateUrl: "./player.component.html",
	styleUrl: "./player.component.css",
})
export class PlayerComponent {
  @Input() player!: Player;
}
