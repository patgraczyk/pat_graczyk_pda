require('minitest/autorun')
require_relative('./card.rb')
require_relative('./testing_task_2.rb')

class CardTest < MiniTest::Test

  def setup()
    @game = CardGame.new()
    @card1 = Card.new("spades", 1)
    @card2 = Card.new("clubs", 11)
    @card3 = Card.new("dimonds", 10)
    @card4 = Card.new("hearts", 12)
  end

  def test_check_for_ace()
    actual = @game.checkforAce(@card1)
    assert_equal(true, actual)
  end

  def test_check_for_not_ace()
    actual = @game.checkforAce(@card2)
    assert_equal(false, actual)
  end

  def test_highest_card()
    actual = @game.highestCard(@card1, @card2)
    assert_equal(@card2, actual)
  end

  def test_cards_total()
    cards = [@card1, @card2, @card3, @card4]
    actual = CardGame.cardsTotal(cards)
    assert_equal("You have a total of34", actual)
  end

end
