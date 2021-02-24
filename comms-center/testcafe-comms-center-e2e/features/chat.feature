Feature: Chat Feature

    As a visitor I can navigate to chat
    @e2e @focus
    Scenario Outline: User Chat E2E Scenario
        Given we are in Scorpion login page
        When we enter "<email>" and "<password>"
        And we click on sign in button
        And we wait for "10" seconds
        Then we assert the Scorpion main page
        And I click on Chat button
        And I wait for the Chat display
        And I click Get Started button
        Then I land on chat dashboard page
        Examples:
            | email                | password |
            | joehaus895@gmail.com | Team123! |
