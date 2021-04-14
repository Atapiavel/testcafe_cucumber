Feature: Billing Subscriptions

    @billing @subscriptions
    Scenario: Edit Subscription
        Given I am in Scorpion "sign-in" page
        When I enter "commcenter@scorpion.co" and "Comms1234!"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click the kebab option "Edit" for "Subscriptions"
        And I select the assigned payment method with "Credit Card ****3857" and "Enabled" autopay
        And I click on save button
