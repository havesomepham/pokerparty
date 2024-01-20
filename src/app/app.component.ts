import {
	CdkDragDrop,
	moveItemInArray,
	transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { CardComponent } from "./card/card.component";
import { PlayerComponent } from "./player/player.component";
import { DealerService } from "./dealer.service";
import { Player } from "./player";
import { PokerHandResult } from "./pokerHandResult";
import { Component, inject, HostListener, OnInit } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	styleUrls: ["app.component.css"],
})
export class AppComponent {
	title = "pokerparty";
	// firestore: Firestore = inject(Firestore)
	dealerService: DealerService = inject(DealerService);
	winners: Player[] = [];
	isHost: boolean = true;
	userId: number = 0;

	ngOnInit() {
		this.deal();
	}

	deal() {
		console.log("REDEAL");
		this.dealerService.shuffleDeck();
		this.dealerService.dealHands();
		this.dealerService.dealCommunityCards();
		this.winners = this.dealerService.determineWinner();
	}
	
	toggleHost() {
		this.isHost = !this.isHost;
	}

	incrementUserId() {
		this.userId++;
		if (this.userId > this.dealerService.playerList.length) {
			this.userId = 0;
		}
	}
}
