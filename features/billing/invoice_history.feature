Feature: Billing Invoice History

    @billing @invoice_history
    Scenario: Assert_invoice_history_columns_and_records
        Given I am in Scorpion "sign-in" page
        When I enter "commcenter@scorpion.co" and "Comms1234!"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        Then I verify the columns are showed with
            | Invoice Date | Invoice | Billing Period | Status | Amount |
        Then I assert I can see historical invoices with
            | Mar 31, 2021 | 25 | Monthly | Paid | $20,000.00 |
            | Feb 28, 2021 | 24 | Monthly | Paid | $20,000.00 |
            | Jan 31, 2021 | 23 | Monthly | Paid | $20,000.00 |
            | Dec 31, 2020 | 22 | Monthly | Paid | $20,000.00 |
            | Nov 30, 2020 | 21 | Monthly | Paid | $20,000.00 |
            | Oct 31, 2020 | 20 | Monthly | Paid | $20,000.00 |
            | Sep 30, 2020 | 19 | Monthly | Paid | $20,000.00 |
            | Aug 31, 2020 | 18 | Monthly | Paid | $20,000.00 |
            | Jul 31, 2020 | 17 | Monthly | Paid | $20,000.00 |
            | Jun 30, 2020 | 16 | Monthly | Paid | $20,000.00 |

    @billing @invoice_history
    Scenario: Assert_invoice_filtering_by_year
        Given I am in Scorpion "sign-in" page
        When I enter "commcenter@scorpion.co" and "Comms1234!"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        When I select the filter "by_year" with "2019-2020"
        Then I assert I can see historical invoices with
            | Dec 31, 2020 | 22  | Monthly | Paid | $20,000.00 |
            | Nov 30, 2020 | 21  | Monthly | Paid | $20,000.00 |
            | Oct 31, 2020 | 20  | Monthly | Paid | $20,000.00 |
            | Sep 30, 2020 | 19  | Monthly | Paid | $20,000.00 |
            | Aug 31, 2020 | 18  | Monthly | Paid | $20,000.00 |
            | Jul 31, 2020 | 17  | Monthly | Paid | $20,000.00 |
            | Jun 30, 2020 | 16  | Monthly | Paid | $20,000.00 |
            | 2019         | ... |         |      |            |

    @billing @invoice_history
    Scenario: Assert_invoice_filtering_by_date
        Given I am in Scorpion "sign-in" page
        When I enter "commcenter@scorpion.co" and "Comms1234!"
        And I click on sign in button/
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        When I select the filter "by_date" with "1/1/2019-6/6/2019"
        Then I assert I can see historical invoices with
            | ... | 22 | Monthly | Paid | $20,000.00 |
            | ... | 21 | Monthly | Paid | $20,000.00 |
            | ... | 20 | Monthly | Paid | $20,000.00 |

    @billing @invoice_history
    Scenario: Assert_invoice_filtering_by_price
        Given I am in Scorpion "sign-in" page
        When I enter "commcenter@scorpion.co" and "Comms1234!"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        When I select the filter "by_price" with "500-10000"
        Then I assert I can see historical invoices with
            | ... | 22 | Monthly | Paid | $10,000.00 |
            | ... | 21 | Monthly | Paid | $5,000.00  |
            | ... | 20 | Monthly | Paid | $1,000.00  |

    @billing @invoice_history
    Scenario: Assert_invoice_filtering_by_status
        Given I am in Scorpion "sign-in" page
        When I enter "commcenter@scorpion.co" and "Comms1234!"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        When I select the filter "by_status" with "Paid"
        Then I assert I can see historical invoices with
            | ... | 22 | Monthly | Paid | $10,000.00 |
            | ... | 21 | Monthly | Paid | $5,000.00  |
            | ... | 20 | Monthly | Paid | $1,000.00  |
        When I select the filter "by_status" with "Partially Paid"
        Then I assert I can see historical invoices with
            | ... | 22 | Monthly | Partially Paid | $10,000.00 |
            | ... | 21 | Monthly | Partially Paid | $5,000.00  |
            | ... | 20 | Monthly | Partially Paid | $1,000.00  |
        When I select the filter "by_status" with "Unpaid"
        Then I assert I can see historical invoices with
            | ... | 22 | Monthly | Unpaid | $10,000.00 |
            | ... | 21 | Monthly | Unpaid | $5,000.00  |
            | ... | 20 | Monthly | Unpaid | $1,000.00  |
        When I select the filter "by_status" with "Due Balance"
        Then I assert I can see historical invoices with
            | ... | 22 | Monthly | Due Balance | $10,000.00 |
            | ... | 21 | Monthly | Due Balance | $5,000.00  |
            | ... | 20 | Monthly | Due Balance | $1,000.00  |
        When I select the filter "by_status" with "Services"
        Then I assert I can see historical invoices with
            | ... | 22 | Monthly | Services | $10,000.00 |
            | ... | 21 | Monthly | Services | $5,000.00  |
            | ... | 20 | Monthly | Services | $1,000.00  |
        When I select the filter "by_status" with "Advertising"
        Then I assert I can see historical invoices with
            | ... | 22 | Monthly | Services | $10,000.00 |
            | ... | 21 | Monthly | Services | $5,000.00  |
            | ... | 20 | Monthly | Services | $1,000.00  |

    @billing @invoice_history
    Scenario: Assert_invoice_filtering_by_price
        Given I am in Scorpion "sign-in" page
        When I enter "commcenter@scorpion.co" and "Comms1234!"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        When I select the filter "by_price" with "500-10000"
        Then I assert I can see historical invoices with
            | ... | 22 | Monthly | Paid | $10,000.00 |
            | ... | 21 | Monthly | Paid | $5,000.00  |
            | ... | 20 | Monthly | Paid | $1,000.00  |

    @billing @invoice_history
    Scenario Outline: Assert_invoice_filtering_with_no_results_filtering_<filter>
        Given I am in Scorpion "sign-in" page
        When I enter "commcenter@scorpion.co" and "Comms1234!"
        And I click on sign in button
        And I wait for "2" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        When I select the filter "<filter>" with "<value>"
        Then I assert I can see historical invoices with

        Examples:

            | filter    | value             |
            | by_year   | 1994              |
            | by_date   | 1/1/1994-6/6/1994 |
            | by_price  | 10000000-1000001  |
            | by_status | Services          |
