import { Injectable } from "@angular/core";
import { Card, Suit, Rank } from "./card";
import { Player } from "./player";

@Injectable({
	providedIn: "root",
})
export class DealerService {
	playerList: Player[] = [
		{
			id: 1,
			name: "Shreyash",
			hand: [],
		},
		{
			id: 2,
			name: "Ryder",
			hand: [],
		},
		{
			id: 3,
			name: "Krishna",
			hand: [],
		},
	];

	deck: Card[] = [];
	communinty: Card[] = [];

	getPlayerList(): Player[] {
		return this.playerList;
	}

	// add the 52 cards (unshuffled) to this.deck
	generateDeck(): void {
		this.deck = [];
		for (let suit = 0; suit < Object.keys(Suit).length / 2; suit++) {
			for (let rank = 2; rank <= Object.keys(Rank).length / 2 + 1; rank++) {
				this.deck.push({ suit, rank });
			}
		}
	}

	// shuffle this.deck in place
	shuffleDeck(): void {
		for (let i = this.deck.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
		}
	}

	// set the hand[] array of each player to an array of two Cards
	dealHands(): void {
		const numPlayers = this.playerList.length;
		for (let i = 0; i < numPlayers; i++) {
			const hand = [this.deck.pop()!, this.deck.pop()!]; // Deal two cards to each player
			this.playerList[i].hand = hand;
		}
	}

	dealCommunityCards(): void {
		for (let i = 0; i < 5; i++) {
			this.communinty.push(this.deck.pop()!);
		}
	}

	// evaluateHand(hand: Card[], communityCards: Card[]): { value: number; description: string } {
	//   // Your hand evaluation logic goes here
	//   // This is a placeholder, you need to implement the actual hand evaluation algorithm
	//   // and return a numeric value representing the strength of the hand
	//   return { value: Math.random(), description: "Placeholder hand" };
	// }

	cardToString(card: Card): string {
		let suitSymbol: string;

		switch (card.suit) {
			case Suit.Hearts:
				suitSymbol = "H";
				break;
			case Suit.Diamonds:
				suitSymbol = "D";
				break;
			case Suit.Clubs:
				suitSymbol = "C";
				break;
			case Suit.Spades:
				suitSymbol = "S";
				break;
			default:
				suitSymbol = "";
		}

		let rankString: string;

		if (card.rank <= 10) {
			rankString = `${card.rank}`;
		} else {
			switch (card.rank) {
				case Rank.Jack:
					rankString = `J`;
					break;
				case Rank.Queen:
					rankString = `Q`;
					break;
				case Rank.King:
					rankString = `K`;
					break;
				case Rank.Ace:
					rankString = `A`;
					break;
				default:
					rankString = "";
			}
		}

		return `${rankString}${suitSymbol}`;
	}

	// determineWinner(players: Player[], communityCards: Card[]): { winner: Player; handDescription: string } {
	//     let winner = players[0];
	//     let winningHand = evaluateHand(players[0].hand, communityCards);

	//     for (let i = 1; i < players.length; i++) {
	//         const currentHand = evaluateHand(players[i].hand, communityCards);
	//         if (currentHand.value > winningHand.value) {
	//             winner = players[i];
	//             winningHand = currentHand;
	//         }
	//     }

	//     return { winner, handDescription: winningHand.description };
	// }
	constructor() {
		this.generateDeck();
	}
}
