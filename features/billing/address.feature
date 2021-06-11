Feature: Billing Address

    # @billing @address
    # Scenario Outline: Address_module_is_visible
    #     Given I am in Scorpion login page
    #     And I wait for "5" seconds
    #     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
    #     And I click on sign in button
    #     And I wait for "10" seconds
    #     Given I am in Scorpion "settings" page
    #     And I wait for "5" seconds
    #     And I hover on More option
    #     Then I select the "Billing" option
    #     And I wait for "5" seconds
    #     Then I assert address module is visible

    # @billing @address
    # Scenario: Address_kebab_options_are_visible
    #     Given I am in Scorpion login page
    #     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
    #     And I click on sign in button
    #     And I wait for "10" seconds
    #     Given I am in Scorpion "settings" page
    #     And I wait for "5" seconds
    #     And I hover on More option
    #     Then I select the "Billing" option
    #     And I wait for "5" seconds
    #     Then I assert update option is visible for billing address

    @billing @address
    Scenario: Create_new_address_functionality
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I wait for "5" seconds
        And I click on billing address to use dropdown
        And I click on create new address
        And I fill address info with
            | address_line_1      | address_line_2 | city    | state     | zipcode |
            | 200 New Address St. | place2         | Chicago | Illiniois | 20405   |
        Then I click on save button

    # @billing @address
    # Scenario: Update_address_functionality
    #     Given I am in Scorpion login page
    #     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
    #     And I click on sign in button
    #     And I wait for "10" seconds
    #     Given I am in Scorpion "settings" page
    #     And I wait for "5" seconds
    #     And I hover on More option
    #     Then I select the "Billing" option
    #     And I wait for "5" seconds
    #     And I click on billing address to use dropdown
    #     And I select the address to use with "100 W Bow St."
    #     Then I click on update button
