
function getAccountMonies(serviceLineId) {
  return `
  query{
    getAccountMonies(serviceLineId:` + serviceLineId + `){
      accountMoniesID,
      accountMoniesTransaction{
        accountMoniesID,
        amount,
        currentBalance,
        previousAmount,
        transactionDate,
        transactionID,
        transactionTypeID,
        transactionTypeName
      },
      amount,
      billingLineItemID,
      clientID,
      clientPrePayment,
      credit,
      creditReason,
      serviceLineID
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

function getAllServiceLines() {
  return`
  query {
    getAllServiceLines{
      serviceLineID,
      serviceLineName
    }
  }
  
  `
}

function getAllSubscriptions() {
  return`
  query {
    getAllSubscriptions{
      item1{
        autopay,
        billingFrequencyID,
        billingStartDay,
        clientID,
        friendlyName,
        monthToMonth,
        paymentMethodID,
        subscriptionEndDate,
        subscriptionExternalID,
        subscriptionID,
        subscriptionStartDate
        subscriptionSystem,
        void,
      },
      item2{
        accountType,
        aCH,
        cardBrand,
        creditCard,
        defaultPaymentMethod,
        expiration,
        friendlyName,
        last4,
        paymentMethodID,
        processorExternalID,
        processorExternalToken,
        processorID
      }
    }
  }  
  ` 
}

function getBillingContacts() {
  return `
  query{
    getBillingContacts{
      billingContactID,
      clientID,
      email,
      invoiceType,
      monthlyNotification,
      name,
      phoneNumber
      primaryContact,
      userID
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
      accountMoniesPaid,
			amountDue,
      amountPaid,
      billingFrequency,
      billingLineItems{
        amount,
        billingLineItemDescription,
        billingLineItemID,
        billingLineItemName,
        businessTypeID,
        businessTypeName,
        clientID,
        location{
          address1,
          address2,
          city,
          clientID,
          locationID,
          locationName,
          state,
          zip
        }
        locationID,
        payoutTarget,
        payoutTargetID,
        quantity,
        scorpionCommissionAmount,
        scorpionCommissionPercent,
        serviceLineID,
        serviceLineName,
        unitPrice
      }
      clientID,
      dueDate,
      endDate,
      invoiceCreatedDate,
      invoiceID,
      invoiceNumber,
      invoiceStatus,
      invoiceStatusID,
      paidInFull,
      paymentMethod,
      paymentMethodID,
      payments{
        clientID,
        credit,
        paymentAmount,
        paymentDate,
        paymentID,
        paymentMethod,
        paymentMethodID,
        processorID,
        responseCode,
        success
      }
      sourceID,
      sourceName,
      startDate,
      subscription{
        autopay,
        clientID,
        friendlyName,
        subscriptionID
      }
      subscriptionID
    }
  }
  `
}

function getInvoiceList(invoices) {
  return `
  query{
    getInvoiceList(first:` + invoices + `, offset:0){
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
      creditCard,
      defaultPaymentMethod,
      expiration,
      friendlyName,
      last4,
      paymentMethodID,
      processorExternalID,
      processorExternalToken,
      processorID
    }
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
  return `
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

function getAllSubscriptions() {
  return `
  query{
    getAllSubscriptions{
      item1{
        autopay,
        billingFrequencyID,
        billingStartDay,
        clientID,
        friendlyName,
        monthToMonth,
        paymentMethodID,
        subscriptionEndDate,
        subscriptionExternalID,
        subscriptionID,
        subscriptionStartDate,
        subscriptionSystem,
        void,
      }
      item2{
        accountType,
        aCH,
        cardBrand,
        creditCard,
        defaultPaymentMethod,
        expiration,
        friendlyName,
        last4,
        paymentMethodID,
        processorExternalID,
        processorExternalToken,
        processorID
      }
    }
  }
  `
}

function deleteBillingContact(BillingContactId){
  return`
  mutation{
    deleteBillingContact(billingContactId:"` + BillingContactId + `")
  }
  `
}

module.exports = {
  getAccountMonies: getAccountMonies,
  getActiveSubscriptions: getActiveSubscriptions,
  getAllServiceLines: getAllServiceLines,
  getAllSubscriptions: getAllSubscriptions,
  getBillingContacts: getBillingContacts,
  getBillingLocationByClient: getBillingLocationByClient,
  getBillingOverviewData: getBillingOverviewData,
  getInvoice: getInvoice,
  getInvoiceList: getInvoiceList,
  getPaymentMethods: getPaymentMethods,
  getPlatformLocations: getPlatformLocations,
  getPlatformUsers: getPlatformUsers,
  getScorpionAddress: getScorpionAddress,
  getAllSubscriptions: getAllSubscriptions,
  deleteBillingContact: deleteBillingContact
};
