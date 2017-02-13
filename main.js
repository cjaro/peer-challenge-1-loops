
// var name = employee.name;
// var yearExperience = employee.yearsOfExperience;

$(document).ready(function(){

  var employeeArray = [{name: 'Bob', yearsOfExperience: 4}, {name: 'Carla', yearsOfExperience: 5}, {name: 'John', yearsOfExperience: 10}];
  var totalExperience = 0;

  employeeArray.forEach(function(employee, i){
    var yearsOfExperience = parseInt(employee.yearsOfExperience);
    totalExperience += parseInt(employee.yearsOfExperience);

    $('#employeeExperience').append(
      '<tr>' +
      '<td>' + employee.name + '</td>' +
      '<td>' + employee.yearsOfExperience + '</td>' +
      '</tr>');

      $('#totalYears').text(totalExperience);

      console.log(totalExperience);
    }); //ending employee array function

    $('#submitNew').on('click', 'button', function(){
      var name = $('#name').val();
      var yearsOfExperience = $('#yearsOfExperience').val();

      function Employee(name, yearsOfExperience) {
        this.name = name;
        this.yearsOfExperience = yearsOfExperience;
      }
      var newEmployee = new Employee(name, yearsOfExperience);
      employeeArray.push(newEmployee);

      $('#employeeExperience').empty();
      $('#totalYears').empty();

      employeeArray.forEach(function(employee, i){
        var yearsOfExperience = parseInt(employee.yearsOfExperience);
        totalExperience += parseInt(employee.yearsOfExperience);

      $('#employeeExperience').append(
        '<tr>' +
        '<td>' + employee.name + '</td>' +
        '<td>' + employee.yearsOfExperience + '</td>' +
        '</tr>');

        $('#totalYears').text(totalExperience);

        console.log(totalExperience);


      });
    });
  });



// need to not repeat previously entered data yearsOfExperience




    // var totalExperience = 0;
    //
    //   for (var i = 0; i < employeeArray.length; i++) {
    //     var people = employeeArray[i];
    //     var yearsOfExperience = people.yearsOfExperience;
    //     totalExperience += people.yearsOfExperience;
    //   };




    //  we need to pick out yearsOfExperience from the array and add them up
