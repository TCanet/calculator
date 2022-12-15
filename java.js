const buttonArea = document.querySelector(".buttons-area");
const viewScreen = document.querySelector(".view-screen");

const buttonArray = ['9','8','7','+','6','5','4','-','3','2','1','*','CE','0','=','/'];


function addText(e)
{
    viewScreen.textContent += e.target.textContent;
}

function calculate()
{
    
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