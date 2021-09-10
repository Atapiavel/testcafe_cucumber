Feature: Billing Invoice History

    @billing @invoice_history
    Scenario: Invoice_history_columns_and_records
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        Then I verify the columns are showed with
            | INVOICE DATE | INVOICE | BILLING PERIOD | STATUS | AMOUNT |
        Then I assert I can see historical invoices filtered "-" with "-"
        And I wait for "5" seconds

    @billing @invoice_history
    Scenario: Invoice_filtering_with_no_results
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        When I select the filter "by_price" with "10000000-1000001"
        And I wait for "2" seconds
        And I click on apply button
        Then I assert no invoices are shown

    @billing @invoice_history
    Scenario: Invoice_filtering_by_year
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        When I select the filter "by_year" with "2020"
        And I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices filtered "by_year" with "2020"
        When I select the filter "by_year" with "2021"
        And I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices filtered "by_year" with "2021"

    # need to refactor date filtering
    # @billing @invoice_history
    # Scenario: Invoice_filtering_by_date
    #     Given I am in Scorpion login page
    #     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
    #     And I click on sign in button
    #     And I wait for "10" seconds
    #     Given I am in Scorpion "settings" page
    #     And I wait for "5" seconds
    #     And I hover on More option
    #     Then I select the "Billing" option
    #     And I click on see all option
    #     And I wait for "5" seconds
    #     Then I assert the Scorpion Billing History page
    #     When I select the filter "by_date" with "Actual"
    #     And I click on apply button
    #     Then I assert I can see historical invoices filtered "by_date" with "Actual"

    @billing @invoice_history
    Scenario: Invoice_filtering_by_month
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        When I select the filter "by_month" with "Actual"
        And I click on apply button
        Then I assert I can see historical invoices filtered "by_month" with "Actual"

    @billing @invoice_history
    Scenario: Invoice_filtering_by_price
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        And I click on filter button
        When I select the filter "by_price" with "1000.00-3000.00"
        When I click on apply button
        Then I assert I can see historical invoices filtered "by_price" with "1000.00-3000.00"

    @billing @invoice_history
    Scenario: Invoice_filtering_by_paid_status
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        And I click on filter button
        When I select the filter "by_status" with "Paid"
        And I click on apply button
        Then I assert I can see historical invoices filtered "by_status" with "Paid"

    @billing @invoice_history
    Scenario: Invoice_filtering_by_unpaid_status
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        And I click on filter button
        When I select the filter "by_status" with "Unpaid"
        And I click on apply button
        Then I assert I can see historical invoices filtered "by_status" with "Unpaid"

    @billing @invoice_history
    Scenario: Invoice_filtering_by_partially_paid_status
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        And I click on filter button
        When I select the filter "by_status" with "Partially paid"
        And I click on apply button
        Then I assert I can see historical invoices filtered "by_status" with "Partially paid"

    @billing @invoice_history
    Scenario: Results_counter_from_filter_modal
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        And I click on filter button
        When I select the filter "by_status" with "Paid"
        And I wait for "2" seconds
        Then I assert the results for the filter "by_status" with "Paid"
        And I click on cancel button
        And I click on filter button
        When I select the filter "by_status" with "Unpaid"
        And I wait for "2" seconds
        Then I assert the results for the filter "by_status" with "Unpaid"
        And I click on cancel button
        And I click on filter button
        When I select the filter "by_price" with "1000.00-4000.00"
        And I wait for "2" seconds
        Then I assert the results for the filter "by_price" with "1000.00-4000.00"
        And I click on cancel button
        And I click on filter button
        And I wait for "1" seconds
        When I select the filter "by_price" with "100.00-2000.00"
        And I click on filter button
        And I wait for "2" seconds
        Then I assert the results for the filter "by_price" with "100.00-2000.00"

    @billing @invoice_history
    Scenario: Clear_all_filters_functionality
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        When I select the filter "by_year" with "2020"
        And I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices filtered "by_year" with "2020"
        And I click on clear all filters link
        And I assert I can see historical invoices filtered "-" with "-"
        And I click on filter button
        When I select the filter "by_price" with "1000.00-3000.00"
        And I wait for "2" seconds
        Then I assert the results for the filter "by_price" with "1000.00-3000.00"
        When I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices filtered "by_price" with "1000.00-3000.00"
        And I click on clear all filters link
        And I assert I can see historical invoices filtered "-" with "-"

