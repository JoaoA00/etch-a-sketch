const content = document.getElementById('container');
let proportion = 0;
let userValue = 0;
let eraseToggle = false;

const btnSize = document.getElementById('btn-size');
const btnErase = document.getElementById('btn-erase');

btnErase.addEventListener('click', function(){
    (eraseToggle) ? eraseToggle = false : eraseToggle = true;
    console.log(eraseToggle);
})

btnSize.addEventListener('click', function(){
    userValue = prompt('Tamanho do grid (max:100):');
    if(userValue > 100){
        userValue = 100;
    }
    proportion = userValue*userValue;
    newGrid();
});

function newGrid(){
    content.innerHTML = " ";

    for(let i = 0; i < proportion; i++){
        content.innerHTML += `<div style="width: ${(960 /userValue) - 4}px; height: ${(960 /userValue) - 4}px;"></div>`;
    }

    content.style.backgroundColor = 'white';
    
    content.addEventListener('mouseover', function(e){
        if(eraseToggle){
            e.target.style.backgroundColor = 'white';
        } else {
            e.target.style.backgroundColor = 'blue';
        }
        
    })

}

