Feature: Phone

    @e2e 
    Scenario Outline: User Phone E2E Scenario
        Given I am in Scorpion login page
        When I enter "<email>" and "<password>"
        And I click on sign in button
        And I wait for "10" seconds
        And I select the account to use with "Thomas & Paulk"
        And I wait for "10" seconds
        Given I am in Scorpion "phone" page
        When I wait for "10" seconds
        And I land on Phone page
        And I click on Search button from phone page
        And I enter a number in the Search box "<phoneNr2>"
        When I wait for "2" seconds
        And I click on Row for the number
        When I wait for "2" seconds
        And I click on Arrow Right button
        When I wait for "2" seconds
        And I click on Clear Search button
        When I wait for "2" seconds
        And I click on Filter button
        When I wait for "2" seconds
        And I click on Cancel button 
        And I click on Make a Call button
        And I enter numbers in Phone Number entry "<phoneNr>"
        And I click on Call button
        And I click on End Call button
        And I click on Make a Call button again
        And I maximize the window
        And I make a call to the number "<phoneNr>"
        And I click on Call button again
        And I drag the dialpad "-360" for x "-5" for y
        # And I click on Collapse button
        And I click on Minimize button
        And I click on Maximize button
        # And I click on Collapse button again
        And I click on Sidepanel button
        And I click on the Back button
        And I click on the Address Book button
        When I wait for "2" seconds
        And I enter in the Address Book Search "<FeaSearch>"
        And I click on Fea Scorpion
        And I click on the Sidepanel button again
        And I click on the Back button again
        And I click on Minimize button again
        And I click on End Call button again
        And I click on Availability button
        And I click on Availability Toggle button
        And I click on Availability Toggle button again
        Then I click on Availability button again
        When I click on settings button
        And I sign out Scorpion

        Examples:
            | email                  | password   | phoneNr    | phoneNr2   | FeaSearch |
            | commcenter@scorpion.co | Comms1234! | 8182345566 | 4157979369 | Fea       |