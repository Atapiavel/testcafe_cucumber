Feature: Billing Invoice History

    @billing @invoice_history
    Scenario: Invoice_history_columns_and_records
        Given I am in Scorpion "sign-in" page
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
            | Invoice Date | Invoice Number | Billing Period | Status | Amount |
        Then I assert I can see historical invoices with
            | May 8, 2021  | 20210508-0029 | Monthly | Unpaid | $40,000.00 |
            | May 1, 2021  | 20210501-0006 | Monthly | Unpaid | $20,000.00 |
            | Apr 12, 2021 | 20210412-0005 | Monthly | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004 | Monthly | Unpaid | $40,000.00 |
            | Feb 18, 2021 | 2             | Monthly | Unpaid | $80,000.00 |
            | Feb 18, 2021 | 1             | Monthly | Paid   | $80,000.00 |

    @billing @invoice_history @focus
    Scenario Outline: Invoice_history_kebab_options_are_visible_for_<Invoice_Number>
        Given I am in Scorpion "sign-in" page
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
        And I assert "send" kebab option is visible for
            | <Invoice_Date> | <Invoice_Number> | <Billing_Period> | <Status> | <Amount> |
        And I wait for "1" seconds
        And I assert "print" kebab option is visible for
            | <Invoice_Date> | <Invoice_Number> | <Billing_Period> | <Status> | <Amount> |
        And I wait for "1" seconds
        And I assert "download_PDF" kebab option is visible for
            | <Invoice_Date> | <Invoice_Number> | <Billing_Period> | <Status> | <Amount> |
        And I wait for "1" seconds
        And I assert "download_DOC" kebab option is visible for
            | <Invoice_Date> | <Invoice_Number> | <Billing_Period> | <Status> | <Amount> |
        And I wait for "1" seconds
        And I assert "download_CSV" kebab option is visible for
            | <Invoice_Date> | <Invoice_Number> | <Billing_Period> | <Status> | <Amount> |

        Examples:

            | Invoice_Date | Invoice_Number | Billing_Period | Status | Amount     |
            | May 8, 2021  | 20210508-0029  | Monthly        | Unpaid | $40,000.00 |
            | May 1, 2021  | 20210501-0006  | Monthly        | Unpaid | $20,000.00 |
            | Apr 12, 2021 | 20210412-0005  | Monthly        | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004  | Monthly        | Unpaid | $40,000.00 |
            | Feb 18, 2021 | 2              | Monthly        | Unpaid | $80,000.00 |
            | Feb 18, 2021 | 1              | Monthly        | Paid   | $80,000.00 |

    @billing @invoice_history
    Scenario: Invoice_filtering_by_year
        Given I am in Scorpion "sign-in" page
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
        Then I assert I can see historical invoices with
            | Feb 18, 2020 | 3 | Monthly | Unpaid | $80,000.00 |
        When I select the filter "by_year" with "2021"
        And I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices with
            | May 8, 2021  | 20210508-0029 | Monthly | Unpaid | $20,000.00 |
            | May 1, 2021  | 20210501-0006 | Monthly | Unpaid | $20,000.00 |
            | Apr 12, 2021 | 20210412-0005 | Monthly | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004 | Monthly | Unpaid | $40,000.00 |
            | Feb 18, 2021 | 2             | Monthly | Unpaid | $80,000.00 |
            | Feb 18, 2021 | 1             | Monthly | Paid   | $80,000.00 |

    @billing @invoice_history
    Scenario: Invoice_filtering_by_date
        Given I am in Scorpion "sign-in" page
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
        When I select the filter "by_date" with "30 Mar 2020-30 Mar 2021"
        And I click on apply button
        Then I assert I can see historical invoices with
            | Invoice Date | Invoice | description | Billing Period | Status | Amount     |
            | ...          | 22      | description | Monthly        | Paid   | $20,000.00 |
            | ...          | 21      | description | Monthly        | Paid   | $20,000.00 |
            | ...          | 20      | description | Monthly        | Paid   | $20,000.00 |

    @billing @invoice_history
    Scenario: Invoice_filtering_by_month
        Given I am in Scorpion "sign-in" page
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
        When I select the filter "by_month" with "April-2021"
        And I click on apply button
        Then I assert I can see historical invoices with
            | Invoice Date | Invoice | description | Billing Period | Status | Amount     |
            | ...          | 22      | description | Monthly        | Paid   | $20,000.00 |
            | ...          | 21      | description | Monthly        | Paid   | $20,000.00 |
            | ...          | 20      | description | Monthly        | Paid   | $20,000.00 |

    @billing @invoice_history
    Scenario: Invoice_filtering_by_price
        Given I am in Scorpion "sign-in" page
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
        When I select the filter "by_price" with "20000.00-40000.00"
        And I wait for "2" seconds
        Then I assert the results count showing "2 Results"
        When I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices with
            | Apr 12, 2021 | 20210412-0005 | Monthly | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004 | Monthly | Unpaid | $40,000.00 |
        And I click on filter button
        When I select the filter "by_price" with "80000.00-80000.00"
        And I wait for "2" seconds
        Then I assert the results count showing "2 Results"
        And I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices with
            | Feb 18, 2021 | 2 | Monthly | Unpaid | $80,000.00 |
            | Feb 18, 2021 | 1 | Monthly | Paid   | $80,000.00 |

    @billing @invoice_history
    Scenario: Invoice_filtering_by_paid_status
        Given I am in Scorpion "sign-in" page
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
        Then I assert the results count showing "1 Result"
        And I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices with
            | Feb 18, 2021 | 1 | Monthly | Paid | $80,000.00 |

    @billing @invoice_history
    Scenario: Invoice_filtering_by_unpaid_status
        Given I am in Scorpion "sign-in" page
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
        And I wait for "2" seconds
        Then I assert the results count showing "3 Results"
        And I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices with
            | Apr 12, 2021 | 20210412-0005 | Monthly | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004 | Monthly | Unpaid | $40,000.00 |
            | Feb 18, 2021 | 2             | Monthly | Unpaid | $80,000.00 |

    # UNFINISHED CODE
    # And I click on filter button
    # When I select the filter "by_status" with "Partially paid"
    #     | Invoice Date | Invoice | Billing Period | Status | Amount |
    # Then I assert I can see historical invoices with
    #     | ... | 22 | Monthly | Partially Paid | $10,000.00 |
    #     | ... | 21 | Monthly | Partially Paid | $5,000.00  |
    #     | ... | 20 | Monthly | Partially Paid | $1,000.00  |
    # And I click on filter button
    # When I select the filter "by_status" with "Due Balance"
    # Then I assert I can see historical invoices with
    #     | Invoice Date | Invoice | Description | Billing Period | Status      | Amount     |
    #     | ...          | 22      |             | Monthly        | Due Balance | $10,000.00 |
    #     | ...          | 21      |             | Monthly        | Due Balance | $5,000.00  |
    #     | ...          | 20      |             | Monthly        | Due Balance | $1,000.00  |
    # And I click on filter button
    # When I select the filter "by_status" with "Services"
    # Then I assert I can see historical invoices with
    #     | Invoice Date | Invoice | Billing Period | Status   | Amount     |
    #     | ...          | 22      | Monthly        | Services | $10,000.00 |
    #     | ...          | 21      | Monthly        | Services | $5,000.00  |
    #     | ...          | 20      | Monthly        | Services | $1,000.00  |
    # And I click on filter button
    # When I select the filter "by_status" with "Advertising"
    # Then I assert I can see historical invoices with
    #     | Invoice Date | Invoice | Billing Period | Status   | Amount     |
    #     | ...          | 22      | Monthly        | Services | $10,000.00 |
    #     | ...          | 21      | Monthly        | Services | $5,000.00  |
    #     | ...          | 20      | Monthly        | Services | $1,000.00  |

    # UNFINISHED CODE

    # @billing @invoice_history
    # Scenario Outline: Invoice_filtering_with_no_results_filtering_<filter>
    #     Given I am in Scorpion "sign-in" page
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
    #     When I select the filter "<filter>" with "<value>"
    #     And I wait for "2" seconds
    #     And I click on apply button
    #     Then I assert no invoices are shown

    #     Examples:

    #         | filter   | value                   |
    #         | by_date  | 30 Mar 2010-30 Mar 2010 |
    #         | by_price | 10000000-1000001        |
    #         | by_status | Services                | no data and no filter shown
    #         | by_month | April-2020              |

    @billing @invoice_history
    Scenario: Results_counter_from_filter_modal
        Given I am in Scorpion "sign-in" page
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
        Then I assert the results count showing "1 Result"
        And I click on cancel button
        And I click on filter button
        When I select the filter "by_status" with "Unpaid"
        And I wait for "2" seconds
        Then I assert the results count showing "3 Results"
        And I click on cancel button
        And I click on filter button
        When I select the filter "by_price" with "20000.00-40000.00"
        And I wait for "2" seconds
        Then I assert the results count showing "2 Results"
        And I click on cancel button
        And I click on filter button
        And I wait for "1" seconds
        When I select the filter "by_price" with "80000.00-80000.00"
        And I click on filter button
        And I wait for "2" seconds
        Then I assert the results count showing "2 Results"

    @billing @invoice_history
    Scenario Outline: Clear_all_filters_functionality
        Given I am in Scorpion "sign-in" page
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
        Then I assert I can see historical invoices with
            | Feb 18, 2020 | 3 | Monthly | Unpaid | $80,000.00 |
        And I click on clear all filters link
        And I assert I can see historical invoices with
            | Apr 12, 2021 | 20210412-0005 | Monthly | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004 | Monthly | Unpaid | $40,000.00 |
            | Feb 18, 2021 | 2             | Monthly | Unpaid | $80,000.00 |
            | Feb 18, 2021 | 1             | Monthly | Paid   | $80,000.00 |
        And I click on filter button
        When I select the filter "by_price" with "20000.00-40000.00"
        And I wait for "2" seconds
        Then I assert the results count showing "2 Results"
        When I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices with
            | Apr 12, 2021 | 20210412-0005 | Monthly | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004 | Monthly | Unpaid | $40,000.00 |
        And I click on clear all filters link
        And I assert I can see historical invoices with
            | Apr 12, 2021 | 20210412-0005 | Monthly | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004 | Monthly | Unpaid | $40,000.00 |
            | Feb 18, 2021 | 2             | Monthly | Unpaid | $80,000.00 |
            | Feb 18, 2021 | 1             | Monthly | Paid   | $80,000.00 |
        And I click on filter button
        When I select the filter "by_price" with "80000.00-80000.00"
        And I wait for "2" seconds
        Then I assert the results count showing "2 Results"
        And I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices with
            | Feb 18, 2021 | 2 | Monthly | Unpaid | $80,000.00 |
            | Feb 18, 2021 | 1 | Monthly | Paid   | $80,000.00 |
        And I click on clear all filters link
        And I assert I can see historical invoices with
            | Apr 12, 2021 | 20210412-0005 | Monthly | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004 | Monthly | Unpaid | $40,000.00 |
            | Feb 18, 2021 | 2             | Monthly | Unpaid | $80,000.00 |
            | Feb 18, 2021 | 1             | Monthly | Paid   | $80,000.00 |
        And I click on filter button
        When I select the filter "by_status" with "Paid"
        And I wait for "2" seconds
        Then I assert the results count showing "1 Result"
        And I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices with
            | Feb 18, 2021 | 1 | Monthly | Paid | $80,000.00 |
        And I click on clear all filters link
        And I assert I can see historical invoices with
            | Apr 12, 2021 | 20210412-0005 | Monthly | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004 | Monthly | Unpaid | $40,000.00 |
            | Feb 18, 2021 | 2             | Monthly | Unpaid | $80,000.00 |
            | Feb 18, 2021 | 1             | Monthly | Paid   | $80,000.00 |
        And I click on filter button
        When I select the filter "by_status" with "Unpaid"
        And I wait for "2" seconds
        Then I assert the results count showing "3 Results"
        And I click on apply button
        And I wait for "1" seconds
        Then I assert I can see historical invoices with
            | Apr 12, 2021 | 20210412-0005 | Monthly | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004 | Monthly | Unpaid | $40,000.00 |
            | Feb 18, 2021 | 2             | Monthly | Unpaid | $80,000.00 |
        And I click on clear all filters link
        And I assert I can see historical invoices with
            | Apr 12, 2021 | 20210412-0005 | Monthly | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004 | Monthly | Unpaid | $40,000.00 |
            | Feb 18, 2021 | 2             | Monthly | Unpaid | $80,000.00 |
            | Feb 18, 2021 | 1             | Monthly | Paid   | $80,000.00 |

