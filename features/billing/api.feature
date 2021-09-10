Feature: API scenarios

    @api
    Scenario: getAccountMonies
        Then I run the request "getAccountMonies" with "1"

    @api
    Scenario: getActiveSubscriptions
        Then I run the request "getActiveSubscriptions"

    @api
    Scenario: getAllServiceLines
        Then I run the request "getAllServiceLines"

    @api
    Scenario: getAllSubscriptions
        Then I run the request "getAllSubscriptions"

    @api
    Scenario: getBillingContacts
        Then I run the request "getBillingContacts"

    @api
    Scenario: getBillingLocationByClient
        Then I run the request "getBillingLocationByClient"

    @api
    Scenario: getBillingOverviewData
        Then I run the request "getBillingOverviewData"

    @api
    Scenario: getInvoiceList
        Then I run the request "getInvoiceList" with "100"

    @api
    Scenario: getPaymentMethods
        Then I run the request "getPaymentMethods"

    @api
    Scenario: getPlatformLocations
        Then I run the request "getPlatformLocations"

    @api
    Scenario: getPlatformUsers
        Then I run the request "getPlatformUsers"

    @api
    Scenario: getScorpionAddress
        Then I run the request "getScorpionAddress" with "1"

    @api
    Scenario: getScorpionAddress
        Then I run the request "getScorpionAddress" with "2"

    @api
    Scenario: deleteBillingContact
        Then I run the request "deleteBillingContact" with "53cab284-28b8-31d2-1d12-e6e90abdcbfa"

