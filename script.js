const content = document.getElementById('container');
let squares = 0;
let userValue = 0;
let eraseToggle = false;

const btnSize = document.getElementById('btn-size');
const btnErase = document.getElementById('btn-erase');

btnErase.addEventListener('click', function(){
    (eraseToggle) ? eraseToggle = false : eraseToggle = true;
    console.log(eraseToggle);
})

btnSize.addEventListener('click', function(){
    userValue = parseInt(prompt('Tamanho do grid (max:100):'));
    if(userValue > 100){
        userValue = 100;
    }
    size = userValue*userValue;
    newGrid(userValue);
});

function newGrid(size){
    content.innerHTML = "";
    const squareSize = 1000/size;

    for(let i = 0; i < size*size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        content.appendChild(square);
    }

    content.style.backgroundColor = 'white';
    
    content.addEventListener('mouseover', function(e){
        if (e.target.classList.contains('square')) {
            e.target.style.backgroundColor = eraseToggle ? 'white' : 'blue';
        }
        
    })

}

