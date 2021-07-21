Feature: Billing Cycle Graph

    @billing @billing_cycle
    Scenario: Billing_cycle_graph
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        When I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I verify the columns are shown on the billing overview page with
            | Invoice Date | Invoice | Billing Period | Status | Amount |
        And I assert I can see the graph information
        And I wait for "5" seconds
