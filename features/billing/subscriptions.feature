Feature: Billing Subscriptions

    @billing @subscriptions
    Scenario: Billing_subscriptions
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        When I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        When I wait for "5" seconds
        Then I verify the columns are shown on the billing overview page with
            | INVOICE DATE | INVOICE | BILLING PERIOD | STATUS | AMOUNT |
        And I verify the columns for subscriptions are visible
            | Contract Name | Valid Until | Assigned Payment | Auto Pay |
        And I assert that subscriptions information is visible

    @billing @subscriptions
    Scenario: Edit_subscription
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        When I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        When I wait for "5" seconds
        Then I verify the columns are shown on the billing overview page with
            | INVOICE DATE | INVOICE | BILLING PERIOD | STATUS | AMOUNT |
        And I verify the columns for subscriptions are visible
            | Contract Name | Valid Until | Assigned Payment | Auto Pay |
        And I assert that subscriptions information is visible
        When I select the first contract to edit with the "first" payment method and "On" autopay
        Then I assert that subscriptions information is visible
        When I select the first contract to edit with the "last" payment method and "Off" autopay
        Then I assert that subscriptions information is visible
