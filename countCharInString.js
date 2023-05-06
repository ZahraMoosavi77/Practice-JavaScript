let sentences = "Hello world"
sentences = sentences.toLowerCase()
let splited =  []
for( i = 0; i< sentences.length ; i++){
    sentences[i] != "" && isNaN(sentences[i]) && splited.push(sentences[i]);
}
console.log(splited)

let countChar = splited.reduce((prev,curr)=>{
    return {...prev,[curr]: (prev[curr] || 0) + 1 }


},{})


console.log(countChar)