Feature: Phone Feature

    As a visitor I can navigate to phone
    @e2e
    Scenario Outline: User Phone E2E Scenario
        Given I open the welcome page
        When I enter Email "<email>"
        And I enter Password "<password>"
        And I click Sign In button
        And I wait for 4 seconds
        And I land on Phone page
        And I click on Search button
        And I click on Make a Call button
        And I enter numbers in Phone Number entry "<phoneNr>"
        And I click on Call button
        And I click on End Call button
        And I click on Make a Call button again

        And I click on Number Four button
        And I click on Number One button
        And I click on Number Five button

        And I click on Number Nine button
        And I click on Number Two button
        And I click on Number Seven button

        And I click on Number Six button
        And I click on Number Three button
        And I click on Number Eight button
        And I click on Number Zero button

        And I click on Call button again
        Then I click on End Call button again
        Examples:
            | email                    | password     | phoneNr      |
            | joehaus895@gmail.com     | Team123!     | 818-234-5566 |
            | josh.brown978@yahoo.com  | Team123!     | 650-334-4466 |
            | Paulk@ThomasandPaulk.com | Gam3Chang3r! | 408-992-3340 |
