Feature: Chat Feature

    As a visitor I can navigate to chat
    @e2e
    Scenario Outline: User Chat E2E Scenario
        Given I am in Scorpion login page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I wait for "10" seconds
        Then I assert the Scorpion main page
        And I click on Chat button
        And I wait for the Chat display
        And I click Get Started button
        Then I land on chat dashboard page
        Examples:
            | email                | password |
            | joehaus895@gmail.com | Team123! |
