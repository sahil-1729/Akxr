const fs = require("fs");
let csvData = "none"
fs.readFile("fe02_bank.csv", "utf-8", (err, data) => {
    if (err) console.log(err);
    // else console.log(data);
    csvData = data
    // Log(typeof csvData)
    let csvArray = csvData.split("\n");

    const arrayColumns = csvArray[0].split(',')
    // Log(arrayColumns)

    // pop column tuple 
    csvArray.shift()

    // converting the strings to objects form 
    csvArray = csvArray.map((tuple, index) => {
        const tmp = tuple.split(',')
        let obj = {}

        tmp.forEach((val, idx) => {
            const arrIdx = arrayColumns[idx]
            obj = { ...obj, [arrIdx]: val }
        })

        obj = {
            ...obj,
            Amount: Number(obj.Amount)
        }
        return obj
    })

    const sortByDate = csvArray.map((val, index) => {
        val.Date = new Date(val.Date)
        const final = { ...val, Date: val.Date }
        return final
    })

    sortByDate.sort((a, b) => a.Date.getTime() - b.Date.getTime());
    // Log(sortByDate)
    // Log(csvArray)

    let summarizedData = []
    csvArray.forEach((val) => {

        const TotalCredit = val.Type === 'Credit' ? val.Amount : 0
        const TotalDebit = val.Type === 'Debit' ? val.Amount : 0
        let SalaryTransactions = []
        SalaryTransactions.push(val.TransactionID)

        if (summarizedData.length === 0) {

            const obj = {
                AccountHolder: val.AccountHolder,
                TotalCredit: TotalCredit,
                TotalDebit: TotalDebit,
                LargestTransaction: val.Amount,
                SalaryTransactions: SalaryTransactions
            }
            summarizedData.push(obj)
            return
        }

        const filteredName = summarizedData.filter((valueSummarized) => valueSummarized.AccountHolder === val.AccountHolder)
        if (filteredName.length > 0) {

            summarizedData = summarizedData.map((valueSummarized) => {
                if (val.AccountHolder === valueSummarized.AccountHolder) {
                    const LargestTransaction = Math.max(valueSummarized.LargestTransaction, val.Amount)

                    const SalaryTransactions = [...valueSummarized.SalaryTransactions, val.TransactionID]
                    
                    const TotalCredit = valueSummarized.TotalCredit + val.Amount
                    const TotalDebit = valueSummarized.TotalDebit + val.Amount
                    const final = {
                        ...valueSummarized,
                        TotalCredit: val.Type === 'Credit' ? TotalCredit : valueSummarized.TotalCredit,
                        TotalDebit: val.Type === 'Debit' ? TotalDebit : valueSummarized.TotalDebit,
                        LargestTransaction: LargestTransaction,
                        SalaryTransactions: SalaryTransactions
                    }
                    return final
                }
                return valueSummarized
            })
        } else {
            const obj = {
                AccountHolder: val.AccountHolder,
                TotalCredit: TotalCredit,
                TotalDebit: TotalDebit,
                LargestTransaction: val.Amount,
                SalaryTransactions: SalaryTransactions
            }
            summarizedData.push(obj)

        }

    })

    // make summarized data 
    Log(summarizedData)
});

function Log(msg) {
    console.log(msg)
}

// Log(csvData)