Feature: Login

    @e2e
    Scenario Outline: User Login E2E Scenario
        Given I am in Scorpion "sign-in" page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I wait for "10" seconds
        When I click on settings button
        And I sign out Scorpion

        Examples:
            | email                    | password     |
            | joehaus895@gmail.com     | Team123!     |