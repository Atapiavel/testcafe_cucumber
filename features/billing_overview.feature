Feature: Billing Overview

    @e2e @billing
    Scenario: Login
        Given I am in Scorpion login page
        When I enter "paulk@thomasandpaulk.com" and "Gam3Chang3r!"
        And I click on sign in button
        And I wait for "10" seconds
        Then I assert the Scorpion main page

    @e2e @billing
    Scenario: Assert Billing Overview Page
        When I click on settings button
        And I select the "Billing" option
        And I wait for "5" seconds
        Given I am in Billing Overview page
        Then I assert I can see recent invoices
            | Invoice_Date | Invoice_# | Billing_Period | Status         | Amount    |
            | Nov 1, 2019  | 10010     | Monthly        | Paid           | $1,500.00 |
            | Nov 1, 2019  | 10011     | Monthly        | Unpaid         | $1,500.00 |
            | Nov 1, 2019  | 10012     | Monthly        | Partially Paid | $1,500.00 |
            | Nov 1, 2019  | 10013     | Monthly        | Paid           | $1,500.00 |
            | Nov 1, 2019  | 10014     | Monthly        | Paid           | $1,500.00 |
        And I assert I can see Current Billing Cycle graph
        And I assert the Total Balance Due sum

    @e2e @billing
    Scenario Outline: <module> module is visible
        Given I am in Billing Overview page
        Then I assert "<module>" module is visible
        And I assert that the primary "<module>" is visible

        Examples:

            | module          |
            | Billing Contact |
            | Payment Method  |
            | Bill to address |

    @e2e @billing
    Scenario: <module> <kebab_option> option is visible
        Given I am in Billing Overview page
        Then I assert "<kebab_option>" option is visible

        Examples:

            | kebab_option   | module          |
            | Send           | Recent Invoices |
            | Print          | Recent Invoices |
            | Download - CSV | Recent Invoices |
            | Download - PDF | Recent Invoices |
            | Download - DOC | Recent Invoices |
            | Set as Primary | Billing Contact |
            | Delete         | Billing Contact |
            | Set as Primary | Payment Method  |
            | Delete         | Payment Method  |

    @e2e @billing
    Scenario Outline: Assert Cancel button from <module> <kebab_option> functionality
        Given I am in Billing Overview page
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I click on cancel button

        Examples:

            | kebab_option | module          |
            | Send         | Recent Invoices |
            | Update       | Payment Method  |
            | Add          | Payment Method  |
            | Update       | Billing Contact |
            | Add          | Billing Contact |
            | Manage       | Billing Contact |
            | Update       | Bill to address |

    @e2e @billing
    Scenario Outline: <kebab_option> functionality from <module>
        Given I am in Billing Overview page
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I fill the contact information with
            | David Gilmore | jamesissac@gmail.com |
        And I click on send button
        And I assert that the text is shown
            | Success! |

        Examples:
            | kebab_option | module          |
            | Send         | Recent Invoices |

    @e2e @billing
    Scenario Outline: <kebab_option> <download_option> functionality from <module>
        Given I am in Billing Overview page
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I assert "<dowload_option>" dowload option

        Examples:
            | kebab_option | module          | download_option |
            | Download     | Recent Invoices | CSV             |
            | Download     | Recent Invoices | PDF             |
            | Download     | Recent Invoices | DOC             |

    @e2e @billing
    Scenario Outline: <kebab_option> functionality from <module>
        Given I am in Billing Overview page
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I assert that the text is shown
            | Success! |
        And I assert "<contact>" as primary contact

        Examples:
            | kebab_option   | module          | contact       |
            | Set as Primary | Billing Contact | David Gilmore |

    @e2e @billing
    Scenario Outline: <kebab_option> functionality from <module>
        Given I am in Billing Overview page
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I assert that the text is shown
            | Success! |
        Then I assert "<payment_method>" as primary payment method

        Examples:
            | kebab_option   | module         | payment_method |
            | Set as Primary | Payment Method | Visa **** 4520 |

    @e2e @billing
    Scenario Outline: <kebab_option> functionality from <module>
        Given I am in Billing Overview page
        Then I click the kebab option "<kebab_option>" for "<module>"}
        And I assert that the text is shown
            | Success! |
        And I assert "<contact>" contact is not visible

        Examples:
            | kebab_option | module          | contact      |
            | Delete       | Billing Contact | Andy Timmons |

    @e2e @billing
    Scenario Outline: <kebab_option> functionality from <module>
        Given I am in Billing Overview page
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I assert that the text is shown
            | Success! |
        And I assert "<payment_method>" payment method is not visible

        Examples:
            | kebab_option | module         | payment_method |
            | Delete       | Payment Method | Visa **** 5869 |

    @e2e @billing
    Scenario Outline: <kebab_option> <module> functionality
        Given I am in Billing Overview page
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
            | Update       | Payment Method |

    @e2e @billing
    Scenario Outline: <kebab_option> <module> functionality
        Given I am in Billing Overview page
        When I click the kebab option "<kebab_option>" for "<module>"

        Examples:

            | kebab_option | module         | payment_method         | account_name | routing_number | account_number |
            | Add          | Payment Method | Credit and Debit Cards |              |                |                |
            | Add          | Payment Method | eCheck                 | Name here    | 00000000       | 00000000       |
            | Add          | Payment Method | PayPal                 |              |                |                |

    @e2e @billing
    Scenario Outline: Add Billing Contact functionality
        Given I am in Billing Overview page
        Then I click on manage contacts
        And I click on add billing contact
        And I fill billing contact info with
            | first_name | last_name | email_address         | phone_number   |
            | Samm       | Robinson  | samrobinson@gmail.com | (485) 569 3859 |

    @e2e @billing
    Scenario: Logout

        When I click on settings button
        And I sign out Scorpion


