Feature: Phone Feature

    As a visitor I can navigate to phone

    @e2e @focus
    Scenario Outline: User Phone E2E Scenario
        Given we are in Scorpion login page
        When we enter "<email>" and "<password>"
        And we click on sign in button
        And we wait for "10" seconds
        Then we assert the Scorpion main page
        When we click on Phone button
        And I land on Phone page
        And I click on Search button from phone page
        And I click on Make a Call button
        And I enter numbers in Phone Number entry "<phoneNr>"
        And I click on Call button
        And I click on End Call button
        And I click on Make a Call button again
        And I make a call to the number "<phoneNr>"
        And I click on Call button again
        Then I click on End Call button again
        Examples:
            | email                    | password     | phoneNr      |
            | joehaus895@gmail.com     | Team123!     | 8182345566 |
            | josh.brown978@yahoo.com  | Team123!     | 6503344466 |
            | Paulk@ThomasandPaulk.com | Gam3Chang3r! | 4089923340 |
