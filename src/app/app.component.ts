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
	playerList: Player[] = [];
	winners: Player[] = [];

	ngOnInit() {
		this.playerList = this.dealerService.getPlayerList();
		this.deal();
	}

	@HostListener('document:keypress', ['$event'])
	handleKeyboardEvent(event: KeyboardEvent) { 
		this.deal();
	}

	deal() {
		console.log("REDEAL");
		this.dealerService.shuffleDeck();
		this.dealerService.dealHands();
		this.dealerService.dealCommunityCards();
		this.winners = this.dealerService.determineWinner();
	}
}
