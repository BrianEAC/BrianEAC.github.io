let cell = [];
let x = 16;
const container = document.querySelector("#container");

let cells = document.querySelectorAll(".cells")
let numberOfCells = x ** 2;

function createGrid() {
  for(let i = 0; i < numberOfCells; i++) {
      cell[i] = document.createElement("div");
      cell[i].classList.add('cells');
      container.appendChild(cell[i]);
  };
  cells = document.querySelectorAll(".cells")
  cells.forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = 'black'
  })
})
}

function removeGrid() {
  while (container.innerHTML) {
    container.innerHTML = '';
  }
}

function setNewSize() {
 container.style.gridTemplateColumns = `repeat(${x}, 1fr)`
 container.style.gridTemplateRows = `repeat(${x}, 1fr)`
}

const button = document.querySelector('#clear');



createGrid()
button.addEventListener('click', () =>{
  cells.forEach((item) => {
      if (item.style.backgroundColor = 'black' ) {
        item.style.backgroundColor = '#DECAB0'; 
      }
      
  })
  do x = prompt('grid size? (1-90): ')
  while(x>90 ||x<1);
  numberOfCells = x * x; 
  setNewSize();
  removeGrid(); 
  createGrid();
    
})

