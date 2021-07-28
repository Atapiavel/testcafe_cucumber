Feature: Billing Overview

    @billing @overview @focus
    Scenario: Recent_invoices
        Given I am in Scorpion login page
        When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
        And I click on sign in button
        And I wait for "10" seconds
        Given I am in Scorpion "settings" page
        When I wait for "5" seconds
        And I hover on More option
        Then I select the "Billing" option
        When I wait for "3" seconds
        And I verify the columns are shown on the billing overview page with
            | Invoice Date | Invoice | Billing Period | Status | Amount |
        And I assert I can see recent invoices
        And I wait for "5" seconds

    # @billing @overview
    # Scenario: Recent_invoices_kebab_options_are_visible_for_<Invoice_Number>
    #     Given I am in Scorpion login page
    #     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
    #     And I click on sign in button
    #     And I wait for "10" seconds
    #     Given I am in Scorpion "settings" page
    #     And I wait for "5" seconds
    #     And I hover on More option
    #     Then I select the "Billing" option
    #     And I wait for "5" seconds
    #     And I assert "<option>" kebab option is visible for recent invoices
    #     And I wait for "10" seconds

    #     Examples:
    #         | option       |
    #         | send         |
            # | print        |
            # | download_PDF |
            # | download_DOC |
            # | download_CSV |

# # Scenario: <module>_<kebab_option>_option_is_visible
# #     Given I am in Scorpion login page
# #     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
# #     And I click on sign in button
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     Then I assert "<kebab_option>" option is visible

# #     Examples:

# #         | kebab_option | module          |
# #         | send         | Recent_invoices |
# #         | print        | Recent_invoices |
# #         | download_CSV | Recent_invoices |
# #         | download_PDF | Recent_invoices |
# #         | download_DOC | Recent_invoices |

# # @billing @overview
# # Scenario Outline: <module>_module_is_visible
# #     Given I am in Scorpion login page
# #     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
# #     And I click on sign in button
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     And I assert "<module>" module is visible

# #     Examples:

# #         | module          |
# #         | Recent_invoices |
# # # | Billing_contact |
# # # | Payment_method  |
# # # | Bill_to_address |

# # @billing @overview
# # Scenario Outline: Cancel_button_from_<module>_<kebab_option>_functionality
# #     Given I am in Scorpion login page
# #     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
# #     And I click on sign in button
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     Then I click the kebab option "<kebab_option>" for "<module>"
# #     And I click on cancel button

# #     Examples:

# #         | kebab_option | module          |
# #         | send         | Recent_invoices |

# # @billing @overview
# # Scenario Outline: <kebab_option>_functionality_from_<module>
# #     Given I am in Scorpion login page
# #     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
# #     And I click on sign in button
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     Then I click the kebab option "<kebab_option>" for "<module>"
# #     And I fill the contact information with
# #         | David Gilmore | jamesissac@gmail.com |
# #     And I click on send button
# #     And I assert that the text is shown
# #         | Success! |

# #     Examples:
# #         | kebab_option | module          |
# #         | send         | Recent_invoices |

# # @billing @overview
# # Scenario Outline: Download_<download_option>_functionality_from_<module>
# #     Given I am in Scorpion login page
# #     When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
# #     And I click on sign in button
# #     And I wait for "10" seconds
# #     Given I am in Scorpion "settings" page
# #     And I wait for "5" seconds
# #     And I hover on More option
# #     Then I select the "Billing" option
# #     Then I click the kebab option "<kebab_option>" for "<module>"
# #     And I assert "<dowload_option>" dowload option

# #     Examples:
# #         | kebab_option | module          | download_option |
# #         | download     | Recent_invoices | CSV             |
# #         | download     | Recent_invoices | PDF             |
# #         | download     | Recent_invoices | DOC             |
