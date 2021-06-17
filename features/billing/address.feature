Feature: Billing Address

    @billing @address
    Scenario: Address_module_is_visible
        Given I am in Scorpion login page
        And I wait for "5" seconds
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I wait for "5" seconds
        Then I assert address module is visible

    @billing @address
    Scenario: Address_kebab_options_are_visible
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I wait for "5" seconds
        Then I assert update option is visible for billing address

    @billing @address
    Scenario: Create_new_address_functionality
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I hover on More option
        Then I select the "Billing" option
        When I click on billing address to use dropdown
        And I click on update option
        And I click on create new address
        And I fill address info with
            | 200 New Address St. | place2 | Chicago | Illinois | 20405 |
        Then I click on add button from address page
        And I assert that the text is shown "Billing Address has been successfully updated!"

    @billing @address
    Scenario: Update_address_functionality
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I hover on More option
        Then I select the "Billing" option
        When I click on billing address to use dropdown
        And I click on update option
        And I click on select a billing address to use
        And I select the address to use with "217 N. Howard Ave."
        Then I click on update button from address page
        And I assert that the text is shown "Billing Address has been successfully updated!"

