import { Component, Input } from "@angular/core";
import { Card } from "../card";

@Component({
	selector: "app-card",
	template: ` <p>{{ this.rankString }}{{ this.suitString }}</p> `,
	styleUrls: ["./card.component.css"],
})
export class CardComponent {
	@Input() card!: Card; // TODO is Input()
	rankString: string = "rank";
	suitString: string = "suit";

	ngOnChanges() {
		// rank
		switch (this.card.rank) {
			case 11: {
				this.rankString = "J";
				break;
			}
			case 12: {
				this.rankString = "Q";
				break;
			}
			case 13: {
				this.rankString = "K";
				break;
			}
			case 14: {
				this.rankString = "A";
				break;
			}
			default: {
				this.rankString = this.card.rank.toString();
			}
		}

		// suit
		switch (this.card.suit) {
			case 0: {
				this.suitString = "♡";
				break;
			}
			case 1: {
				this.suitString = "♢";
				break;
			}
			case 2: {
				this.suitString = "♣";
				break;
			}
			case 3: {
				this.suitString = "♠";
				break;
			}
			default: {
				this.suitString = "";
			}
		}
	}
}
