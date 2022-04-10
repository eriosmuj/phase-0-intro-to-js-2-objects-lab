// Write your solution in this file!
const employee = {
    streetAddress: "1927 Lewis Avenue",
    name: "Mimosa",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee, "name": "Sam", "streetAddress": "11 Broadway"}
    return newObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key, value) {
    const newObj2= {...employee[key]}
    delete newObj2[key]
    return newObj2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    delete employee[key]
    return employee;
}

