Feature: Phone Feature

    @e2e @focus
    Scenario Outline: User Phone E2E Scenario
        Given I am in Scorpion "sign-in" page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I wait for "10" seconds
        Then I assert the Scorpion main page
        Given I am in Scorpion "phone" page
        When I land on Phone page
        And I click on Search button from phone page
        And I click on Make a Call button
        And I enter numbers in Phone Number entry "<phoneNr>"
        And I click on Call button
        And I click on End Call button
        And I click on Make a Call button again
        And I make a call to the number "<phoneNr>"        
        And I click on Call button again
        And I drag the dialpad "-180" for x "-180" for y
        And I click on Minimize button
        And I click on Maximize button        
        Then I click on End Call button again
        When I click on settings button
        And I sign out Scorpion

        Examples:
            | email                    | password     | phoneNr    |
            | joehaus895@gmail.com     | Team123!     | 8182345566 |
            # | josh.brown978@yahoo.com  | Team123!     | 6503344466 |
            