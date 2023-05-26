const [userName,email,password] = document.querySelectorAll("input");
const [userSpan,emailSpan,passwordSpan] = document.querySelectorAll("span");


const regexName = /^[a-zA-Z]{1,15}$/;
const regexPassword =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;




userName.addEventListener("input",function(event){
       console.log(event.target.value);
    //    console.log(userName.value.match(regexName));
    if(userName.value){
        if (!userName.value.match(regexName)){

            userSpan.style.opacity = 1;
            userSpan.textContent = "Please write the username with at most 15 characters in English"
            userName.style.borderColor= "red";
    
        }else{
            userSpan.style.opacity=0;
            userName.style.borderColor= '#e4e4e4';
        }

    }   
   
})

password.addEventListener("input",function(event){
    let context =event.target.value;
    
    if(!password.value.match(regexPassword) && context){
        passwordSpan.style.opacity = 1;
        passwordSpan.textContent ="Please write the password with 8 characters including capital and small letters and numbers";
        password.style.borderColor= "red";

    }else{
        passwordSpan.style.opacity=0;
        password.style.borderColor= '#e4e4e4';
    };
    
})

email.addEventListener("input",function(event){
    console.log(event.target.value);
        let context =event.target.value;
        if(!email.value.match(regexEmail) && context  ){
            
            emailSpan.style.opacity = 1;
            emailSpan.textContent =  "Invalid E-mail address";
            email.style.borderColor= "red";
        }else{
            emailSpan.style.opacity=0;
            email.style.borderColor= '#e4e4e4';
        }
    
    
})