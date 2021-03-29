Feature: Billing Invoice History

    @billing 
    Scenario: Login
        Given I am in Scorpion "sign-in" page
        When I enter "paulk@thomasandpaulk.com" and "Gam3Chang3r!"
        And I click on sign in button
        And I wait for "10" seconds

    @billing 
    Scenario: Assert Invoice History Page
        Given I am in Scorpion "settings" page
        And I wait for "15" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I click on see all option
        And I wait for "5" seconds
        Then I assert the Scorpion Billing History page
        Then I verify the tiles are showed with
            | Invoice Date | Invoice | Billing Period | Status | Amount |
        And I assert I can see historical invoices with
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

    @billing 
    Scenario: <module> <kebab_option> option is visible
        Given I am in Scorpion "settings/billing/invoices" page
        Then I assert the kebab "<kebab_option>" option is visible


    @billing
    Scenario Outline: Assert Kebab menu option <kebab_option> functionality

        Given I am in Scorpion "settings/billing/invoices" page
        Then I click the kebab menu "<kebab_option>" for
            | Invoice Date | Invoice | Billing Period | Status | Amount     |
            | Mar 31, 2021 | 25      | Monthly        | Paid   | $20,000.00 |
        And I assert the kebab "<kebab_option>" functionality

        Examples:
            | kebab_option   |
            | send           |
            | print          |
            | download - CSV |
            | download - PDF |
            | download - DOC |

    @billing
    Scenario Outline: Invoice Filtering <filter>

        Given I am in Billing Invoice History page
        When I select the filter "<filter>" with "<option>"

        Examples:

            | filter    | option             |
            | by_year   | 2019-2020          |
            | by_date   | 1/1/2019-6/6/2019  |
            | by_price  | 500-10000          |
            | by_status | due-paid           |
            | by_status | services-unpaid    |
            | by_status | advertising-unpaid |
            | by_status | all                |



    @billing
    Scenario: Assert invoice history tiles

        Given I am in Billing Invoice History page
        Then I verify the tiles are showed with
            | Invoice # | Invoice Date | Billing Period | Status | Amount |

    @billing
    Scenario: Logout

        When I click on settings button
        And I sign out Scorpion