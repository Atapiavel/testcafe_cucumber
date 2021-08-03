const { When, Then } = require('@cucumber/cucumber');
const InvoiceViewPage = require('../../../pages/billing/invoice_view.pages');

When("I select the {string} invoice and assert invoice details", async function (invoice){
    await InvoiceViewPage.see_invoice_details(invoice)
})
