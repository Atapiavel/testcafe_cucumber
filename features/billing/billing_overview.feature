Feature: Billing Overview

    @billing @overview
    Scenario: Billing_overview_page
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
        Then I assert I can see recent invoices
            | Invoice_Date | Invoice_# | Billing_Period | Status         | Amount    |
            | Nov 1, 2019  | 10010     | Monthly        | Paid           | $1,500.00 |
            | Nov 1, 2019  | 10011     | Monthly        | Unpaid         | $1,500.00 |
            | Nov 1, 2019  | 10012     | Monthly        | Partially Paid | $1,500.00 |
            | Nov 1, 2019  | 10013     | Monthly        | Paid           | $1,500.00 |
            | Nov 1, 2019  | 10014     | Monthly        | Paid           | $1,500.00 |
        And I assert I can see Current Billing Cycle graph
        And I assert the Total Balance Due sum

    @billing @overview
    Scenario Outline: <module>_module_is_visible
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
        Then I assert "<module>" module is visible
        And I assert that the primary "<module>" is visible

        Examples:

            | module          |
            | Recent_invoices |
            | Billing_contact |
            | Payment_method  |
            | Bill_to_address |

    @billing @overview
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
            | send           | Recent_invoices |
            | print          | Recent_invoices |
            | download_CSV   | Recent_invoices |
            | download_PDF   | Recent_invoices |
            | download_DOC   | Recent_invoices |
            | Set_as_primary | Billing_contact |
            | delete         | Billing_contact |
            | Set_as_primary | Payment_method  |
            | delete         | Payment_method  |
            | update         | Bill_to_address |

    @billing @overview
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
            | send         | Recent_invoices |
            | update       | Payment_method  |
            | add          | Payment_method  |
            | update       | Billing_contact |
            | add          | Billing_contact |
            | update       | Bill_to_address |

    @billing @overview
    Scenario Outline: <kebab_option>_functionality_from_<module>
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
        And I fill the contact information with
            | David Gilmore | jamesissac@gmail.com |
        And I click on send button
        And I assert that the text is shown
            | Success! |

        Examples:
            | kebab_option | module          |
            | send         | Recent_invoices |

    @billing @overview
    Scenario Outline: Download_<download_option>_functionality_from_<module>
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
        And I assert "<dowload_option>" dowload option

        Examples:
            | kebab_option | module          | download_option |
            | download     | Recent_invoices | CSV             |
            | download     | Recent_invoices | PDF             |
            | download     | Recent_invoices | DOC             |

    @billing @overview
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

    @billing @overview
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
        Then I assert "<payment_method>" as primary payment method

        Examples:
            | kebab_option   | module         | payment_method |
            | Set_as_primary | Payment_method | Visa **** 4520 |

    @billing @overview
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

    @billing @overview
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
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I assert that the text is shown
            | Success! |
        And I assert "<payment_method>" payment method is not visible

        Examples:
            | kebab_option | module         | payment_method |
            | delete       | Payment_method | Visa **** 5869 |

    @billing @overview
    Scenario Outline: Update_payment_method_functionality
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
        When I click the kebab option "<kebab_option>" for "<module>"
        Then I update "<module>" card information with
            | Credit_Number    | Name_on_Card   | Expiration | CVV |
            | 1111222233333495 | Gandalf D Grey | 04/24      | 469 |
        And I update "<module>" billing address with
            | Address_Line_1      | Address_Line_2 | City    | State    | Zipcode |
            | 1204 W Chestnube St | 123 Street     | Chicago | Illinois | 20405   |
        And I assert that the text is shown
            | Success! |
        When I click the kebab option "<kebab_option>" for "<module>"
        Then I assert "<module>" card information with
            | Credit_Number    | Name_on_Card   | Expiration | CVV |
            | 1111222233333495 | Gandalf D Grey | 04/24      | 469 |
        And I assert "<module>" billing address with
            | Address_Line_1      | Address_Line_2 | City    | State    | Zipcode |
            | 1204 W Chestnube St | 123 Street     | Chicago | Illinois | 20405   |
        And I click on cancel button

        Examples:

            | kebab_option | module         |
            | update       | Payment_method |

    @billing @overview
    Scenario Outline: Add_payment_method_functionality
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
        When I click the kebab option "<kebab_option>" for "<module>"

        Examples:

            | kebab_option | module         | payment_method         | account_name | routing_number | account_number |
            | add          | Payment_method | Credit and Debit Cards |              |                |                |
            | add          | Payment_method | eCheck                 | Name here    | 00000000       | 00000000       |
            | add          | Payment_method | PayPal                 |              |                |                |

    @billing @overview
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
        Then I click on manage contacts
        And I click on add billing contact
        And I fill billing contact info with
            | first_name | last_name | email_address         | phone_number   |
            | Samm       | Robinson  | samrobinson@gmail.com | (485) 569 3859 |
        Then I click on save button

    @billing @overview
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

    @billing @overview
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
        When I click on manage address
        And I click on billing address to use dropdown
        And I click on create new address
        And I fill address info with
            | address_line_1      | address_line_2 | city    | state     | zipcode |
            | 200 New Address St. | place2         | Chicago | Illiniois | 20405   |
        Then I click on save button

    @billing @overview
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
        When I click on manage address
        And I click on billing address to use dropdown
        And I select the address to use with "100 W Bow St."
        Then I click on update button

