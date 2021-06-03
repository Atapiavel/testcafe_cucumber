Feature: Payment

    #     @billing @payment
    #     Scenario Outline: Set_as_primary_functionality_from_<module>
    #         Given I am in Scorpion login page
    #         When I enter "commcenter@scorpion.co" and "Comms1234!"
    #         And I click on sign in button
    #         And I wait for "2" seconds
    #         And I select the account to use with "Thomas & Paulk"
    #         And I wait for "10" seconds
    #         When I click on settings button
    #         And I select the "Billing" option
    #         And I wait for "5" seconds
    #         Given I am in Scorpion "billing" page
    #         Then I click the kebab option "<kebab_option>" for "<module>"
    #         And I assert that the text is shown
    #             | Success! |
    #         Then I assert "<payment_method>" as primary payment method

    #         Examples:
    #             | kebab_option   | module         | payment_method |
    #             | Set_as_primary | Payment_method | Visa **** 4520 |

    #     @billing @payment
    #     Scenario: <module>_<kebab_option>_option_is_visible
    #         Given I am in Scorpion login page
    #         When I enter "commcenter@scorpion.co" and "Comms1234!"
    #         And I click on sign in button
    #         And I wait for "2" seconds
    #         And I select the account to use with "Thomas & Paulk"
    #         And I wait for "10" seconds
    #         When I click on settings button
    #         And I select the "Billing" option
    #         And I wait for "5" seconds
    #         Given I am in Scorpion "billing" page
    #         Then I assert "<kebab_option>" option is visible

    #         Examples:

    #             | kebab_option   | module         |
    #             | Set_as_primary | Payment_method |
    #             | delete         | Payment_method |

    #     @billing @payment
    #     Scenario Outline: Cancel_button_from_<module>_<kebab_option>_functionality
    #         Given I am in Scorpion login page
    #         When I enter "commcenter@scorpion.co" and "Comms1234!"
    #         And I click on sign in button
    #         And I wait for "2" seconds
    #         And I select the account to use with "Thomas & Paulk"
    #         And I wait for "10" seconds
    #         When I click on settings button
    #         And I select the "Billing" option
    #         And I wait for "5" seconds
    #         Given I am in Scorpion "billing" page
    #         Then I click the kebab option "<kebab_option>" for "<module>"
    #         And I click on cancel button

    #         Examples:

    #             | kebab_option | module          |
    #             | send         | Recent_invoices |
    #             | update       | Payment_method  |
    #             | add          | Payment_method  |

    @billing @payment
    Scenario Outline: Add_payment_method_functionality
        Given I am in Scorpion "sign-in" page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I wait for "5" seconds
        When I click on add payment method
        And I select the payment method with "<payment_method>"
        And I click on continue button
        Then I fill payment method information with
            | <payment_method> | <payment_nickname> | <account_name> | <account_number> | <expiration> | <CVV> |

        Examples:

            | module         | payment_method         | payment_nickname | account_name       | account_number   | expiration | CVV |
            | Payment_method | Credit and Debit cards | El tester        | Testing Automation | 4242424242424242 | 0723       | 111 |
# | Payment_method | eCheck                 |                  | Name here          | 00000000         |            |111|


#     @billing @payment
#     Scenario Outline: Update_payment_method_functionality
#         Given I am in Scorpion login page
#         When I enter "commcenter@scorpion.co" and "Comms1234!"
#         And I click on sign in button
#         And I wait for "2" seconds
#         And I select the account to use with "Thomas & Paulk"
#         And I wait for "10" seconds
#         When I click on settings button
#         And I select the "Billing" option
#         And I wait for "5" seconds
#         Given I am in Scorpion "billing" page
#         When I click the kebab option "<kebab_option>" for "<module>"
#         Then I update "<module>" card information with
#             | Credit_Number    | Name_on_Card   | Expiration | CVV |
#             | 1111222233333495 | Gandalf D Grey | 04/24      | 469 |
#         And I update "<module>" billing address with
#             | Address_Line_1      | Address_Line_2 | City    | State    | Zipcode |
#             | 1204 W Chestnube St | 123 Street     | Chicago | Illinois | 20405   |
#         And I assert that the text is shown
#             | Success! |
#         When I click the kebab option "<kebab_option>" for "<module>"
#         Then I assert "<module>" card information with
#             | Credit_Number    | Name_on_Card   | Expiration | CVV |
#             | 1111222233333495 | Gandalf D Grey | 04/24      | 469 |
#         And I assert "<module>" billing address with
#             | Address_Line_1      | Address_Line_2 | City    | State    | Zipcode |
#             | 1204 W Chestnube St | 123 Street     | Chicago | Illinois | 20405   |
#         And I click on cancel button

