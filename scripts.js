let rows = [];
let blocks = [];
let container = document.getElementById('container');

for(row = 0; row < 16; row++) {
    rows[row] = document.createElement('div');
    rows[row].classList.add("row");
    container.appendChild(rows[row]);
    for(column=0; column < 16; column++) {
        blocks[column] = document.createElement('div');
        blocks[column].classList.add("block");
        rows[row].appendChild(blocks[column]);
    }
}




