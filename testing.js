const sql = require('mssql')
var config = {
    server: 'schome-intdb.web.scorpion.co',
    authentication: {
        type: 'default',
        options: {
            userName: 'sql_CSXBillingDevReadWrite',
            password: 'z84lUjPjth<n0lOz'
        }
    }
}

async function generateBillingLineItems(invoiceId) {
    var min = 100
    var max = 1000
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var unitAmount1 = getRandomInt(min, max)
    var unitAmount2 = getRandomInt(min, max)
    var unitAmount3 = getRandomInt(min, max)
    var unitAmount4 = getRandomInt(min, max)
    var quantity1 = getRandomInt(1, 2)
    var quantity2 = getRandomInt(1, 2)
    var quantity3 = getRandomInt(1, 3)
    var quantity4 = getRandomInt(1, 3)
    var query = `INSERT INTO [CSXBilling].csb.Invoices_BillingLineItems
    (BillingLineItemID,InvoiceID,Quantity,UnitPrice,Amount,BusinessTypeID,LocationID,PaidAdvertising,PaidAdvertisingMeta,ModifiedBy)
    VALUES
    ('1','` + invoiceId + `','` + quantity1 + `','` + unitAmount1 + `','` + (quantity1 * unitAmount1) + `','1','42322','','',''),
    ('14','` + invoiceId + `','` + quantity2 + `','` + unitAmount2 + `','` + (quantity2 * unitAmount2) + `','1','42322','','',''),
    ('17','` + invoiceId + `','` + quantity3 + `','` + unitAmount3 + `','` + (quantity3 * unitAmount3) + `','1','42322','','',''),
    ('13','` + invoiceId + `','` + quantity4 + `','` + unitAmount4 + `','` + (quantity4 * unitAmount4) + `','1','42322','','','')
    `
    let connection = await sql.connect(config)
    await sql.query([query])
    await connection.close()
    console.log(query)
    return query
}

async function generateInvoices(month) {
    var act_date = new Date();
    var year = act_date.getFullYear();
    var start_of_month = new Date(year, month, 1).toISOString().substring(0, 23)
    var end_of_month = new Date(year, month + 1, 0).toISOString().substring(0, 23);
    var query = `
    INSERT INTO [CSXBilling].csb.Invoices
    (ClientID,InvoiceNumber,SubscriptionID,SourceID,PaymentMethodID,DueDate,StartDate,EndDate,InvoiceCreatedDate,AmountPaid,PaidInFull,InvoiceStatusID)
    VALUES
    ('4197','`+ "112233" + (month + 1) + `','10','1','1','` + end_of_month + `','` + start_of_month + `','` + end_of_month + `','` + start_of_month + `','0','0','3')
    `
    let connection = await sql.connect(config)
    await sql.query([query])
    await connection.close()
    var invoiceId = await retrieveInvoiceId("112233" + (month + 1))
    console.log(query)
    generateBillingLineItems(invoiceId)
}

async function getInvoiceData(invoiceNumber){
    let connection = await sql.connect(config)
    var result = await sql.query(["SELECT * FROM [CSXBilling].csb.Invoices WHERE InvoiceNumber = '" + invoiceNumber + "'"])
    await connection.close()
    return result
}

var month = act_date.getMonth();

for (var i = 0; i <= month; i++) {
    generateInvoices(i)
}

async function retrieveInvoiceId(invoiceNumber){
    var InoviceData = await getInvoiceData(invoiceNumber)
    return InoviceData.recordset[0].InvoiceID
}
