// global variable
let size = 100 // Number

let colorBlue   = "blue"
let colorYellow = "yellow"
let colorRed    = "red"



// declare function
function increase() {
  //size++      (size = size + size) 
  size += 10 // size = size + 10
  console.log(size)
  // template string
  container.innerHTML = `
  <div 
      class="box"
      style="
          width: ${size}px;
          height: ${size}px"
      ></div>
  ` 
  
}

function decrease() {
  size -= 10 
  console.log(size)

  container.innerHTML = `
  <div 
      class="box"
      style="
          width: ${size}px;
          height: ${size}px"
      ></div>
  ` 
} 


function changeBlue() {

  container.innerHTML = `
  <div 
      class="box"
      style="
            background-color: ${colorBlue};"
      ></div>
  `  
}

function changeYellow() {

  container.innerHTML = `
  <div 
      class="box"
      style="
            background-color: ${colorYellow};"
      ></div>
  `  
}


function changeRed() {

  container.innerHTML = `
  <div 
      class="box"
      style="
            background-color: ${colorRed};"
      ></div>
  `  
}







