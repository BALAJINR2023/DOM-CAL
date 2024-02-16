// create element:-
const h1=document.createElement("h1");
h1.setAttribute("id","title");
h1.innerHTML="Calculator Task";
const para=document.createElement("p")
para.setAttribute("id","description");
para.innerHTML="DOM CAL"
const container = document.createElement("div");
const calculator=document.createElement("div");
const output = document.createElement("input");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const button5 = document.createElement("button");
const button6 = document.createElement("button");
const button7 = document.createElement("button");
const button8 = document.createElement("button");
const button9 = document.createElement("button");
const button10 = document.createElement("button");
const button11 = document.createElement("button");
const button12 = document.createElement("button");
const button13 = document.createElement("button");
const button14 = document.createElement("button");
const button15 = document.createElement("button");
const button16 = document.createElement("button");
const button17 = document.createElement("button");
const button18 = document.createElement("button");
const button19 = document.createElement("button");

// add text content:-
container.setAttribute("id","container");
calculator.setAttribute("id","calculator")
output.setAttribute("id","result");
output.type="text";
output.placeholder="0"



button15.setAttribute("id","clear")
button15.innerText = "AC";
button15.addEventListener("click",()=>{
    output.value="";
})
button1.setAttribute("id","1")
button1.innerText="1";
button1.addEventListener("click",()=>{
    output.value += "1";
})
button2.setAttribute("id","2")
button2.innerText = "2";
button2.addEventListener("click",()=>{
    output.value += "2";
})
button3.setAttribute("id","3")
button3.innerText = "3";
button3.addEventListener("click",()=>{
    output.value += "3";
})
button4.setAttribute("id","4")
button4.innerText = "4";
button4.addEventListener("click",()=>{
    output.value += "4";
})
button5.setAttribute("id","5")
button5.innerText = "5";
button5.addEventListener("click",()=>{
    output.value += "5";
})
button6.setAttribute("id","6")
button6.innerText = "6";
button6.addEventListener("click",()=>{
    output.value += "6";
})
button7.setAttribute("id","7")
button7.innerText = "7";
button7.addEventListener("click",()=>{
    output.value += "7";
})
button8.setAttribute("id","8")
button8.innerText = "8";
button8.addEventListener("click",()=>{
    output.value += "8";
})
button9.setAttribute("id","9")
button9.innerText = "9";
button9.addEventListener("click",()=>{
    output.value += "9";
})
button10.setAttribute("id","10")
button10.innerText = "0";
button10.addEventListener("click",()=>{
    output.value += "0";
})
button11.setAttribute("id","11")
button11.innerText = "00";
button11.addEventListener("click",()=>{
    output.value += "00";
})
button12.setAttribute("id","equal")
button12.innerText = "=";
button12.addEventListener("click",()=>{
    try{
        (output.value= eval (output.value))
    }
    catch(err){
        alert("Invalid Operation")
    }
})
button13.setAttribute("id","add")
button13.innerText = "+";
button13.addEventListener("click",()=>{
    output.value += "+";
})
button14.setAttribute("id","subtract")
button14.innerText = "-";
button14.addEventListener("click",()=>{
    output.value += "-";
})

button16.setAttribute("id","btn16")
button16.innerText = "/";
button16.addEventListener("click",()=>{
    output.value += "/";
})
button17.setAttribute("id","btn17")
button17.innerText = "X";
button17.addEventListener("click",()=>{
    output.value += "*";
})
button18.setAttribute("id","delete")
button18.innerText = "<--";
button18.addEventListener("click",()=>{
    output.value=output.value.slice(0,-1);
})
button19.setAttribute("id","btn19")
button19.innerText = ".";
button19.addEventListener("click",()=>{
    output.value += ".";
})

// append element:-
calculator.append(
  
  output,
  button15,
  button18,
  button19,
  button17,
  button7,
  button8,
  button9,
  button16,
  button4,
  button5,
  button6,
  button14,
  button1,
  button2,
  button3,
  button13,
  button11,
  button10,
  button12, 
);
container.append(calculator);
document.body.append(h1,para,container);