# @billing @invoice_history
# Scenario Outline: Download_<download_option>_functionality
#     Given I am in Scorpion "sign-in" page
#     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     And I click on sign in button
#     And I wait for "2" seconds
#     And I select the account to use with "Thomas & Paulk"
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     And I click on see all option
#     And I wait for "5" seconds
#     Then I assert the Scorpion Billing History page
#     Then I click the kebab option "<kebab_option>" for "Billing History" with
#         | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
#         | ...          | 22      |             | Monthly        | Unpaid | $10,000.00 |
#     And I assert "<dowload_option>" dowload option

#     Examples:
#         | kebab_option | download_option |
#         | Download     | CSV             |
#         | Download     | PDF             |
#         | Download     | DOC             |

# @billing @invoice_history
# Scenario: Send_functionality
#     Given I am in Scorpion "sign-in" page
#     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     And I click on sign in button
#     And I wait for "2" seconds
#     And I select the account to use with "Thomas & Paulk"
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     And I click on see all option
#     And I wait for "5" seconds
#     Then I assert the Scorpion Billing History page
#     Then I click the kebab option "Send" for "Billing History" with
#         | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
#         | ...          | 22      |             | Monthly        | Unpaid | $10,000.00 |
#     And I fill the contact information with
#         | David Gilmore | jamesissac@gmail.com |
#     And I click on send button
#     And I assert that the text is shown
#         | Success! |

