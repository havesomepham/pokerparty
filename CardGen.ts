enum Suit {
    Hearts,
    Diamonds,
    Clubs,
    Spades,
  }
  
  enum Rank {
    Two = 2,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace,
  }
  
  interface Card {
    suit: Suit;
    rank: Rank;
  }
  
  interface Player {
    id: number;
    name: string;
    hand: Card[];
  }
  
  function generateDeck(): Card[] {
    const deck: Card[] = [];
    for (let suit = 0; suit < Object.keys(Suit).length / 2; suit++) {
      for (let rank = 2; rank <= Object.keys(Rank).length / 2 + 1; rank++) {
        deck.push({ suit, rank });
      }
    }
    return deck;
  }
  
  function shuffleDeck(deck: Card[]): Card[] {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
  }
  
  function dealHands(deck: Card[], numPlayers: number): Player[] {
    const players: Player[] = [];
    for (let i = 0; i < numPlayers; i++) {
      const hand = [deck.pop()!, deck.pop()!]; // Deal two cards to each player
      players.push({ id: i + 1, name: `Player ${i + 1}`, hand });
    }
    return players;
  }
  
  function dealCommunityCards(deck: Card[]): Card[] {
    const communityCards: Card[] = [];
    for (let i = 0; i < 5; i++) {
      communityCards.push(deck.pop()!);
    }
    return communityCards;
  }
  
  function evaluateHand(hand: Card[], communityCards: Card[]): { value: number; description: string } {
    // Your hand evaluation logic goes here
    // This is a placeholder, you need to implement the actual hand evaluation algorithm
    // and return a numeric value representing the strength of the hand
    return { value: Math.random(), description: "Placeholder hand" };
  }
  
function cardToString(card: Card): string {
    let suitSymbol: string;
  
    switch (card.suit) {
        case Suit.Hearts:
            suitSymbol = "♡";
            break;
        case Suit.Diamonds:
            suitSymbol = "♢";
            break;
        case Suit.Clubs:
            suitSymbol = "♣";
            break;
        case Suit.Spades:
            suitSymbol = "♠";
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
  
    function determineWinner(players: Player[], communityCards: Card[]): { winner: Player; handDescription: string } {
        let winner = players[0];
        let winningHand = evaluateHand(players[0].hand, communityCards);
  
        for (let i = 1; i < players.length; i++) {
            const currentHand = evaluateHand(players[i].hand, communityCards);
            if (currentHand.value > winningHand.value) {
                winner = players[i];
                winningHand = currentHand;
            }
        }
  
        return { winner, handDescription: winningHand.description };
    }
  
    // Main program
    const numberOfPlayers = 4;
    const deck = shuffleDeck(generateDeck());
    const players = dealHands(deck, numberOfPlayers);
    const communityCards = dealCommunityCards(deck);
  
    console.log("Players:");
    console.log(players.map(player => ({ ...player, hand: player.hand.map(card => cardToString(card)) })));
  
    console.log("\nCommunity Cards:");
    console.log(communityCards.map(card => cardToString(card)));
  
    const result = determineWinner(players, communityCards);
    console.log(`\nWinner: ${result.winner.name} (Player ${result.winner.id}) with ${result.handDescription}`);
