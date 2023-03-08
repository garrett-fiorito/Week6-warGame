class Card {
    constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];
      this.createDeck();
      this.shuffle();
    }
  
    createDeck() { // Method to create a 52 card deck
      const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      for (let rank of ranks) { // Iterates the ranks array
        for (let suit of suits) { // Iterates the suits array
          this.cards.push(new Card(rank, suit)); // Creates all possible card instances
        }
      }
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) { // Iterates through each card in the array
        const j = Math.floor(Math.random() * (i + 1)); // Random index between 0 and the last index of the array
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swaps the current card with the card at the randomly generated index
      } 
    }
  }
  
  class Player {
    constructor(name) {
      this.name = name;
      this.cards = [];
      this.points = 0;
    }
  
    playCard() {
      return this.cards.shift(); // Removes and returns the first card from the player's deck
    }
  
    addPoint() { // For each round won, a player will get one point
      this.points++;
    }
  }
  
  class Game { // Actually makes the game work
    constructor() {
      this.deck = new Deck(); // Creates an instance of deck and shuffles
      this.player1 = new Player('Player 1'); // Player instances
      this.player2 = new Player('Player 2');
      this.dealCards();
    }
  
    dealCards() { // Method to give each player 26 cards
      while (this.deck.cards.length > 0) {
        this.player1.cards.push(this.deck.cards.shift());
        this.player2.cards.push(this.deck.cards.shift());
      }
    }
  
    playRound() { 
      const card1 = this.player1.playCard(); // Returns first card from the players deck
      const card2 = this.player2.playCard();
      console.log(`${this.player1.name} plays ${card1.rank} of ${card1.suit}`);
      console.log(`${this.player2.name} plays ${card2.rank} of ${card2.suit}`);
      if (card1.rank === card2.rank) {
        console.log('It\'s a tie! No points awarded.');
      } else if (card1.rank > card2.rank) {
        console.log(`${this.player1.name} wins this round with the ${card1.rank} of ${card1.suit}!`);
        this.player1.addPoint();
      } else {
        console.log(`${this.player2.name} wins this round with the ${card2.rank} of ${card2.suit}!`);
        this.player2.addPoint();
      }
    }
  
    playGame() {
      while (this.player1.cards.length > 0 && this.player2.cards.length > 0) { // Play until someone runs out of cards
        this.playRound();
      }
      console.log('Game Over!'); // Game over when a player runs out of cards
      if (this.player1.points > this.player2.points) { // Determine final winner
        console.log(`${this.player1.name} wins with ${this.player1.points} points!`);
      } else if (this.player2.points > this.player1.points) {
        console.log(`${this.player2.name} wins with ${this.player2.points} points!`);
      } else {
        console.log('It\'s a tie!');
      }
    }
  }
  
  const game = new Game();
  game.playGame();
  