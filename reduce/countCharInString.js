let string = "Hello world"

function count(str){

    let splited =  []
    for( i = 0; i< str.length ; i++){
        str[i] != " " && splited.push(str[i]);
    }

    let result=splited.reduce((prev,curr)=>{
        return {...prev,[curr]: (prev[curr] || 0) + 1 }


    },{})

    return result

}




console.log(count(string))


/****************** Other ways to remove space char ******************/
// str.replace(/ /g,'')
// str.replaceAll(' ','').split('')
