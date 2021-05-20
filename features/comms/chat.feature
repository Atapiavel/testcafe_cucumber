Feature: Chat Feature

    @e2e
    Scenario Outline: User Chat E2E Scenario
        Given I am in Scorpion "sign-in" page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "chat" page
        And I wait for the Chat display
        And I land on chat dashboard page
        And I maximize the window
        When I click on the Agent Availability button
        Then The Set Your Availability displays
        And I wait for "2" seconds
        And I click on toggle for Availability
        And I wait for "2" seconds
        And I click on toggle for Availability again
        And I wait for "2" seconds
        And I click on the Agent Availability button again
        And I wait for "2" seconds
        And I click on Mine button
        And I wait for "2" seconds
        Then I click on All button
        When I click on settings button
        And I sign out Scorpion

        Examples:
            | email                  | password   |
            | commcenter@scorpion.co | Comms1234! |
