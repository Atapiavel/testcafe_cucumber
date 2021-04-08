Feature: Billing Payment

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
            | paymentamount | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
            | xxx.00        | $xxx.00             | xxx.00                              | Credit Card ****3857 | Feb 24,2021  |
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
            | amount  | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
            | 1380.00 | $1,380.00           | $0.00                               | Credit Card ****3857 | Feb 24,2021  |
        Then I click on "Pay $1380" button
        And I assert that the text is shown
            | Success! You succsesfully paid $1,380.00 |

    @billing @payment
    Scenario: Make a payment (View and pay specific invoice)
        Given I am in Scorpion "billing" page
        Then I check the Current Total Balance Due with "$1,380.00"
        And I click the kebab option "View" for "Recent Invoices" with "Unpaid" status
        And I check the services balance due with
            | service  | due_balance | credits | pay      |
            | Services | $180.00     | $0.00   | $180.00  |
            | Paid Ads | $1000.00    | $0.00   | $1000.00 |
            | Platform | $200.00     | $0.00   | $200.00  |
        Then I click on "Pay $1380" button
        Then I assert the amount to pay with
            | amount  | current_due_balance | credit_balance_after_payment_sumbit | payment_method       | payment_date |
            | 1380.00 | $1,380.00           | $0.00                               | Credit Card ****3857 | Feb 24,2021  |
        And I assert that the text is shown
            | Success! You succsesfully paid $1,380.00 |
