const clients = [
  {
    name: "André",
    id: "12312312312",
    dependents: [{ name: "Sara", kinship: "filha", birthDate: "20/03/2011" },
                  { name: "Samia", kinship: "filha", birthDate: "04/01/2014"}],
  },
  {
    name: "Juliana",
    id: "56767867867",
    dependents: [{ name: "Sophia", kinship: "filha", birthDate: "30/08/2020"}],
  }
]

const dependentsList = [...clients[0].dependents, ...clients[1].dependents];

console.log(dependentsList);
console.table(dependentsList);