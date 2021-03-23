Feature: Billing Overview

    @billing
    Scenario: Login
        Given I am in Scorpion login page
        When I enter "paulk@thomasandpaulk.com" and "Gam3Chang3r!"
        And I click on sign in button
        And I wait for "10" seconds
        Then I assert the Scorpion main page

    @billing
    Scenario: Assert Billing Overview Page
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

    @billing
    Scenario Outline: <module> module is visible
        Given I am in Scorpion "billing" page
        Then I assert "<module>" module is visible
        And I assert that the primary "<module>" is visible

        Examples:

            | module          |
            | Billing Contact |
            | Payment Method  |
            | Bill to address |

    @billing
    Scenario: <module> <kebab_option> option is visible
        Given I am in Scorpion "billing" page
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

    @billing
    Scenario Outline: Assert Cancel button from <module> <kebab_option> functionality
        Given I am in Scorpion "billing" page
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

    @billing
    Scenario Outline: <kebab_option> functionality from <module>
        Given I am in Scorpion "billing" page
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I fill the contact information with
            | David Gilmore | jamesissac@gmail.com |
        And I click on send button
        And I assert that the text is shown
            | Success! |

        Examples:
            | kebab_option | module          |
            | Send         | Recent Invoices |

    @billing
    Scenario Outline: <kebab_option> <download_option> functionality from <module>
        Given I am in Scorpion "billing" page
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I assert "<dowload_option>" dowload option

        Examples:
            | kebab_option | module          | download_option |
            | Download     | Recent Invoices | CSV             |
            | Download     | Recent Invoices | PDF             |
            | Download     | Recent Invoices | DOC             |

    @billing
    Scenario Outline: <kebab_option> functionality from <module>
        Given I am in Scorpion "billing" page
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I assert that the text is shown
            | Success! |
        And I assert "<contact>" as primary contact

        Examples:
            | kebab_option   | module          | contact       |
            | Set as Primary | Billing Contact | David Gilmore |

    @billing
    Scenario Outline: <kebab_option> functionality from <module>
        Given I am in Scorpion "billing" page
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I assert that the text is shown
            | Success! |
        Then I assert "<payment_method>" as primary payment method

        Examples:
            | kebab_option   | module         | payment_method |
            | Set as Primary | Payment Method | Visa **** 4520 |

    @billing
    Scenario Outline: <kebab_option> functionality from <module>
        Given I am in Scorpion "billing" page
        Then I click the kebab option "<kebab_option>" for "<module>"}
        And I assert that the text is shown
            | Success! |
        And I assert "<contact>" contact is not visible

        Examples:
            | kebab_option | module          | contact      |
            | Delete       | Billing Contact | Andy Timmons |

    @billing
    Scenario Outline: <kebab_option> functionality from <module>
        Given I am in Scorpion "billing" page
        Then I click the kebab option "<kebab_option>" for "<module>"
        And I assert that the text is shown
            | Success! |
        And I assert "<payment_method>" payment method is not visible

        Examples:
            | kebab_option | module         | payment_method |
            | Delete       | Payment Method | Visa **** 5869 |

    @billing
    Scenario Outline: <kebab_option> <module> functionality
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
            | Update       | Payment Method |

    @billing
    Scenario Outline: <kebab_option> <module> functionality
        Given I am in Scorpion "billing" page
        When I click the kebab option "<kebab_option>" for "<module>"

        Examples:

            | kebab_option | module         | payment_method         | account_name | routing_number | account_number |
            | Add          | Payment Method | Credit and Debit Cards |              |                |                |
            | Add          | Payment Method | eCheck                 | Name here    | 00000000       | 00000000       |
            | Add          | Payment Method | PayPal                 |              |                |                |

    @billing
    Scenario: Add Billing Contact functionality
        Given I am in Scorpion "billing" page
        Then I click on manage contacts
        And I click on add billing contact
        And I fill billing contact info with
            | first_name | last_name | email_address         | phone_number   |
            | Samm       | Robinson  | samrobinson@gmail.com | (485) 569 3859 |
        Then I click on save button

    @billing
    Scenario: Edit Billing Contact functionality
        Given I am in Scorpion "billing" page
        When I click on edit contact "<first_name>" "<last_name>"
        And I fill billing contact info with
            | first_name | last_name | email_address         | phone_number   |
            | Samm       | Robinson  | samrobinson@gmail.com | (485) 569 3859 |
        Then I click on update button

    @billing
    Scenario: Create new Address functionality
        Given I am in Scorpion "billing" page
        When I click on manage address
        And I click on billing address to use dropdown
        And I click on create new address
        And I fill address info with
            | address_line_1      | address_line_2 | city    | state     | zipcode |
            | 200 New Address St. | place2         | Chicago | Illiniois | 20405   |
        Then I click on save button

    @billing
    Scenario: Update Address functionality
        Given I am in Scorpion "billing" page
        When I click on manage address
        And I click on billing address to use dropdown
        And I select the address to use with "100 W Bow St."
        Then I click on update button

    @billing @payment

    Scenario: Make a payment
        Given I am in Scorpion "billing" page
        Then I check the Current Total Balance Due with "$1,380.00"
        When I click on make a payment option
        Then I check the services balance due with
            | service  | due_balance | credits | pay      |
            | Services | $180.00     | $0.00   | $180.00  |
            | Paid Ads | $1000.00    | $0.00   | $1000.00 |
            | Platform | $200.00     | $0.00   | $200.00  |
        And I select the payment method with "Credit Card ****3857"
        When I click Pay Bill button
        Then I assert the amount to pay with
            | amount   | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
            | 1,380.00 | $1,388.00           | $0.00                               | Credit Card ****3857 | Feb 24,2021  |
        Then I click on "Pay $1,380" button
        And I assert that the text is shown
            | Success! You succsesfully paid $1,380.00 |

    @billing @payment
    Scenario: Make a payment (Overpay)
        Given I am in Scorpion "billing" page
        Then I check the Current Total Balance Due with "$1,380.00"
        When I click on make a payment option
        And I click on other payment tab
        Then I check the services balance due with
            | service  | due_balance | credits | pay   |
            | Services | $180.00     | $0.00   | $0.00 |
            | Paid Ads | $1000.00    | $0.00   | $0.00 |
            | Platform | $200.00     | $0.00   | $0.00 |
        And I fill the amount to pay with
            | Services | 1000 |
            | Paid Ads | 6000 |
            | Platform | 1000 |
        And I select the payment method with "Credit Card ****3857"
        When I click Pay Bill button
        Then I assert the amount to pay with
            | amount   | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
            | 8,000.00 | $1,388.00           | $6,120.00                           | Credit Card ****3857 | Feb 24,2021  |
        Then I click on "Pay $8,000" button
        And I assert that the text is shown
            | Success! You succsesfully paid $8,000.00 |

    @billing @payment
    Scenario: Make a payment (Past due payment)
        Given I am in Scorpion "billing" page
        Then I check the Current Total Balance Due with "$1,380.00"
        When I hover the advertisement
        Then I check the past due values with
            | service        | past_due_balance |
            | Services       | $250.00          |
            | Paid Ads       | $500.00          |
            | Platform       | $250.00          |
            | Total past due | $1,000.00        |
        When I click on make a payment option
        Then I check the services balance due with
            | service  | due_balance | past_duebalance | credits | pay      |
            | Services | $190.00     | $250.00         | $0.00   | $440.00  |
            | Paid Ads | $550.00     | $500.00         | $0.00   | $1050.00 |
            | Platform | $90.00      | $250.00         | $0.00   | $340.00  |
        And I select the payment method with "Credit Card ****3857"
        When I click Pay Bill button
        Then I assert the amount to pay with
            | amount | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
            | xxx.00 | $xxx.00             | xxx.00                              | Credit Card ****3857 | Feb 24,2021  |
        Then I click on "Pay $xxx.00" button
        And I assert that the text is shown
            | Success! You succsesfully paid $xxx.00 |

    @billing @payment
    Scenario: Make a payment (Underpay)
        Given I am in Scorpion "billing" page
        Then I check the Current Total Balance Due with "$1,380.00"
        When I click on make a payment option
        And I click on other payment tab
        Then I check the services balance due with
            | service  | due_balance | credits | pay   |
            | Services | $180.00     | $0.00   | $0.00 |
            | Paid Ads | $1000.00    | $0.00   | $0.00 |
            | Platform | $200.00     | $0.00   | $0.00 |
        And I fill the amount to pay with
            | Services | 100 |
        And I select the payment method with "Credit Card ****3857"
        When I click Pay Bill button
        Then I assert the amount to pay with
            | amount | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
            | 100.00 | $1,380.00           | $0.00                               | Credit Card ****3857 | Feb 24,2021  |
        Then I click on "Pay $100" button
        And I assert that the text is shown
            | Success! You succsesfully paid $100.00 |

    @billing @payment
    Scenario: Make a payment (Pay specific invoice)
        Given I am in Scorpion "billing" page
        Then I check the Current Total Balance Due with "$1,380.00"
        And I click the kebab option "Pay" for "Recent Invoices" with "Unpaid" status
        And I check the services balance due with
            | service  | due_balance | credits | pay      |
            | Services | $180.00     | $0.00   | $180.00  |
            | Paid Ads | $1000.00    | $0.00   | $1000.00 |
            | Platform | $200.00     | $0.00   | $200.00  |
        And I select the payment method with "Credit Card ****3857"
        When I click Pay Bill button
        Then I assert the amount to pay with
            | amount | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
            | 1380.00 | $1,380.00           | $0.00                               | Credit Card ****3857 | Feb 24,2021  |
        Then I click on "Pay $1380" button
        And I assert that the text is shown
            | Success! You succsesfully paid $1,380.00 |

    @billing
    Scenario: Logout

        When I click on settings button
        And I sign out Scorpion
