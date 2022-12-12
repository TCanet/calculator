const buttonArea = document.querySelector(".buttons-area");
const viewScreen = document.querySelector(".view-screen");

const buttonArray = ['9','8','7','+','6','5','4','-','3','2','1','*','','0','=','/'];

for(let x = 0; x < 16; x++)
{
    let div = document.createElement("div");
    div.classList.add("button");
    div.textContent = buttonArray[x];
    div.addEventListener('click', function (e) {addText(e)});
    buttonArea.appendChild(div);
}


function addText(e)
{
    viewScreen.textContent += e.target.textContent;
}
