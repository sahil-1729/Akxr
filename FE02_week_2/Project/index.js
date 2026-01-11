const fs = require("fs")
const employeesData = JSON.parse(fs.readFileSync('./employees.json', "utf-8"))
// JSON.parse(employeesData)

const sortedEmployees = employeesData.sort((emp1, emp2) => emp2.salary - emp1.salary
    // {emp1.salary - emp2.salary
    //     return emp1.salary > emp2.salary ? 1 : -1
    // }
)

function Log(msg) {
    console.log(msg)
}

Log(sortedEmployees)

const empWithExp = employeesData.filter((emp) => emp.experience >= 3 ? true : false)

Log(empWithExp)

const empSummaryList = empWithExp.map(emp => {
    const annual_performance_bonus = emp.salary * 0.10 * emp.experience

    const empSummary = {
        name: emp.name,
        department: emp.department,
        annual_performance_bonus: annual_performance_bonus
    }
    return empSummary
})

Log(empSummaryList)

const totalSalary = empWithExp.reduce((accumulator, initialValue) => {
    accumulator += initialValue.salary
    return accumulator
}, 0)
Log(totalSalary)