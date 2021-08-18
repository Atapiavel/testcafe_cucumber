Feature: Billing Overview

    @billing @overview 
    Scenario: Recent_invoices
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        When I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        When I wait for "3" seconds
        And I verify the columns are shown on the billing overview page with
            | Invoice Date | Invoice | Billing Period | Status | Amount |
        And I assert I can see recent invoices
        And I wait for "5" seconds

    @billing @overview 
    Scenario: Recent_invoices_kebab_options_are_visible_for_recent_invoices
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I wait for "3" seconds
        And I assert kebab options are visible for recent invoices
        And I wait for "5" seconds
