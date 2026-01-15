const fs = require("fs");
let csvData = "none"
fs.readFile("fe02_bank.csv", "utf-8", (err, data) => {
    if (err) console.log(err);
    // else console.log(data);
    csvData = data
    // Log(typeof csvData)
    let csvArray = csvData.split("\n");

    const arrayColumns = csvArray[0].split(',')
    Log(arrayColumns)

    csvArray.shift()

    csvArray = csvArray.map((tuple, index) => {
        const tmp = tuple.split(',')
        let obj = {}
        
        tmp.forEach((val,idx)=>{
            const arrIdx = arrayColumns[idx]
            obj = {...obj,[arrIdx] : val}
        })
        // Log(obj)

        return obj
    })

    const sortByDate = csvArray.map((val, index) => {
        val.Date = new Date (val.Date)
        const final = {...val, Date : val.Date}
        Log(final)
        return final
    })

    sortByDate.sort((a, b) => a.Date.getTime() - b.Date.getTime());
    Log(sortByDate)
    // Log(csvArray)

});

function Log(msg) {
    console.log(msg)
}

Log(csvData)