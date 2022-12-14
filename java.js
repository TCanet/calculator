const buttonArea = document.querySelector(".buttons-area");
const viewScreen = document.querySelector(".view-screen");

const buttonArray = ['9','8','7','+','6','5','4','-','3','2','1','*','CE','0','=','/'];


function addText(e)
{
    viewScreen.textContent += e.target.textContent;
}

const funcArr =
[
    function() {return arguments[0] + arguments[1];},
    function() {return arguments[0] - arguments[1];},
    function() {return arguments[0] * arguments[1];},
    function() {return arguments[0] / arguments[1];},
];

function calculate()
{
    let sign = '+';
    let index = 0;

    if(viewScreen.textContent.indexOf('+') != -1)
    {
        let str = viewScreen.textContent.trim();
        let arr = str.split('+');
    
        viewScreen.textContent = Number(arr[0]) + Number(arr[1]);
    }
    if(viewScreen.textContent.indexOf('-') != -1)
    {   
        let str = viewScreen.textContent.trim();
        let arr = str.split('-');
    
        viewScreen.textContent = Number(arr[0]) - Number(arr[1]);
    }
    if(viewScreen.textContent.indexOf('*') != -1)
    {
        let str = viewScreen.textContent.trim();
        let arr = str.split('*');
    
        viewScreen.textContent = Number(arr[0]) * Number(arr[1]);
    }
    if(viewScreen.textContent.indexOf('/') != -1)
    {
        let str = viewScreen.textContent.trim();
        let arr = str.split('/');
    
        viewScreen.textContent = Number(arr[0]) / Number(arr[1]);
    }
}

function clear()
{
    console.log('called');
    viewScreen.textContent = '';
}

for(let x = 0; x < 16; x++)
{
    let div = document.createElement("div");
    div.classList.add("button");
    div.textContent = buttonArray[x];

    if(buttonArray[x] == "CE")
    { 
        console.log("reached");
        div.addEventListener('click', clear);
    }else if(buttonArray[x] == "=")
    {
        div.addEventListener('click', calculate);
    }else
    {
        div.addEventListener('click', function (e) {addText(e)});
    }

    buttonArea.appendChild(div);
}