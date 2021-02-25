Feature: Login

    As a visitor I can login to the Scorpion Home
    # @e2e
    Scenario Outline: User Login E2E Scenario
        Given we are in Scorpion login page
        When we enter "paulk@thomasandpaulk.com" and "Gam3Chang3r!"
        And we click on sign in button
        And we wait for "10" seconds
        Then we assert the Scorpion main page

        Examples:
            | email                    | password     |
            | joehaus895@gmail.com     | Team123!     |
            | Paulk@ThomasandPaulk.com | Gam3Chang3r! |

