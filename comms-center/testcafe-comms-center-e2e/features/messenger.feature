Feature: Messenger Feature

    As a visitor I can navigate to messenger
    @e2e
    Scenario Outline: User Messenger E2E Scenario
        Given we are in Scorpion login page
        When we enter "<email>" and "<password>"
        And we click on sign in button
        And we wait for "10" seconds
        Then we assert the Scorpion main page
        When we click on Messenger button
        And I land on Messenger page
        And I click on Search button from messenger page
        And I click on Groups button
        And I click on People button
        Then I click on Messages button
        Examples:
            | email                    | password     |
            | joehaus895@gmail.com     | Team123!     |
            | josh.brown978@yahoo.com  | Team123!     |
            | Paulk@ThomasandPaulk.com | Gam3Chang3r! |
