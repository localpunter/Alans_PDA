require("minitest/autorun")
require("minitest/rg")
require_relative("../card.rb")
require_relative("../testing_task_2.rb")

class GameTest < MiniTest::Test

  def setup
    @card1 = Card.new('Hearts', 5)
    @card2 = Card.new('Spades', 1)
    @cardgame = CardGame.new()
  end

  def test_check_if_ace__false
    assert_equal(false, @cardgame.checkforAce(@card1))
  end

  def test_check_if_ace__true
    assert_equal(true, @cardgame.checkforAce(@card2))
  end

  def test_check_if_highest_card
    assert_equal(@card1, @cardgame.highest_card(@card1, @card2))
  end

  def test_cards_total
    assert_equal("You have a total of 6", CardGame.cards_total([@card1, @card2]))
  end

end