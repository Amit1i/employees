const getEmployees = "SELECT * FROM employees";
const getEmployeesByid = "SELECT * FROM employees WHERE eid = $1";
const getEmpcountBydep = "SELECT COUNT(*) FROM employees WHERE depid = $1";
const checknumberexists = "SELECT no FROM employees no WHERE no.number = $1";
const addemployees = "INSERT INTO employees (name, number, department , depid) VALUES($1 , $2 ,$3 , $4)";

 module.exports = {
    getEmployees,
    getEmployeesByid,
    checknumberexists,
    addemployees,
    getEmpcountBydep
 }