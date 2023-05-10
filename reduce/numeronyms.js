const input = "Every developer likes to mix kubernetes and javascript";

function numeronyms(string){
    let str = string.split(' ');
    
    console.log(str);
    let array = str.map(value =>{
        if (value.length >=4){
            let num=(value.length-2);
            
            return value[0]+num.toString()+value[value.length-1]
        }
        else{
            return value;
        }
        
    })
    let result = array.join(" ")
    return result

}

console.log(numeronyms(input))


/****************** Another way ******************/ 

// const createNumeronym = (word) =>
//   word[0] + (word.length - 2) + word[word.length - 1];
// input
//   .split(" ")
//   .map((word) => (word.length >= 4 ? createNumeronym(word) : word))
//   .join(" ");