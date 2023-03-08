const expect = chai.expect;
const assert = chai.assert;


describe("createDeck", function(){
    it("Check the deck has 52 cards", function() {
        let x = new Deck();
        expect(x.cards.length) .to.equal(52); 
    }) 
})

describe("Deal Cards", function() {
    describe("Deck setup", function() {
      it('Should deal 26 cards to each player', function() {
        let game = new Game();
        assert.equal(game.player1.cards.length, 26);
        assert.equal(game.player2.cards.length, 26);
      });
    });
  });
  