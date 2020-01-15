let rows = [];
let blocks = [];
let container = document.getElementById('container');


for(row = 0; row < 32; row++) {
    rows[row] = document.createElement('div');
    rows[row].classList.add("row");
    container.appendChild(rows[row]);
    for(column = 0; column < 32; column++) {
        blocks[column] = document.createElement('div');
        blocks[column].classList.add("block");
        rows[row].appendChild(blocks[column]);
    }
}

for(i = 0; i < rows.length; i++) {
    rows[i].addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "black";

        setTimeout(function() {
            event.target.style.backgroundColor = "";
        }, 10000);
    }, false);
}







