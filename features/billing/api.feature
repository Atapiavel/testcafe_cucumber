Feature: API scenarios

    @billing @api 
    Scenario: getAccountMonies
        Then I run the request "getAccountMonies" with "1"

    @billing @api 
    Scenario: getActiveSubscriptions
        Then I run the request "getActiveSubscriptions"

    @billing @api 
    Scenario: getAllServiceLines
        Then I run the request "getAllServiceLines"

    @billing @api 
    Scenario: getAllSubscriptions
        Then I run the request "getAllSubscriptions"

    @billing @api 
    Scenario: getBillingContacts
        Then I run the request "getBillingContacts"

    @billing @api 
    Scenario: getBillingLocationByClient
        Then I run the request "getBillingLocationByClient"

    @api
    Scenario: getBillingOverviewData
        Then I run the request "getBillingOverviewData"

    @billing @api 
    Scenario: getInvoiceList
        Then I run the request "getInvoiceList" with "100"

    @api
    Scenario: getPaymentMethods
        Then I run the request "getPaymentMethods"

    @billing @api 
    Scenario: getPlatformLocations
        Then I run the request "getPlatformLocations"

    @billing @api 
    Scenario: getPlatformUsers
        Then I run the request "getPlatformUsers"

    @billing @api 
    Scenario: getScorpionAddress
        Then I run the request "getScorpionAddress" with "1"

    @billing @api 
    Scenario: getScorpionAddress
        Then I run the request "getScorpionAddress" with "2"

    @billing @api 
    Scenario: deleteBillingContact
        Then I run the request "deleteBillingContact" with "53cab284-28b8-31d2-1d12-e6e90abdcbfa"

