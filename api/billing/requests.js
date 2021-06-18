

function getAccountMonies(serviceLineId) {
  return `
    query{
      getAccountMonies(serviceLineId:` + serviceLineId + `){
        accountMoniesID,
        amount
      }
    }
    `
}

function getActiveSubscriptions() {
  return `
  query{
    getActiveSubscriptions{
      amount,
      subscriptionID,
      billingLineItemID,
      billingLineItemName
    }
  }
  `
}

function getBillingContacts() {
  return `
  query{
    getBillingContacts{
      billingContactID,
      name,
      primaryContact
    }
  }
  `
}

function getBillingLocationByClient() {
  return `
  query{
    getBillingLocationByClient{
      address1,
      address2,
      state,
      locationID,
      locationName
    }
  }
  `
}

function getInvoice(id) {
  return `
  query{
    getInvoice(invoiceId:"` + id + `"){
      invoiceID,
      dueDate,
      invoiceNumber,
      billingFrequency,
      invoiceStatus
      amountDue
    }
  }
  `
}

function getInvoiceList(invoices) {
  return `
  query{
    getInvoiceList(first:100, offset:0){
      items{
        amountDue, 
        amountPaid, 
        invoiceNumber, 
        billingFrequencyName,
        dueDate,
        endDate,
        invoiceStatusName
        startDate,
        invoiceId
      },
      totalCount
    }
  }
  `
}

function getPaymentMethods() {
  return `
  query{
    getPaymentMethods{
      accountType,
      aCH,
      cardBrand,
      last4
    }  
  `
}

function getPlatformLocations() {
  return `
  query{
    getPlatformLocations{
      address1,
      address2,
      locationID,
      city,
      state
    }
  }
  `
}

function getScorpionAddress(locationTypeId) {
  return `
    query{
      getScorpionAddress(locationTypeId:` + locationTypeId + `){
        address1,
        address2,
        city,
        state
      }
    }
    `
}

function getPlatformUsers() {
  return `
  query{
    getPlatformUsers{
      billingContactID,
      clientID,
      email,
      invoiceType
    }
  }
  `
}

function getBillingOverviewData() {
  return`
  query{
    getBillingOverviewData{
       amountDue,
      availableCredit,
      estimate,
      pastAmountDue
    }
  }
  `
}

module.exports = {
  getScorpionAddress: getScorpionAddress,
  getAccountMonies: getAccountMonies,
  getActiveSubscriptions: getActiveSubscriptions,
  getBillingContacts: getBillingContacts,
  getBillingLocationByClient: getBillingLocationByClient,
  getInvoice: getInvoice,
  getInvoiceList: getInvoiceList,
  getPaymentMethods: getPaymentMethods,
  getPlatformLocations: getPlatformLocations,
  getPlatformUsers: getPlatformUsers,
  getBillingOverviewData: getBillingOverviewData
};
