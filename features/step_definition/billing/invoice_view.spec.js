const { When, Then } = require('@cucumber/cucumber');
const InvoiceViewPage = require('../../../pages/billing/invoice_view.pages');

When("I select the {string} invoice", async function (invoice){
    await InvoiceViewPage.see_invoice_details(invoice)
})
