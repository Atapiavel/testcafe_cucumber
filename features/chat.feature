Feature: Chat Feature

    @e2e
    Scenario Outline: User Chat E2E Scenario
        Given I am in Scorpion "sign-in" page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "chat" page
        And I wait for the Chat display
        # And I click Get Started button
        Then I land on chat dashboard page
        When I click on settings button
        And I sign out Scorpion

        Examples:
            | email                  | password   |
            | commcenter@scorpion.co | Comms1234! |
