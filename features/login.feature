Feature: Login

    @e2e
    Scenario: User_Login_E2E_Scenario
        Given I am in Scorpion login page
        When I enter "commcenter@scorpion.co" and "Comms1234!"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Then I assert we are in Scorpion main page
