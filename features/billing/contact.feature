Feature: Billing Contact

    @billing @contact
    Scenario Outline: Set_as_primary_functionality_from_<module>
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
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I assert that the text is shown
            | Success! |
        And I assert "<contact>" as primary contact

        Examples:
            | kebab_option   | module          | contact       |
            | Set_as_primary | Billing_contact | David Gilmore |

    @billing @contact
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

            | kebab_option   | module          |
            | Set_as_primary | Billing_contact |
            | delete         | Billing_contact |

    @billing @contact
    Scenario: Add_billing_contact_functionality
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
        And I click on add billing contact
        And I fill billing contact info with
            | first_name | last_name | email_address         | phone_number   |
            | Samm       | Robinson  | samrobinson@gmail.com | (485) 569 3859 |
        Then I click on save button

    @billing @contact
    Scenario: Edit_billing_contact_functionality
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
        When I click on edit contact "<first_name>" "<last_name>"
        And I fill billing contact info with
            | first_name | last_name | email_address         | phone_number   |
            | Samm       | Robinson  | samrobinson@gmail.com | (485) 569 3859 |
        Then I click on update button

    @billing @contact
    Scenario Outline: Delete_functionality_from_<module>
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
        Then I click the kebab option "<kebab_option>" for "<module>"}
        And I assert that the text is shown
            | Success! |
        And I assert "<contact>" contact is not visible

        Examples:
            | kebab_option | module          | contact      |
            | delete       | Billing_contact | Andy Timmons |

    @billing @contact
    Scenario Outline: Cancel_button_from_<module>_<kebab_option>_functionality
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
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I click on cancel button

        Examples:

            | kebab_option | module          |
            | update       | Billing_contact |
            | add          | Billing_contact |
            | update       | Bill_to_address |
