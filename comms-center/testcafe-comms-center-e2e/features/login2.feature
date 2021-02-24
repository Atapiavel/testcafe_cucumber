Feature: Login

    Scenario: Login with email and password

        Given we are in Scorpion login page
        When we enter "paulk@thomasandpaulk.com" and "Gam3Chang3r!"
        And we click on sign in button
        And we wait for "10" seconds
        Then we assert the Scorpion main page

        # Scenario: Access billing information from main page
        # Given we are in Scorpion main page
        And we click on settings button
        Then we select the "Appjjjj" option
        And we wait for "5" seconds
        And we click on settings button
        # And we assert we are in billing overview page
        And we sign out Scorpion
        
