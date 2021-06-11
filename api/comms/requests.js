
function getInvoiceList(invoices) {
  return `
  query{
    getInvoiceList(first: ` + invoices + `, offset: 0 ){
      items{invoiceId}
    }
  }
  `
}

module.exports = {
  getInvoiceList: getInvoiceList,
};
