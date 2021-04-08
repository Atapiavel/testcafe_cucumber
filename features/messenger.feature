Feature: Messenger

    @e2e 
    Scenario Outline: User Messenger E2E Scenario
        Given I am in Scorpion "sign-in" page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "messenger" page
        And I land on Messenger page
        And I click on Search button from messenger page
        And I click on Groups button
        And I click on People button
        Then I click on Messages button
        When I click on settings button
        And I sign out Scorpion

        Examples:
            | email                  | password   |
            | commcenter@scorpion.co | Comms1234! |