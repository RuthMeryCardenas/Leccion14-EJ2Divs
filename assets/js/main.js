var employees = [];
var listEmployees = document.getElementById('listEmployees');
  printEmployees ();
  function printEmployees (){
    employees.push(new Employee ("Arabela", "Rojas", "T.A", "23 de enero"));
    employees.push(new Employee ("Michelle", "Seguil", "T.A", "25 de noviembre"));
    employees.push(new Employee ("Meche", "Zubieta", "T.A", "02 de marzo"));
    employees.push(new Employee ("Papu", "Rivariola", "Psicóloga", "10 de octubre"));
    employees.push(new Employee ("Gian", "Corzo", "Profesor", "23 de enero"));
    var message = "";
    for (var i = 0; i < employees.length; i++) {
      message += employees[i].printSheet() + "<br>";
    }
    listEmployees.innerHTML = message;
  }

function Employee(pName, pLastName, pRole, pBirthday) {
    this.name = pName;
    this.lastName = pLastName;
    this.role = pRole;
    this.birthday = pBirthday;
    this.printSheet = function (){
      var sheet = "<div>"+
              "Nombre : " + this.name + "<br>" +
              "Apellido : " + this.lastName + "<br>" +
              "Rol : " + this.role + "<br>" +
              "Cumpleaños : " + this.birthday +
              "</div>";
      return sheet;
    }
}