# @billing @invoice_history
# Scenario: Print_functionality
#     Given I am in Scorpion "sign-in" page
#     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     And I click on sign in button
#     And I wait for "2" seconds
#     And I select the account to use with "Thomas & Paulk"
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     And I click on see all option
#     And I wait for "5" seconds
#     Then I assert the Scorpion Billing History page
#     Then I click the kebab option "Print" for "Billing History" with
#         | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
#         | ...          | 22      |             | Monthly        | Unpaid | $10,000.00 |
#     And I assert print functionality

# @billing @invoice_history
# Scenario: Order_by_date
#     Given I am in Scorpion "sign-in" page
#     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     And I click on sign in button
#     And I wait for "2" seconds
#     And I select the account to use with "Thomas & Paulk"
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     And I click on see all option
#     And I wait for "5" seconds
#     Then I assert the Scorpion Billing History page
#     Then I click on "Invoice Date" column
#     And I assert records are ordered with
#         | datatable |

# @billing @invoice_history
# Scenario: Order_by_invoice_number
#     Given I am in Scorpion "sign-in" page
#     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     And I click on sign in button
#     And I wait for "2" seconds
#     And I select the account to use with "Thomas & Paulk"
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     And I click on see all option
#     And I wait for "5" seconds
#     Then I assert the Scorpion Billing History page
#     Then I click on "Invoice" column
#     And I assert records are ordered with
#         | datatable |

