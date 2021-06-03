Feature: Messenger

    @e2e @comms @focus
    Scenario Outline: User Messenger E2E Scenario
        Given I am in Scorpion "sign-in" page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "messenger" page
        # And I land on Messenger page
        # And I maximize the window
        And I wait for "20" seconds
        And I click on Search button from messenger page
        And I click on Groups button
        And I click on People button
        And I click on Messages button
        And I wait for "3" seconds
        And I click on Aaron McFly button
        And I enter a "<message>" into the message field
        And I click on Send Message button
        And I click on Emoji button
        And I click on Relaxed Emoji
        And I click on Send Message button again
        And I click on the paperclip
        When I click on attach icon
        Then I upload the file
        And I click on send button

        Examples:
            | email                  | password   | message |
            | commcenter@scorpion.co | Comms1234! | Hey Aaron. What's happening dude? :smiley: :sunglasses: :dancer: :champagne: You get tons of this from my automation! :pray: :thumbsup: |