# # @billing @invoice_history
# # Scenario: Order_by_date
# #     Given I am in Scorpion login page
# #     When I enter "commcenter@scorpion.co" and "Comms1234!"
# #     And I click on sign in button
# #     And I wait for "2" seconds
# #     And I select the account to use with "Thomas & Paulk"
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     And I click on see all option
# #     And I wait for "5" seconds
# #     Then I assert the Scorpion Billing History page
# #     Then I click on "Invoice Date" column
# #     And I assert records are ordered with
# #         | datatable |

# # @billing @invoice_history
# # Scenario: Order_by_invoice_number
# #     Given I am in Scorpion login page
# #     When I enter "commcenter@scorpion.co" and "Comms1234!"
# #     And I click on sign in button
# #     And I wait for "2" seconds
# #     And I select the account to use with "Thomas & Paulk"
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     And I click on see all option
# #     And I wait for "5" seconds
# #     Then I assert the Scorpion Billing History page
# #     Then I click on "Invoice" column
# #     And I assert records are ordered with
# #         | datatable |

# # @billing @invoice_history
# # Scenario: Order_by_description
# #     Given I am in Scorpion login page
# #     When I enter "commcenter@scorpion.co" and "Comms1234!"
# #     And I click on sign in button
# #     And I wait for "2" seconds
# #     And I select the account to use with "Thomas & Paulk"
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     And I click on see all option
# #     And I wait for "5" seconds
# #     Then I assert the Scorpion Billing History page
# #     Then I click on "Description" column
# #     And I assert records are ordered with
# #         | datatable |

# # @billing @invoice_history
# # Scenario: Order_by_billing_period
# #     Given I am in Scorpion login page
# #     When I enter "commcenter@scorpion.co" and "Comms1234!"
# #     And I click on sign in button
# #     And I wait for "2" seconds
# #     And I select the account to use with "Thomas & Paulk"
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     And I click on see all option
# #     And I wait for "5" seconds
# #     Then I assert the Scorpion Billing History page
# #     Then I click on "Billing Period" column
# #     And I assert records are ordered with
# #         | datatable |

# # @billing @invoice_history
# # Scenario: Order_by_status
# #     Given I am in Scorpion login page
# #     When I enter "commcenter@scorpion.co" and "Comms1234!"
# #     And I click on sign in button
# #     And I wait for "2" seconds
# #     And I select the account to use with "Thomas & Paulk"
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     And I click on see all option
# #     And I wait for "5" seconds
# #     Then I assert the Scorpion Billing History page
# #     Then I click on "Status" column
# #     And I assert records are ordered with
# #         | datatable |

# # @billing @invoice_history
# # Scenario: Order_by_amount
# #     Given I am in Scorpion login page
# #     When I enter "commcenter@scorpion.co" and "Comms1234!"
# #     And I click on sign in button
# #     And I wait for "2" seconds
# #     And I select the account to use with "Thomas & Paulk"
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     And I click on see all option
# #     And I wait for "5" seconds
# #     Then I assert the Scorpion Billing History page
# #     Then I click on "Amount" column
# #     And I assert records are ordered with
# #         | datatable |

# # @billing @invoice_history
# # Scenario Outline: Invoice_search_<criteria>
# #     Given I am in Scorpion login page
# #     When I enter "commcenter@scorpion.co" and "Comms1234!"
# #     And I click on sign in button
# #     And I wait for "2" seconds
# #     And I select the account to use with "Thomas & Paulk"
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     And I click on see all option
# #     And I wait for "5" seconds
# #     Then I assert the Scorpion Billing History page
# #     And I search invoices with "<value>"
# #     Then I assert I can see historical invoices filtered "by_year" with "2020"
# #         | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
# #         | ...          | 22      | Services    | Monthly        | Unpaid | $10,000.00 |

# #     Examples:

# #         | criteria          | value    |
# #         | by_description    | Services |
# #         | by_amount         | 10,000   |
# #         | by_invoice_number | 22       |
# #         | by_date           | ...      |

# # @billing @invoice_history
# # Scenario Outline: Invoice_search__with_no_results_searching_<criteria>
# #     Given I am in Scorpion login page
# #     When I enter "commcenter@scorpion.co" and "Comms1234!"
# #     And I click on sign in button
# #     And I wait for "2" seconds
# #     And I select the account to use with "Thomas & Paulk"
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     And I click on see all option
# #     And I wait for "5" seconds
# #     Then I assert the Scorpion Billing History page
# #     And I search invoices with "<value>"
# #     Then I assert no invoices are shown

# #     Examples:

# #         | criteria          | value    |
# #         | by_description    | TEST     |
# #         | by_amount         | 10000000 |
# #         | by_invoice_number | 99999    |
# #         | by_date           | ...      |
