Feature: Billing Invoice History


     @billing
    Scenario: Login

        Given I am in Scorpion "sign-in" page
        When I enter "paulk@thomasandpaulk.com" and "Gam3Chang3r!"
        And I click on sign in button
        And I wait for "10" seconds
        Then I assert the Scorpion main page

     @billing
    Scenario: Assert Invoice History Page

        When I click on settings button
        Then I select the "Billing" option
        And I wait for "5" seconds
        Given I am in Billing Overview page
        When I click on Billing History option
        Then I assert I can see historical invoices

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
    Scenario Outline: Assert Kebab menu option <kebab_option> functionality

        Given I am in Billing Invoice History page
        Then I click the kebab option "<kebab_option>"
        And I assert the kebab "<kebab_option>" functionality

        Examples:
            | kebab_option   |
            | send           |
            | print          |
            | download - CSV |
            | download - PDF |
            | download - DOC |

     @billing
    Scenario: Assert invoice history tiles

        Given I am in Billing Invoice History page
        Then I verify the tiles are showed with
            | Invoice # | Invoice Date | Billing Period | Status | Amount |

     @billing
    Scenario: Logout

        When I click on settings button
        And I sign out Scorpion