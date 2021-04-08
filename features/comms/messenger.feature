Feature: Messenger

    @e2e @comms
    Scenario Outline: User_Messenger_E2E_Scenario
        Given I am in Scorpion "sign-in" page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "messenger" page
        And I land on Messenger page
        And I wait for "2" seconds
        And I click on Search button from messenger page
        And I click on Groups button
        And I click on People button
        Then I click on Messages button
        When I click on settings button
        And I sign out Scorpion

        Examples:
            | email                  | password   |
            | commcenter@scorpion.co | Comms1234! |