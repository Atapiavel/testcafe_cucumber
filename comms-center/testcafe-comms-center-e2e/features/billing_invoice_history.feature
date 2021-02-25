# Feature: Billing Invoice History

#     https://scorpionx.atlassian.net/browse/BP-54


#     Scenario: Login

#         Given we are in Scorpion login page
#         When we enter "paulk@thomasandpaulk.com" and "Gam3Chang3r!"
#         And we click on sign in button
#         And we wait for "10" seconds
#         Then we assert the Scorpion main page

#     Scenario: Assert Invoice History Page

#         When we click on settings button
#         Then we select the "Billing" option
#         And we wait for "5" seconds
#         Given we are in Billing Overview page
#         When we click on Billing History option
#         Then we assert we can see historical invoices

#     Scenario Outline: Invoice Filtering

#         Given we are in Billing Overview page
#         When we select the filter "<filter>" with "<option>"

#         Examples:

#             | filter    | option             |
#             | by_year   | 2019-2020          |
#             | by_date   | 1/1/2019-6/6/2019  |
#             | by_price  | 500-10000          |
#             | by_status | due-paid           |
#             | by_status | services-unpaid    |
#             | by_status | advertising-unpaid |
#             | by_status | all                |

#     Scenario: Logout

#         When we click on settings button
#         And we sign out Scorpion