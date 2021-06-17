Feature: Messenger

    @e2e 
    Scenario Outline: User Messenger E2E Scenario
        Given I am in Scorpion login page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "messenger" page
        # And I land on Messenger page
        And I maximize the window
        And I wait for "20" seconds
        And I click on Search button from messenger page
        And I click on Files button
        And I click on Groups button
        And I click on People button
        And I click on Messages button        
        And I wait for "2" seconds
        And I click on Aaron McFly button
        And I wait for "2" seconds        
        And I click on Emoji button
        And I click on Mask Emoji
        Then I click on Send Message button
        When I click on settings button
        And I sign out Scorpion

        Examples:
            | email                  | password   | 
            | commcenter@scorpion.co | Comms1234! | 