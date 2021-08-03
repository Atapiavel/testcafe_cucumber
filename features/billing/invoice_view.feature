Feature: Billing Invoice View

    @billing @invoice_view
    Scenario: Billing_invoice_view
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        When I wait for "8" seconds
        And I hover on More option
        Then I select the "Billing" option
        When I wait for "5" seconds
        And I verify the columns are shown on the billing overview page with
            | Invoice Date | Invoice | Billing Period | Status | Amount |
        And I select the "first" invoice and assert invoice details
        
