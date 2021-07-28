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
            | Invoice Date | Invoice | Billing Period | Status | Amount |
        And I verify the columns for subscriptions are visible
            | Contract Name | Valid Until | Assigned Payment | Autopay |
        And I assert that subscriptions information is visible


# And I click the kebab option "Edit" for "Subscriptions"
# And I select the assigned payment method with "Credit Card ****3857" and "Enabled" autopay
# And I click on save button