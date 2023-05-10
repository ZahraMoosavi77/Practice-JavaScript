const array =[1,2,5,8,-1,-8];
function sumPosetiveNumber(array){
    let posetive =array.filter(function(number){
        return number>0
    })


    add=posetive.reduce(function(prev,curr){
        return prev+curr
    })

   return add

}

console.log(addPosetiveNumber(array ))