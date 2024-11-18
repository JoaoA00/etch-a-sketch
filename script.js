const content = document.getElementById('container');
const width = 16;
const height =  16;
const proportion = width*height;

for(let i = 0; i < proportion; i++){
    content.innerHTML += '<div class:"square">'+ i +'</div>';
}

const squares = document.querySelectorAll('.square');

content.addEventListener('mouseover', function(e){
    e.target.style.backgroundColor = 'blue';
})

