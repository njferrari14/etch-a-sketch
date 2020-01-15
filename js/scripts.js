let rows = [];
let blocks = [];
let container = document.getElementById('container');
let isClicked = false;

container.addEventListener('mousedown', e => {
    isClicked = true;
    console.log('hello?');
});

for(row = 0; row < 32; row++) {
    rows[row] = document.createElement('div');
    rows[row].classList.add('row');
    container.appendChild(rows[row]);
    for(column = 0; column < 32; column++) {
        blocks[column] = document.createElement('div');
        blocks[column].classList.add('block');
        rows[row].appendChild(blocks[column]);
    }
}


if(isClicked) {
    console.log('yup');
    for(i = 0; i < rows.length; i++) {
        rows[i].addEventListener('mouseover', function(draw) {
            event.target.style.backgroundColor = 'black';

            setTimeout(function() {
                event.target.style.backgroundColor = '';
            }, 10000);
        }, false);
    }
} else {
    console.log('nope');
}






