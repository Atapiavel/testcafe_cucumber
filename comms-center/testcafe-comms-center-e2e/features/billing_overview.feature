Feature: Billing Overview

    Scenario: Login

        Given I am in Scorpion login page
        When I enter "paulk@thomasandpaulk.com" and "Gam3Chang3r!"
        And I click on sign in button
        And I wait for "10" seconds
        Then I assert the Scorpion main page

    Scenario: Assert recent invoices tiles

        https://scorpionx.atlassian.net/browse/BP-91

        When I click on settings button
        Then I select the "Billing" option
        And I wait for "5" seconds
        Given I am in Billing Overview page
        Then I verify the tiles are showed with
            | Invoice # | Invoice Date | Billing Period | Status | Amount |


    Scenario Outline: Verify Kebab menu option <kebab_option> is visible from recent invoices

        https://scorpionx.atlassian.net/browse/BP-92

        When I click on settings button
        Then I select the "Billing" option
        And I wait for "5" seconds
        Given I am in Billing Overview page
        Then I verify the kebab option "<kebab_option>" is shown

        Examples:
            | kebab_option |
            | send         |
            | print        |
            | download     |

    Scenario Outline: Assert Kebab menu option <kebab_option> functionality

        https://scorpionx.atlassian.net/browse/BP-94

        When I click on settings button
        Then I select the "Billing" option
        And I wait for "5" seconds
        Given I am in Billing Overview page
        Then I click the kebab option "<kebab_option>"
        And I assert the kebab "<kebab_option>" functionality

        Examples:
            | kebab_option   |
            | send           |
            | print          |
            | download - CSV |
            | download - PDF |
            | download - DOC |

    Scenario: Logout

        When I click on settings button
        And I sign out Scorpion

