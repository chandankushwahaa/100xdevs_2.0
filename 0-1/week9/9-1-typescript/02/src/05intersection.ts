type Employee = {
  name: string;
  startDate: Date;
};
interface Manager {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager; // both are same 10 and 11 line
// type TeamLead = {name: string; startDate: Date, department: string};

const t: TeamLead = {
  name: "John",
  startDate: new Date(),
  department: "IT",
};
console.log(t);