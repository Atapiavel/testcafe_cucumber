# Feature: Chat Feature

#     As a visitor I can navigate to chat
# @e2e
# Scenario Outline: User Chat E2E Scenario
# Given I open the welcome page
# When I enter Email "<email>"
# And I enter Password "<password>"
# And I click Sign In button
# And I wait for 40 seconds
# # And I click on Chat button
# # And I wait for the Chat display
# And I click Get Started button
# Then I land on chat dashboard page
# Examples:
#     | email | password | 
#     | joehaus895@gmail.com  | Team123!  |
