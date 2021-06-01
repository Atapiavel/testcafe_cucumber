Feature: Billing Address

    @billing @address
    Scenario: <module>_<kebab_option>_option_is_visible
        Given I am in Scorpion login page
        When I enter "commcenter@scorpion.co" and "Comms1234!"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        When I click on settings button
        And I select the "Billing" option
        And I wait for "5" seconds
        Given I am in Scorpion "billing" page
        Then I assert "<kebab_option>" option is visible

        Examples:

            | kebab_option | module          |
            | update       | Bill_to_address |

    @billing @address
    Scenario: Create_new_address_functionality
        Given I am in Scorpion login page
        When I enter "commcenter@scorpion.co" and "Comms1234!"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        When I click on settings button
        And I select the "Billing" option
        And I wait for "5" seconds
        Given I am in Scorpion "billing" page
        And I click on billing address to use dropdown
        And I click on create new address
        And I fill address info with
            | address_line_1      | address_line_2 | city    | state     | zipcode |
            | 200 New Address St. | place2         | Chicago | Illiniois | 20405   |
        Then I click on save button

    @billing @address
    Scenario: Update_address_functionality
        Given I am in Scorpion login page
        When I enter "commcenter@scorpion.co" and "Comms1234!"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        When I click on settings button
        And I select the "Billing" option
        And I wait for "5" seconds
        Given I am in Scorpion "billing" page
        And I click on billing address to use dropdown
        And I select the address to use with "100 W Bow St."
        Then I click on update button
