
// var name = employee.name;
// var yearExperience = employee.yearsOfExperience;

$(document).ready(function(){

var employeeArray = [{name: 'Bob', yearsOfExperience: 4}, {name: 'Carla', yearsOfExperience: 5}, {name: 'John', yearsOfExperience: 10}];
var totalExperience = 0;

  employeeArray.forEach(function(employee, i){
    var yearsOfExperience = employee.yearsOfExperience;
    totalExperience += employee.yearsOfExperience;

  $('#employeeExperience').append(
    '<tr>' +
    '<td>' + employee.name + '</td>' +
    '<td>' + employee.yearsOfExperience + '</td>' +
    '</tr>');

  console.log(totalExperience);

  return totalExperience;
});
});



// var totalExperience = 0;
//
//   for (var i = 0; i < employeeArray.length; i++) {
//     var people = employeeArray[i];
//     var yearsOfExperience = people.yearsOfExperience;
//     totalExperience += people.yearsOfExperience;
//   };




//  we need to pick out yearsOfExperience from the array and add them up
