const input = [12, 46, 32, 64];
const output = { mean: 38.5, median: 39 }


function calculate(array){
    let mean = 0;
    let median = 0
    array.sort((a, b) => a - b);
    
    
    result=array.reduce((prev,curr,index) =>{
        mean += curr / array.length;
        prev.mean = mean
        // prev['mean']=mean        
        
        if (array.length %2 !==0){
            if(index === Math.floor((array.length)/2)){
                prev.median = curr
            }
           
        }
        else{
            if(index === array.length/2 -1){
                console.log(curr)
                prev.median = curr;
                console.log(prev.median)
            }
            else if(index === array.length/2){
                prev.median += curr;
                prev.median /=2 ;
               
            }
        }


       
        return prev
      
    },{})

    return result
        
    }

    

console.log(calculate(input));