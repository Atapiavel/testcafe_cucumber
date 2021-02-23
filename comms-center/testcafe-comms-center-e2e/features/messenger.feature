# Feature: Messenger Feature

#     As a visitor I can navigate to messenger
# @e2e
# Scenario Outline: User Messenger E2E Scenario
# Given I open the welcome page
# When I enter Email "<email>"
# And I enter Password "<password>"
# And I click Sign In button
# And I wait for 40 seconds
# And I land on Messenger page
# And I click on Search button
# And I click on Groups button
# And I click on People button
# Then I click on Messages button
# Examples:
#     | email | password |
#     | joehaus895@gmail.com  | Team123! | 
#     | josh.brown978@yahoo.com | Team123! | 
#     | Paulk@ThomasandPaulk.com | Gam3Chang3r! |
