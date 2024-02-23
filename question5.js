//Write down a nested object to store data of company employees

const companyEmployees = {
  company: "S&M Corporation",
  employees: [
      {
          id: 1,
          name: "siddhi",
          department: "Engineering",
          position: "Software Engineer",
          salary: 80000
      },
      {
          id: 2,
          name: "mayur",
          department: "Engineering",
          position: "Cybersecurity Engineer",
          salary: 90000
      },
      {
          id: 3,
          name: "mayuri",
          department: "Human Resources",
          position: "HR Coordinator",
          salary: 60000
      }
  ]
};


console.log(companyEmployees.company); 
console.log(companyEmployees.employees[0].name); 
console.log(companyEmployees.employees[1].department); 
console.log(companyEmployees.employees[2].salary);
