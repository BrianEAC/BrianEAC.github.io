let cell = [];
const container = document.querySelector("#container");
container.style.gridTemplateColumns = ("repeat(16), 1fr");
container.style.gridTemplateRows = ("repeat(16), 1fr");

let numberOfCells = 16 * 16


for(let i = 0; i < numberOfCells; i++) {
    cell[i] = document.createElement("div");
    cell[i].classList.add('cells');
    container.appendChild(cell[i]);
}

const cells = document.querySelectorAll(".cells");

cells.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'black'
    })
})

const button = document.querySelector('#clear');

button.addEventListener('click', () =>{
  cells.forEach((item) => {
      if (item.style.backgroundColor = 'black' ) {
        item.style.backgroundColor = '#DECAB0'; 
      }
  })
    
})


