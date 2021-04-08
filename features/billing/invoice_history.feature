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
            | Invoice Date | Invoice | Description | Billing Period | Status | Amount |
        Then I assert I can see historical invoices with
            | Invoice Date | Invoice | Billing Period | Status  | Amount |
            | Mar 31, 2021 | 25      |                | Monthly | Paid   | $20,000.00 |
            | Feb 28, 2021 | 24      |                | Monthly | Paid   | $20,000.00 |
            | Jan 31, 2021 | 23      |                | Monthly | Paid   | $20,000.00 |
            | Dec 31, 2020 | 22      |                | Monthly | Paid   | $20,000.00 |
            | Nov 30, 2020 | 21      |                | Monthly | Paid   | $20,000.00 |
            | Oct 31, 2020 | 20      |                | Monthly | Paid   | $20,000.00 |
            | Sep 30, 2020 | 19      |                | Monthly | Paid   | $20,000.00 |
            | Aug 31, 2020 | 18      |                | Monthly | Paid   | $20,000.00 |
            | Jul 31, 2020 | 17      |                | Monthly | Paid   | $20,000.00 |
            | Jun 30, 2020 | 16      |                | Monthly | Paid   | $20,000.00 |

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
            | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
            | Dec 31, 2020 | 22      |             | Monthly        | Paid   | $20,000.00 |
            | Nov 30, 2020 | 21      |             | Monthly        | Paid   | $20,000.00 |
            | Oct 31, 2020 | 20      |             | Monthly        | Paid   | $20,000.00 |
            | Sep 30, 2020 | 19      |             | Monthly        | Paid   | $20,000.00 |
            | Aug 31, 2020 | 18      |             | Monthly        | Paid   | $20,000.00 |
            | Jul 31, 2020 | 17      |             | Monthly        | Paid   | $20,000.00 |
            | Jun 30, 2020 | 16      |             | Monthly        | Paid   | $20,000.00 |
            | 2019         | ...     |             |                |        |            |

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
            | Invoice Date | Invoice | description | Billing Period | Status | Amount     |
            | ...          | 22      | description | Monthly        | Paid   | $20,000.00 |
            | ...          | 21      | description | Monthly        | Paid   | $20,000.00 |
            | ...          | 20      | description | Monthly        | Paid   | $20,000.00 |

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
            | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
            | ...          | 22      |             | Monthly        | Paid   | $10,000.00 |
            | ...          | 21      |             | Monthly        | Paid   | $5,000.00  |
            | ...          | 20      |             | Monthly        | Paid   | $1,000.00  |

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
            | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
            | ...          | 22      |             | Monthly        | Paid   | $10,000.00 |
            | ...          | 21      |             | Monthly        | Paid   | $5,000.00  |
            | ...          | 20      |             | Monthly        | Paid   | $1,000.00  |
        When I select the filter "by_status" with "Partially Paid"
            | Invoice Date | Invoice | Billing Period | Status | Amount |
        Then I assert I can see historical invoices with
            | ... | 22 | Monthly | Partially Paid | $10,000.00 |
            | ... | 21 | Monthly | Partially Paid | $5,000.00  |
            | ... | 20 | Monthly | Partially Paid | $1,000.00  |
        When I select the filter "by_status" with "Unpaid"
        Then I assert I can see historical invoices with
            | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
            | ...          | 22      |             | Monthly        | Unpaid | $10,000.00 |
            | ...          | 21      |             | Monthly        | Unpaid | $5,000.00  |
            | ...          | 20      |             | Monthly        | Unpaid | $1,000.00  |
        When I select the filter "by_status" with "Due Balance"
        Then I assert I can see historical invoices with
            | Invoice Date | Invoice | Description | Billing Period | Status      | Amount     |
            | ...          | 22      |             | Monthly        | Due Balance | $10,000.00 |
            | ...          | 21      |             | Monthly        | Due Balance | $5,000.00  |
            | ...          | 20      |             | Monthly        | Due Balance | $1,000.00  |
        When I select the filter "by_status" with "Services"
        Then I assert I can see historical invoices with
            | Invoice Date | Invoice | Billing Period | Status   | Amount     |
            | ...          | 22      | Monthly        | Services | $10,000.00 |
            | ...          | 21      | Monthly        | Services | $5,000.00  |
            | ...          | 20      | Monthly        | Services | $1,000.00  |
        When I select the filter "by_status" with "Advertising"
        Then I assert I can see historical invoices with
            | Invoice Date | Invoice | Billing Period | Status   | Amount     |
            | ...          | 22      | Monthly        | Services | $10,000.00 |
            | ...          | 21      | Monthly        | Services | $5,000.00  |
            | ...          | 20      | Monthly        | Services | $1,000.00  |

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
        Then I assert no invoices are shown

        Examples:

            | filter    | value             |
            | by_year   | 1994              |
            | by_date   | 1/1/1994-6/6/1994 |
            | by_price  | 10000000-1000001  |
            | by_status | Services          |

    @billing @invoice_history
    Scenario Outline: Assert_download_<download_option>_functionality
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
        Then I click the kebab option "<kebab_option>" for "Billing History" with
            | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
            | ...          | 22      |             | Monthly        | Unpaid | $10,000.00 |
        And I assert "<dowload_option>" dowload option

        Examples:
            | kebab_option | download_option |
            | Download     | CSV             |
            | Download     | PDF             |
            | Download     | DOC             |

    @billing @invoice_history
    Scenario: Assert_send_functionality
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
        Then I click the kebab option "Send" for "Billing History" with
            | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
            | ...          | 22      |             | Monthly        | Unpaid | $10,000.00 |
        And I fill the contact information with
            | David Gilmore | jamesissac@gmail.com |
        And I click on send button
        And I assert that the text is shown
            | Success! |

    @billing @invoice_history
    Scenario: Assert_print_functionality
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
        Then I click the kebab option "Print" for "Billing History" with
            | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
            | ...          | 22      |             | Monthly        | Unpaid | $10,000.00 |
        And I assert print functionality

    @billing @invoice_history
    Scenario: Assert_order_by_date
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
        Then I click on "Invoice Date" column
        And I assert records are ordered with
            | datatable |

    @billing @invoice_history
    Scenario: Assert_order_by_invoice_number
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
        Then I click on "Invoice" column
        And I assert records are ordered with
            | datatable |

    @billing @invoice_history
    Scenario: Assert_order_by_description
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
        Then I click on "Description" column
        And I assert records are ordered with
            | datatable |

    @billing @invoice_history
    Scenario: Assert_order_by_billing_period
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
        Then I click on "Billing Period" column
        And I assert records are ordered with
            | datatable |

    @billing @invoice_history
    Scenario: Assert_order_by_status
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
        Then I click on "Status" column
        And I assert records are ordered with
            | datatable |

    @billing @invoice_history
    Scenario: Assert_order_by_amount
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
        Then I click on "Amount" column
        And I assert records are ordered with
            | datatable |

    @billing @invoice_history
    Scenario Outline: Assert_invoice_search_<criteria>
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
        And I search invoices with "<value>"
        Then I assert I can see historical invoices with
            | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
            | ...          | 22      | Services    | Monthly        | Unpaid | $10,000.00 |

        Examples:

            | criteria          | value    |
            | by_description    | Services |
            | by_amount         | 10,000   |
            | by_invoice_number | 22       |
            | by_date           | ...      |

    @billing @invoice_history
    Scenario Outline: Assert_invoice_search__with_no_results_searching_<criteria>
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
        And I search invoices with "<value>"
        Then I assert no invoices are shown

        Examples:

            | criteria          | value    |
            | by_description    | TEST     |
            | by_amount         | 10000000 |
            | by_invoice_number | 99999    |
            | by_date           | ...      |
