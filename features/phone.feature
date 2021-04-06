Feature: Phone Feature

    @e2e @focus
    Scenario Outline: User_Phone_E2E_Scenario
        Given I am in Scorpion "sign-in" page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "phone" page
        When I land on Phone page
        And I click on Search button from phone page
        And I click on Make a Call button
        And I enter numbers in Phone Number entry "<phoneNr>"
        And I click on Call button
        And I click on End Call button
        And I click on Make a Call button again
        And I maximize the window
        And I make a call to the number "<phoneNr>"
        And I click on Call button again
        And I drag the dialpad "-360" for x "-100" for y
        And I click on Minimize button
        And I click on Maximize button
        Then I click on End Call button again
        When I click on settings button
        And I sign out Scorpion

        Examples:
            | email                  | password   | phoneNr    |
            | commcenter@scorpion.co | Comms1234! | 8182345566 |