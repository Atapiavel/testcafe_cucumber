Feature: Login Feature

    As a visitor I can login to the Scorpion Home
@e2e
Scenario Outline: User Login E2E Scenario
Given I open the welcome page
When I enter Email "<email>"
And I enter Password "<password>"
Then I click sign in button
Examples:
    | email | password | 
    | joehaus895@gmail.com  | Team123!  |
    | Paulk@ThomasandPaulk.com | Gam3Chang3r! |

