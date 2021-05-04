Feature: Billing Overview

    # @billing @overview
    # Scenario: Recent_invoices
    #     Given I am in Scorpion "sign-in" page
    #     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
    #     And I click on sign in button
    #     And I wait for "10" seconds
    #     Given I am in Scorpion "settings" page
    #     And I wait for "5" seconds
    #     And I hover on More option
    #     Then I select the "Billing" option
    #     Then I verify the columns are shown on the billing overview page with
    #         | Invoice Date | Invoice | Billing Period | Status | Amount |
    #     Then I assert I can see recent invoices with
    #         | May 12, 2021 | 20210512-0008 | Monthly | Unpaid | $20,000.00 |
    #         | May 8, 2021  | 20210508-0029 | Monthly | Unpaid | $40,000.00 |
    #         | May 1, 2021  | 20210501-0006 | Monthly | Unpaid | $20,000.00 |
    #         | Apr 12, 2021 | 20210412-0005 | Monthly | Unpaid | $20,000.00 |
    #         | Apr 8, 2021  | 20210408-0004 | Monthly | Unpaid | $40,000.00 |

    @billing @overview
    Scenario Outline: Recent_invoices_kebab_options_are_visible_for_<Invoice_Number>
        Given I am in Scorpion "sign-in" page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        And I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        And I wait for "5" seconds
        And I assert "send" kebab option is visible on the billing overview page for
            | <Invoice_Date> | <Invoice_Number> | <Billing_Period> | <Status> | <Amount> |
        And I wait for "2" seconds
        And I assert "print" kebab option is visible on the billing overview page for
            | <Invoice_Date> | <Invoice_Number> | <Billing_Period> | <Status> | <Amount> |
        And I wait for "2" seconds
        And I assert "download_PDF" kebab option is visible on the billing overview page for
            | <Invoice_Date> | <Invoice_Number> | <Billing_Period> | <Status> | <Amount> |
        And I wait for "2" seconds
        And I assert "download_DOC" kebab option is visible on the billing overview page for
            | <Invoice_Date> | <Invoice_Number> | <Billing_Period> | <Status> | <Amount> |
        And I wait for "2" seconds
        And I assert "download_CSV" kebab option is visible on the billing overview page for
            | <Invoice_Date> | <Invoice_Number> | <Billing_Period> | <Status> | <Amount> |

        Examples:

            | Invoice_Date | Invoice_Number | Billing_Period | Status | Amount     |
            | May 12, 2021 | 20210512-0008  | Monthly        | Unpaid | $20,000.00 |
            | May 8, 2021  | 20210508-0029  | Monthly        | Unpaid | $40,000.00 |
            | May 1, 2021  | 20210501-0006  | Monthly        | Unpaid | $20,000.00 |
            | Apr 12, 2021 | 20210412-0005  | Monthly        | Unpaid | $20,000.00 |
            | Apr 8, 2021  | 20210408-0004  | Monthly        | Unpaid | $40,000.00 |

# Scenario: <module>_<kebab_option>_option_is_visible
#     Given I am in Scorpion "sign-in" page
#     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
#     And I click on sign in button
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     Then I assert "<kebab_option>" option is visible

#     Examples:

#         | kebab_option | module          |
#         | send         | Recent_invoices |
#         | print        | Recent_invoices |
#         | download_CSV | Recent_invoices |
#         | download_PDF | Recent_invoices |
#         | download_DOC | Recent_invoices |

# @billing @overview
# Scenario Outline: <module>_module_is_visible
#     Given I am in Scorpion "sign-in" page
#     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
#     And I click on sign in button
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     And I assert "<module>" module is visible

#     Examples:

#         | module          |
#         | Recent_invoices |
# # | Billing_contact |
# # | Payment_method  |
# # | Bill_to_address |

# @billing @overview
# Scenario Outline: Cancel_button_from_<module>_<kebab_option>_functionality
#     Given I am in Scorpion "sign-in" page
#     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
#     And I click on sign in button
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     Then I click the kebab option "<kebab_option>" for "<module>"
#     And I click on cancel button

#     Examples:

#         | kebab_option | module          |
#         | send         | Recent_invoices |

# @billing @overview
# Scenario Outline: <kebab_option>_functionality_from_<module>
#     Given I am in Scorpion "sign-in" page
#     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
#     And I click on sign in button
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     Then I click the kebab option "<kebab_option>" for "<module>"
#     And I fill the contact information with
#         | David Gilmore | jamesissac@gmail.com |
#     And I click on send button
#     And I assert that the text is shown
#         | Success! |

#     Examples:
#         | kebab_option | module          |
#         | send         | Recent_invoices |

# @billing @overview
# Scenario Outline: Download_<download_option>_functionality_from_<module>
#     Given I am in Scorpion "sign-in" page
#     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
#     And I click on sign in button
#     And I wait for "10" seconds
#     Given I am in Scorpion "settings" page
#     And I wait for "5" seconds
#     And I hover on More option
#     Then I select the "Billing" option
#     Then I click the kebab option "<kebab_option>" for "<module>"
#     And I assert "<dowload_option>" dowload option

#     Examples:
#         | kebab_option | module          | download_option |
#         | download     | Recent_invoices | CSV             |
#         | download     | Recent_invoices | PDF             |
#         | download     | Recent_invoices | DOC             |
