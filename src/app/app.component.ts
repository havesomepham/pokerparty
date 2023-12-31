import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Component, inject } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { CardComponent } from "./card/card.component";
import { PlayerComponent } from "./player/player.component";
import { DealerService } from "./dealer.service";
import { Player } from "./player";
import { PokerHandResult } from "./pokerHandResult";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	styleUrls: ["app.component.css"],
})
export class AppComponent {
	title = "pokerparty";
	// firestore: Firestore = inject(Firestore)
	dealerService: DealerService = inject(DealerService);
	playerList: Player[] = [];

	ngOnInit() {
		this.playerList = this.dealerService.getPlayerList();
		this.dealerService.shuffleDeck();
		this.dealerService.dealHands();
		this.dealerService.dealCommunityCards();

		// TODO delete
		this.dealerService.playerList.forEach((player) => {
			let pokerHandResult: PokerHandResult = this.dealerService.scoreHand(
				player.hand
			);
			console.log(pokerHandResult);
		});
	}
}
