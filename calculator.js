let runningTotal = 0;
let previousOperand = null; 
let buffer = "0";
const screenDisplay = document.querySelector('.screen');

const clickedButton = 
document.querySelector('.calc-buttons');

function doMath (num) {
    if (previousOperand === "+"){
        runningTotal += num;
    }
    else if (previousOperand === "-"){
        runningTotal -= num;        
    }
    else if (previousOperand === "×"){
        runningTotal *= num;
        
    }
    else if (previousOperand === "÷"){
        runningTotal /= num;
    }

}

function handleNum(eventTargetContent){
    console.log (buffer, typeof buffer, eventTargetContent, typeof eventTargetContent);
    if (buffer === "0" && previousOperand === null)
    {
        buffer = eventTargetContent;
        screenDisplay.innerText = buffer;
    }
    else if (buffer !== "0" && previousOperand === null)
    {
        buffer += eventTargetContent;
        screenDisplay.innerText = buffer;  
    }   
    else if (buffer !== "0" && previousOperand === "=")
    {
        previousOperand = null;
        buffer = eventTargetContent;
        screenDisplay.innerText = buffer;  
    }   
    else if (buffer === "0" && previousOperand !== null){
        buffer = eventTargetContent;
        screenDisplay.innerText = buffer;
    }

    else if (buffer !== "0" && previousOperand !== null){
        buffer += eventTargetContent;
        screenDisplay.innerText = buffer;
    }

}
function handleSymbol(eventTargetContent){
    if (eventTargetContent === "C"){
        buffer = "0";
        screenDisplay.innerText = buffer; 
        previousOperand = null;
    }

    else if(eventTargetContent === "←"){
        // console.log (buffer, typeof buffer, eventTargetContent, typeof eventTargetContent);
        if (typeof buffer === "string" && buffer.length === 1){
            buffer = "0";
            screenDisplay.innerText = buffer;
        }
        else if (typeof buffer === "string" && buffer.length !== 1 ){
            buffer = buffer.slice(0,-1);
            screenDisplay.innerText = buffer;
        }
    }
    else if(eventTargetContent === "="){
        if (buffer !=="0" ){
            doMath (parseInt(buffer) );
        }

        previousOperand = "=";
        buffer = runningTotal;
        screenDisplay.innerText = buffer;
        console.log (buffer, typeof buffer, eventTargetContent, typeof eventTargetContent);
    }
    else { // '+' , '-' , '/' , 'x' 
        runningTotal = parseInt(buffer);
        buffer = "0";
        screenDisplay.innerText = runningTotal;
        previousOperand = eventTargetContent;
    }
}

function handleClick (eventTargetContent){
    if (isNaN (eventTargetContent))
        handleSymbol(eventTargetContent);
    else
        handleNum(eventTargetContent);
}

clickedButton.addEventListener('click', function(event){

    handleClick(event.target.innerText);
    
    // screenDisplay.innerText = event.target.innerText;
});



