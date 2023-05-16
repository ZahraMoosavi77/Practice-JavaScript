
function arrayToList(array){
    const list = document.getElementById("myList");
    array.forEach(element => {
        const li = document.createElement("li");
        li.innerText = element;
        list.appendChild(li);
        
    });


}

let number = [1,2,3,4];
arrayToList(number);
