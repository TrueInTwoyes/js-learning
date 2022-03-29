function salarySym() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };

    let sum = 0;
    for (let salaryNumber in salaries) {
        sum += salaries[salaryNumber];
    }
    alert("Salary sum is " + sum);
}
