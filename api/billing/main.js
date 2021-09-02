const Requests = require("./requests");
const ActionsPage = require("../../pages/actions.pages")


async function execute(){
        var headers = await ActionsPage.bearer()
        console.log(headers)
        var invoice_list = await ActionsPage.get_invoice_list(headers, 100)
        console.log(invoice_list)
        await ActionsPage.logoff(headers)
}

execute()