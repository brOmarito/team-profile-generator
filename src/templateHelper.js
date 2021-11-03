const {
    mainTemplate,
    employeeTemplate,
    managerString,
    engineerString,
    internString,
} = require('./templates')

function generateHtml(employeeArr) {
    let cardString = "";
    employeeArr.forEach(employee => {
        let thisEmployeeTemp = employeeTemplate;
        thisEmployeeTemp = thisEmployeeTemp.replace("{{EMPLOYEE_HEADER}}", employee.headerString);

        thisEmployeeTemp = thisEmployeeTemp.replace("{{EMPLOYEE_NAME}}", employee.name);
        thisEmployeeTemp = thisEmployeeTemp.replace("{{EMPLOYEE_ID}}", employee.id);
        thisEmployeeTemp = thisEmployeeTemp.replace("{{EMPLOYEE_EMAIL}}", employee.email).replace("{{EMPLOYEE_EMAIL}}", employee.email);

        const role = employee.getRole();
        let customString = "";
        if (role === 'Manager') {
            customString = managerString.replace("{{OFFICE_NUMBER}}", employee.officeNumber);
        } else if (role === 'Engineer') {
            customString = engineerString.replace("{{GITHUB}}", employee.github).replace("{{GITHUB}}", employee.github);
        } else {
            customString = internString.replace("{{SCHOOL}}", employee.school)
        }
        thisEmployeeTemp = thisEmployeeTemp.replace("{{CUSTOM_SECT}}", customString);
        cardString += thisEmployeeTemp;
    });

    const thisFullTemplate = mainTemplate.replace("{{CARD_SECT}}", cardString);
    return thisFullTemplate;
}

module.exports = {
    generateHtml: generateHtml
};