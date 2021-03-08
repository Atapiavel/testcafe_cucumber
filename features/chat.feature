Feature: Chat Feature

    @e2e
    Scenario Outline: User Chat E2E Scenario
        Given I am in Scorpion "login" page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I wait for "10" seconds
        Then I assert the Scorpion main page
        Given I am in Scorpion "chat" page
        And I wait for the Chat display
        And I click Get Started button
        Then I land on chat dashboard page
        When I click on settings button
        And I sign out Scorpion

        Examples:
            | email                | password |
            | joehaus895@gmail.com | Team123! |
