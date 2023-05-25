const obj1 = {
    name:"test",
    age:25,
    etc:{
        uk:"test",
        countries:[
            "test",
            "test",
            "test",{
                key:"alaki"
            }
        ]
    }
}


//............FIRST ONE,NOT ABEST ONE(shallow copy)............
const obj2 = obj1;
console.log(obj1);
console.log(obj2);
//............SECOND ONE,BETTER THAN FIRST ONE.................
// const obj2 = Object.assign({},obj1);
// console.log(obj1);
// console.log(obj2);
//............THE THIRD ONE ,MUCH BERTTER THAN THE PREVIOUS TWO..
// const obj2 = {...obj1}
// console.log(obj1);
// console.log(obj2);
//............THE BEST ONE .................................
// const obj2 = JSON.parse(JSON.stringify(obj1))
// console.log(obj1);
// console.log(obj2);
//at the end all of them have some problem



/*********************************************************************Another way********************************************
// const deepClone = obj => {
//     if (obj === null) return null;
//     let clone = Object.assign({}, obj);
//     Object.keys(clone).forEach(
//       key =>
//         (clone[key] =
  
//           typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
//     );
//     if (Array.isArray(obj)) {
//       clone.length = obj.length;
//       return Array.from(clone);
//     }
//     return clone;
//   };