#         Examples:

#             | kebab_option | module         |
#             | update       | Payment_method |

#     @billing @payment
#     Scenario Outline: Delete_functionality_from_<module>
#         Given I am in Scorpion login page
#         When I enter "commcenter@scorpion.co" and "Comms1234!"
#         And I click on sign in button
#         And I wait for "2" seconds
#         And I select the account to use with "Thomas & Paulk"
#         And I wait for "10" seconds
#         When I click on settings button
#         And I select the "Billing" option
#         And I wait for "5" seconds
#         Given I am in Scorpion "billing" page
#         Then I click the kebab option "<kebab_option>" for "<module>"
#         And I assert that the text is shown
#             | Success! |
#         And I assert "<payment_method>" payment method is not visible

#         Examples:
#             | kebab_option | module         | payment_method |
#             | delete       | Payment_method | Visa **** 5869 |

#     @billing @payment
#     Scenario: Make_a_payment
#         Given I am in Scorpion login page
#         When I enter "commcenter@scorpion.co" and "Comms1234!"
#         And I click on sign in button
#         And I wait for "2" seconds
#         And I select the account to use with "Thomas & Paulk"
#         And I wait for "10" seconds
#         When I click on settings button
#         And I select the "Billing" option
#         And I wait for "5" seconds
#         Given I am in Scorpion "billing" page
#         Then I check the Current Total Balance Due with "$1,380.00"
#         When I click on make a payment option
#         Then I check the services balance due with
#             | service  | due_balance | credits | pay      |
#             | Services | $180.00     | $0.00   | $180.00  |
#             | Paid Ads | $1000.00    | $0.00   | $1000.00 |
#             | Platform | $200.00     | $0.00   | $200.00  |
#         And I select the payment method with "Credit Card ****3857"
#         When I click Pay Bill button
#         Then I assert the amount to pay with
#             | amount   | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
#             | 1,380.00 | $1,388.00           | $0.00                               | Credit Card ****3857 | Feb 24,2021  |
#         Then I click on "Pay $1,380" button
#         And I assert that the text is shown
#             | Success! You succsesfully paid $1,380.00 |

#     @billing @payment
#     Scenario: Make_a_payment_(Overpay)
#         Given I am in Scorpion login page
#         When I enter "commcenter@scorpion.co" and "Comms1234!"
#         And I click on sign in button
#         And I wait for "2" seconds
#         And I select the account to use with "Thomas & Paulk"
#         And I wait for "10" seconds
#         When I click on settings button
#         And I select the "Billing" option
#         And I wait for "5" seconds
#         Given I am in Scorpion "billing" page
#         Then I check the Current Total Balance Due with "$1,380.00"
#         When I click on make a payment option
#         And I click on other payment tab
#         Then I check the services balance due with
#             | service  | due_balance | credits | pay   |
#             | Services | $180.00     | $0.00   | $0.00 |
#             | Paid Ads | $1000.00    | $0.00   | $0.00 |
#             | Platform | $200.00     | $0.00   | $0.00 |
#         And I fill the amount to pay with
#             | Services | 1000 |
#             | Paid Ads | 6000 |
#             | Platform | 1000 |
#         And I select the payment method with "Credit Card ****3857"
#         When I click Pay Bill button
#         Then I assert the amount to pay with
#             | amount   | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
#             | 8,000.00 | $1,388.00           | $6,120.00                           | Credit Card ****3857 | Feb 24,2021  |
#         Then I click on "Pay $8,000" button
#         And I assert that the text is shown
#             | Success! You succsesfully paid $8,000.00 |

#     @billing @payment
#     Scenario: Make_a_payment_(Past_due_payment)
#         Given I am in Scorpion login page
#         When I enter "commcenter@scorpion.co" and "Comms1234!"
#         And I click on sign in button
#         And I wait for "2" seconds
#         And I select the account to use with "Thomas & Paulk"
#         And I wait for "10" seconds
#         When I click on settings button
#         And I select the "Billing" option
#         And I wait for "5" seconds
#         Given I am in Scorpion "billing" page
#         Then I check the Current Total Balance Due with "$1,380.00"
#         When I hover the advertisement
#         Then I check the past due values with
#             | service        | past_due_balance |
#             | Services       | $250.00          |
#             | Paid Ads       | $500.00          |
#             | Platform       | $250.00          |
#             | Total past due | $1,000.00        |
#         When I click on make a payment option
#         Then I check the services balance due with
#             | service  | due_balance | past_duebalance | credits | pay      |
#             | Services | $190.00     | $250.00         | $0.00   | $440.00  |
#             | Paid Ads | $550.00     | $500.00         | $0.00   | $1050.00 |
#             | Platform | $90.00      | $250.00         | $0.00   | $340.00  |
#         And I select the payment method with "Credit Card ****3857"
#         When I click Pay Bill button
#         Then I assert the amount to pay with
#             | paymentamount | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
#             | xxx.00        | $xxx.00             | xxx.00                              | Credit Card ****3857 | Feb 24,2021  |
#         Then I click on "Pay $xxx.00" button
#         And I assert that the text is shown
#             | Success! You succsesfully paid $xxx.00 |

