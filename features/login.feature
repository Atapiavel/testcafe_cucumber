Feature: Login

    @e2e
    Scenario Outline: User_Login_E2E_Scenario
        Given I am in Scorpion "sign-in" page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Then I assert we are in Scorpion main page

        Examples:
            | email                  | password   |
            | commcenter@scorpion.co | Comms1234! |