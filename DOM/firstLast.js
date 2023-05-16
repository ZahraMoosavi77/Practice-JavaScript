function changeTextLi(){
    const list = document.querySelectorAll('ul');
    // console.log(list)
    // console.log(list[1].innerText[0]);
    list.forEach(ul=>{
        let li = ul.querySelectorAll('li');
        let length = li.length;
        li[0].innerText = 'first';
        li[length- 1].innerText = 'last';
    
        // console.log(ul.innerText[0]);
        // ul.innerText[0] = "first" ;
        
    })

}

changeTextLi();

 
