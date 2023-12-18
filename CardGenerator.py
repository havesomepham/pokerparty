import random

# Define constants
suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

# Function to create a standard deck of cards
def create_deck():
    return [(rank, suit) for rank in ranks for suit in suits]

# Function to shuffle the deck
def shuffle_deck(deck):
    random.shuffle(deck)

# Function to deal cards to players
def deal_cards(num_players, deck):
    hands = [[] for _ in range(num_players)]
    for _ in range(2):  # Deal two cards to each player
        for player in range(num_players):
            hands[player].append(deck.pop())
    return hands
=
# Function to generate community cards (flop, turn, river)
def generate_community_cards(deck):
    flop = [deck.pop() for _ in range(3)]
    turn = deck.pop()
    river = deck.pop()
    return flop, turn, river

# Function to evaluate the rank of a poker hand
def evaluate_hand(hand, community_cards):
    all_cards = hand + community_cards
    # Implement your hand evaluation logic here (e.g., using poker hand rankings)
    # This can involve checking for pairs, straights, flushes, etc.
    # For simplicity, let's assume a random ranking for demonstration purposes.
    return random.random()

# Function to determine the winner
def determine_winner(player_hands, community_cards):
    winners = []
    best_rank = float('-inf')

    for i, hand in enumerate(player_hands):
        rank = evaluate_hand(hand, community_cards)
        if rank > best_rank:
            winners = [i]
            best_rank = rank
        elif rank == best_rank:
            winners.append(i)

    return winners

# Function to print the results
def print_results(player_hands, community_cards, winners):
    print("Community Cards: Flop {}, Turn {}, River {}".format(*community_cards))
    for i, hand in enumerate(player_hands):
        print("Player {} Hand: {}".format(i + 1, hand))
    print("Winner(s): Player(s) {}".format(", ".join(str(w + 1) for w in winners)))

# Main function
def play_poker(num_players):
    deck = create_deck()
    shuffle_deck(deck)

    player_hands = deal_cards(num_players, deck)
    flop, turn, river = generate_community_cards(deck)

    winners = determine_winner(player_hands, flop + [turn, river])

    print_results(player_hands, [flop, turn, river], winners)

# Example: Play poker with 4 players
play_poker(4)
import random

# Define constants
suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

# Function to create a standard deck of cards
def create_deck():
    return [(rank, suit) for rank in ranks for suit in suits]

# Function to shuffle the deck
def shuffle_deck(deck):
    random.shuffle(deck)

# Function to deal cards to players
def deal_cards(num_players, deck):
    hands = [[] for _ in range(num_players)]
    for _ in range(2):  # Deal two cards to each player
        for player in range(num_players):
            hands[player].append(deck.pop())
    return hands

# Function to generate community cards (flop, turn, river)
def generate_community_cards(deck):
    flop = [deck.pop() for _ in range(3)]
    turn = deck.pop()
    river = deck.pop()
    return flop, turn, river

# Function to evaluate the rank of a poker hand
def evaluate_hand(hand, community_cards):
    all_cards = hand + community_cards
    # Implement your hand evaluation logic here (e.g., using poker hand rankings)
    # This can involve checking for pairs, straights, flushes, etc.
    # For simplicity, let's assume a random ranking for demonstration purposes.
    return random.random()

# Function to determine the winner
def determine_winner(player_hands, community_cards):
    winners = []
    best_rank = float('-inf')

    for i, hand in enumerate(player_hands):
        rank = evaluate_hand(hand, community_cards)
        if rank > best_rank:
            winners = [i]
            best_rank = rank
        elif rank == best_rank:
            winners.append(i)

    return winners

# Function to print the results
def print_results(player_hands, community_cards, winners):
    print("Community Cards: Flop {}, Turn {}, River {}".format(*community_cards))
    for i, hand in enumerate(player_hands):
        print("Player {} Hand: {}".format(i + 1, hand))
    print("Winner(s): Player(s) {}".format(", ".join(str(w + 1) for w in winners)))

# Main function
def play_poker(num_players):
    deck = create_deck()
    shuffle_deck(deck)

    player_hands = deal_cards(num_players, deck)
    flop, turn, river = generate_community_cards(deck)

    winners = determine_winner(player_hands, flop + [turn, river])

    print_results(player_hands, [flop, turn, river], winners)

# Example: Play poker with 4 players
play_poker(4)
