Feature: API scenarios

    @api @focus
    Scenario: getAccountMonies
        Then I run the request "getAccountMonies" with "1"

    @api @focus
    Scenario: getActiveSubscriptions
        Then I run the request "getActiveSubscriptions"

    @api @focus
    Scenario: getAllServiceLines
        Then I run the request "getAllServiceLines"

    @api @focus
    Scenario: getAllSubscriptions
        Then I run the request "getAllSubscriptions"

    @api @focus
    Scenario: getBillingContacts
        Then I run the request "getBillingContacts"

    @api @focus
    Scenario: getBillingLocationByClient
        Then I run the request "getBillingLocationByClient"

    @api @focus
    Scenario: getBillingOverviewData
        Then I run the request "getBillingOverviewData"

    @api @focus
    Scenario: getInvoiceList
        Then I run the request "getInvoiceList" with "100"

    @api @focus
    Scenario: getPaymentMethods
        Then I run the request "getPaymentMethods"

    @api @focus
    Scenario: getPlatformLocations
        Then I run the request "getPlatformLocations"

    @api @focus
    Scenario: getPlatformUsers
        Then I run the request "getPlatformUsers"

    @api @focus
    Scenario: getScorpionAddress
        Then I run the request "getScorpionAddress" with "1"

    @api @focus
    Scenario: getScorpionAddress
        Then I run the request "getScorpionAddress" with "2"

    @api @focus
    Scenario: deleteBillingContact
        Then I run the request "deleteBillingContact" with "53cab284-28b8-31d2-1d12-e6e90abdcbfa"

