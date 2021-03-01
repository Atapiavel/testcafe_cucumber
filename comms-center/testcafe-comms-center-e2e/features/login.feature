Feature: Login

    As a visitor I can login to the Scorpion Home
    @e2e
    Scenario Outline: User Login E2E Scenario
        Given I am in Scorpion login page
        When I enter "paulk@thomasandpaulk.com" and "Gam3Chang3r!"
        And I click on sign in button
        And I wait for "10" seconds
        Then I assert the Scorpion main page

        Examples:
            | email                    | password     |
            | joehaus895@gmail.com     | Team123!     |
            | Paulk@ThomasandPaulk.com | Gam3Chang3r! |

