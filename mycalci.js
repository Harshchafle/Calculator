let input = document.getElementById('screen');
let button = document.querySelectorAll('button');
let string = "";  //initial empty String
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == 'ANS'){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'CLR'){
            string ="";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
       
    })
})