#     @billing @payment
#     Scenario: Make_a_payment_(Underpay)
#         Given I am in Scorpion login page
#         When I enter "commcenter@scorpion.co" and "Comms1234!"
#         And I click on sign in button
#         And I wait for "2" seconds
#         And I select the account to use with "Thomas & Paulk"
#         And I wait for "10" seconds
#         When I click on settings button
#         And I select the "Billing" option
#         And I wait for "5" seconds
#         Given I am in Scorpion "billing" page
#         Then I check the Current Total Balance Due with "$1,380.00"
#         When I click on make a payment option
#         And I click on other payment tab
#         Then I check the services balance due with
#             | service  | due_balance | credits | pay   |
#             | Services | $180.00     | $0.00   | $0.00 |
#             | Paid Ads | $1000.00    | $0.00   | $0.00 |
#             | Platform | $200.00     | $0.00   | $0.00 |
#         And I fill the amount to pay with
#             | Services | 100 |
#         And I select the payment method with "Credit Card ****3857"
#         When I click Pay Bill button
#         Then I assert the amount to pay with
#             | amount | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
#             | 100.00 | $1,380.00           | $0.00                               | Credit Card ****3857 | Feb 24,2021  |
#         Then I click on "Pay $100" button
#         And I assert that the text is shown
#             | Success! You succsesfully paid $100.00 |

#     @billing @payment
#     Scenario: Make_a_payment_(Pay_specific_invoice)
#         Given I am in Scorpion login page
#         When I enter "commcenter@scorpion.co" and "Comms1234!"
#         And I click on sign in button
#         And I wait for "2" seconds
#         And I select the account to use with "Thomas & Paulk"
#         And I wait for "10" seconds
#         When I click on settings button
#         And I select the "Billing" option
#         And I wait for "5" seconds
#         Given I am in Scorpion "billing" page
#         Then I check the Current Total Balance Due with "$1,380.00"
#         And I click the kebab option "Pay" for "Recent Invoices" with "Unpaid" status
#         And I check the services balance due with
#             | service  | due_balance | credits | pay      |
#             | Services | $180.00     | $0.00   | $180.00  |
#             | Paid Ads | $1000.00    | $0.00   | $1000.00 |
#             | Platform | $200.00     | $0.00   | $200.00  |
#         And I select the payment method with "Credit Card ****3857"
#         When I click Pay Bill button
#         Then I assert the amount to pay with
#             | amount  | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
#             | 1380.00 | $1,380.00           | $0.00                               | Credit Card ****3857 | Feb 24,2021  |
#         Then I click on "Pay $1380" button
#         And I assert that the text is shown
#             | Success! You succsesfully paid $1,380.00 |

#     @billing @payment
#     Scenario: Make_a_payment_(View_and_pay_specific_invoice)
#         Given I am in Scorpion login page
#         When I enter "commcenter@scorpion.co" and "Comms1234!"
#         And I click on sign in button
#         And I wait for "2" seconds
#         And I select the account to use with "Thomas & Paulk"
#         And I wait for "10" seconds
#         When I click on settings button
#         And I select the "Billing" option
#         And I wait for "5" seconds
#         Given I am in Scorpion "billing" page
#         Then I check the Current Total Balance Due with "$1,380.00"
#         And I click the kebab option "View" for "Recent Invoices" with "Unpaid" status
#         And I check the services balance due with
#             | service  | due_balance | credits | pay      |
#             | Services | $180.00     | $0.00   | $180.00  |
#             | Paid Ads | $1000.00    | $0.00   | $1000.00 |
#             | Platform | $200.00     | $0.00   | $200.00  |
#         Then I click on "Pay $1380" button
#         Then I assert the amount to pay with
#             | amount  | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
#             | 1380.00 | $1,380.00           | $0.00                               | Credit Card ****3857 | Feb 24,2021  |
#         And I assert that the text is shown
#             | Success! You succsesfully paid $1,380.00 |
