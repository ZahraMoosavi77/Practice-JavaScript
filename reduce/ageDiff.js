const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];


function ageDiff(array){

    let ages = array.map(value => value.age);
    let max = Math.max(...ages);
    let min = Math.min(...ages);
    let output = [min,max,max-min];
    return output
}

console.log(ageDiff(input))