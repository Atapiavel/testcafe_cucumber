Feature: Messenger

    @e2e @focus
    Scenario Outline: User Messenger E2E Scenario
        Given I am in Scorpion "sign-in" page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I wait for "10" seconds
        Then I assert the Scorpion main page
        Given I am in Scorpion "messenger" page
        And I land on Messenger page
        And I click on Search button from messenger page
        And I click on Groups button
        And I click on People button
        Then I click on Messages button
        When I click on settings button
        And I sign out Scorpion

        Examples:
            | email                    | password     |
            | joehaus895@gmail.com     | Team123!     |
            | josh.brown978@yahoo.com  | Team123!     |
            | Paulk@ThomasandPaulk.com | Gam3Chang3r! |
