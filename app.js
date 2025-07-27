let inputtext = document.querySelector(".inputtext");
let outputtext = document.querySelector(".outputtext");
let firsttime = true;
let str = "";
let mode = "light";
let body = document.querySelector("body");
let model = document.querySelector(".model");
let moon = document.querySelector(".moonicon");
let bright = document.querySelector("#bright");
let numberbutton = document.querySelectorAll(".numberbutton");
let signbtn = document.querySelectorAll(".signbtn");



function addnumber(number){
    if(firsttime || number == '000'){
        console.log(number);
        if(number=='000'){
            firsttime = true;
            inputtext.innerHTML = "0";
            outputtext.innerHTML = "0";
            str = "";
        } else{
             firsttime = false;
             inputtext.innerHTML = number;
             str += number;
        } 
    }else{
        inputtext.innerHTML += number;
        str += number;
    }

    console.log("str=",str);
}

function answer(){
    if(str[0] == '/' || str[0] == '*'){
        outputtext.innerHTML = "enter a valid number";
    }else {

    let result = eval(str);
    outputtext.innerHTML = result;
    }
}



function changemode(){
    document.body.classList.toggle('dark-mode');
}