# @billing @invoice_history
# Scenario: Order_by_description
#     Given I am in Scorpion "sign-in" page
#     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     And I click on sign in button
#     And I wait for "2" seconds
#     And I select the account to use with "Thomas & Paulk"
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     And I click on see all option
#     And I wait for "5" seconds
#     Then I assert the Scorpion Billing History page
#     Then I click on "Description" column
#     And I assert records are ordered with
#         | datatable |

# @billing @invoice_history
# Scenario: Order_by_billing_period
#     Given I am in Scorpion "sign-in" page
#     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     And I click on sign in button
#     And I wait for "2" seconds
#     And I select the account to use with "Thomas & Paulk"
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     And I click on see all option
#     And I wait for "5" seconds
#     Then I assert the Scorpion Billing History page
#     Then I click on "Billing Period" column
#     And I assert records are ordered with
#         | datatable |

# @billing @invoice_history
# Scenario: Order_by_status
#     Given I am in Scorpion "sign-in" page
#     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     And I click on sign in button
#     And I wait for "2" seconds
#     And I select the account to use with "Thomas & Paulk"
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     And I click on see all option
#     And I wait for "5" seconds
#     Then I assert the Scorpion Billing History page
#     Then I click on "Status" column
#     And I assert records are ordered with
#         | datatable |

# @billing @invoice_history
# Scenario: Order_by_amount
#     Given I am in Scorpion "sign-in" page
#     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     And I click on sign in button
#     And I wait for "2" seconds
#     And I select the account to use with "Thomas & Paulk"
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     And I click on see all option
#     And I wait for "5" seconds
#     Then I assert the Scorpion Billing History page
#     Then I click on "Amount" column
#     And I assert records are ordered with
#         | datatable |

# @billing @invoice_history
# Scenario Outline: Invoice_search_<criteria>
#     Given I am in Scorpion "sign-in" page
#     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     And I click on sign in button
#     And I wait for "2" seconds
#     And I select the account to use with "Thomas & Paulk"
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     And I click on see all option
#     And I wait for "5" seconds
#     Then I assert the Scorpion Billing History page
#     And I search invoices with "<value>"
#     Then I assert I can see historical invoices with
#         | Invoice Date | Invoice | Description | Billing Period | Status | Amount     |
#         | ...          | 22      | Services    | Monthly        | Unpaid | $10,000.00 |

#     Examples:

#         | criteria          | value    |
#         | by_description    | Services |
#         | by_amount         | 10,000   |
#         | by_invoice_number | 22       |
#         | by_date           | ...      |

# @billing @invoice_history
# Scenario Outline: Invoice_search__with_no_results_searching_<criteria>
#     Given I am in Scorpion "sign-in" page
#     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     And I click on sign in button
#     And I wait for "2" seconds
#     And I select the account to use with "Thomas & Paulk"
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     And I click on see all option
#     And I wait for "5" seconds
#     Then I assert the Scorpion Billing History page
#     And I search invoices with "<value>"
#     Then I assert no invoices are shown

#     Examples:

#         | criteria          | value    |
#         | by_description    | TEST     |
#         | by_amount         | 10000000 |
#         | by_invoice_number | 99999    |
#         | by_date           | ...      |
