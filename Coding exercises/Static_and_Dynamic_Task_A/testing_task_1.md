### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
# indenting incorrect in card.rb and also no requirement for the ';' on line 7 but this will not affect how it runs
class CardGame

  def checkforAce(card) #method name should be 'check_for_ace'
    if card.value = 1 #should be 'if card.value == 1'
      return true
    else
      return false
    end
  end

  # dif should be def and comma missing between parameters, should be (card1, card2)
  dif highest_card(card1 card2)
  if card1.value > card2.value
    
    return card.name #.name is not defined. Should be 'return card1'
  else
    card2
  end
end
end
# end in wrong place for class as there is still a method below

def self.cards_total(cards)
  total# should be 'total = 0' to set the initial count
  for card in cards
    total += card.value
    return "You have a total of" + total 
    # the return function should be outside the loop
    # and a space between of and " so it reads proper on output
  end
end

# The end for the class should be placed here



```
