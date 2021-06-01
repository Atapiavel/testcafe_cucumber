Feature: Billing Contact

        @billing @contact
        Scenario Outline: Contact_module_is_visible
                Given I am in Scorpion "sign-in" page
                When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
                And I click on sign in button
                And I wait for "10" seconds
                Given I am in Scorpion "settings" page
                And I wait for "5" seconds
                And I hover on More option
                Then I select the "Billing" option
                And I wait for "5" seconds
                Then I assert contact module is visible

        @billing @contact
        Scenario: Contact_kebab_options_are_visible_for_<contact_name>
                Given I am in Scorpion "sign-in" page
                When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
                And I click on sign in button
                And I wait for "10" seconds
                Given I am in Scorpion "settings" page
                And I wait for "5" seconds
                And I hover on More option
                Then I select the "Billing" option
                And I wait for "5" seconds
                Then I assert "setAsPrimary" option is visible for contact "<contact_name>"
                And I assert "update" option is visible for contact "<contact_name>"
                And I assert "delete" option is visible for contact "<contact_name>"

                Examples:

                        | contact_name         |
                        | Amanda Little        |
                        | Arturo Tapia Velasco |
                        | Christina Davis      |
                        | Maximo Zoppini       |
                        | Snehal Vighe         |


        @billing @contact
        Scenario Outline: Add_billing_contact_functionality
                Given I am in Scorpion "sign-in" page
                When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
                And I click on sign in button
                And I wait for "10" seconds
                Given I am in Scorpion "settings" page
                And I wait for "5" seconds
                And I hover on More option
                Then I select the "Billing" option
                And I wait for "5" seconds
                When I click on add billing contact
                And I click on create a new billing contact
                And I fill billing contact info with
                        | <first_name> | <email_address> | <phone_number> | <notification> |
                Then I click on add button
                And I assert that the snackbar is shown
                And I assert that contact is shown with
                        | <first_name> | <email_address> | <phone_number> |

                Examples:
                        | first_name | email_address         | phone_number   | notification |
                        | Samm       | samrobinson@gmail.com | (485) 569-3859 | Y            |


        @billing @contact
        Scenario Outline: Update_billing_contact_functionality
                Given I am in Scorpion "sign-in" page
                When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
                And I click on sign in button
                And I wait for "10" seconds
                Given I am in Scorpion "settings" page
                And I wait for "5" seconds
                And I hover on More option
                Then I select the "Billing" option
                And I wait for "5" seconds
                When I click "update" option for contact "<contact_name>"
                And I wait for "2" seconds
                And I fill billing contact info with
                        | <first_name> | <email_address> | <phone_number> |
                Then I click on update button
                And I assert that the snackbar is shown
                And I assert that contact is shown with
                        | <first_name> | <email_address> | <phone_number> |

                Examples:
                        | contact_name | first_name | email_address            | phone_number   |
                        | Samm         | Tester     | testerrobinson@gmail.com | (485) 569-5555 |

        @billing @contact
        Scenario Outline: Set_as_primary_functionality_from_<module>
                Given I am in Scorpion "sign-in" page
                When I enter "thebillingteam@scorpion.co" and "Billing1234!!"
                And I click on sign in button
                And I wait for "10" seconds
                Given I am in Scorpion "settings" page
                And I wait for "5" seconds
                And I hover on More option
                Then I select the "Billing" option
                And I wait for "5" seconds
                When I click "setAsPrimary" option for contact "<contact_name>"
                Then I assert that the snackbar is shown
                And I assert "<contact_name>" as primary contact

                Examples:
                        | module          | contact_name |
                        | Billing_contact | Tester       |

#     # @billing @contact
#     # Scenario Outline: Delete_functionality_from_<module>
#     #     Given I am in Scorpion login page
#     #     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     #     And I click on sign in button
#     #     And I wait for "2" seconds
#     #     And I select the account to use with "Thomas & Paulk"
#     #     And I wait for "10" seconds
#     #     When I click on settings button
#     #     And I select the "Billing" option
#     #     And I wait for "5" seconds
#     #     Given I am in Scorpion "billing" page
#     #     Then I click the kebab option "<kebab_option>" for "<module>"}
#     #     And I assert that the text is shown
#     #         | Success! |
#     #     And I assert "<contact>" contact is not visible

#     #     Examples:
#     #         | kebab_option | module          | contact      |
#     #         | delete       | Billing_contact | Andy Timmons |

#     # @billing @contact
#     # Scenario Outline: Cancel_button_from_<module>_<kebab_option>_functionality
#     #     Given I am in Scorpion login page
#     #     When I enter "commcenter@scorpion.co" and "Comms1234!"
#     #     And I click on sign in button
#     #     And I wait for "2" seconds
#     #     And I select the account to use with "Thomas & Paulk"
#     #     And I wait for "10" seconds
#     #     When I click on settings button
#     #     And I select the "Billing" option
#     #     And I wait for "5" seconds
#     #     Given I am in Scorpion "billing" page
#     #     Then I click the kebab option "<kebab_option>" for "<module>"
#     #     And I click on cancel button

#     #     Examples:

#     #         | kebab_option | module          |
#     #         | update       | Billing_contact |
#     #         | add          | Billing_contact |
#     #         | update       | Bill_to_address |
