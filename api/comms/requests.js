
function getCommunicationList(invoices) {
  return `
  query{
    communicationSearch(first: ` + invoices + `, offset: 0 ){
      items{invoiceId}
    }
  }
  `
}

module.exports = {
  getCommunicationList: getCommunicationList,
};
