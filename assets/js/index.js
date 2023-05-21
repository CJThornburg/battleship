import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);




// Your code here

window.addEventListener("DOMContentLoaded", () => {


    let currentSquare = 0;
    let shipSpots = []
    for (let i = 0; i < board.grid.length; i++) {
        for (let square = 0; square < board.grid[0].length; square++) {
            // console.log(board.grid[i][square])
            if (board.grid[i][square]) {
                shipSpots.push(currentSquare)
            }
            currentSquare++;
        }

    }
    console.log(shipSpots)



    let gridDiv = document.createElement("div")
    console.log(gridDiv)
    gridDiv.classList.add("grid-Div")
    let body = document.querySelector("body")
    console.log(body)
    body.appendChild(gridDiv)


    let totalHits = 0

    let winDiv = document.createElement("div")
    winDiv.classList.add("winDiv")
    let winTitle = document.createElement("h1")
    winTitle.innerText = "You won"
    winTitle.classList.add("won")
    let resetBtn = document.createElement("button")
    resetBtn.innerText = "reset"
    winDiv.appendChild(winTitle);

    winDiv.appendChild(resetBtn);

    let countDiv = document.createElement("div")
    body.appendChild(countDiv)
    countDiv.classList.add("count")
    let updateCount = () => {
        countDiv.innerText = `total hits: ${totalHits}`
    }
    updateCount()

    let won = () => {
        gridDiv.remove()
        countDiv.remove()

        resetBtn.addEventListener('click', eventObj => {
            window.history.go()
        })
        body.appendChild(winDiv)
    }

    let squareMaker = () => {

        for (let i = 0; i < 81; i++) {
            let sq = document.createElement("div")
            sq.classList.add("square")
            sq.setAttribute("data-spot", i)
            sq.setAttribute("data-not-used", true)
            //    read with sq.dataset.spot
            gridDiv.appendChild(sq)



            sq.addEventListener("click", e => {
                // console.log(e.currentTarget.dataset.notUsed)
                if (e.currentTarget.dataset.notUsed) {
                    console.log(typeof e.currentTarget.dataset.notUsed)

                    e.currentTarget.dataset.notUsed = "";

                    //check if hit
                    let check = e.currentTarget.dataset.spot

                    let checkNum = Number(check)

                    let hit = shipSpots.includes(checkNum);
                    console.log("hit: ", hit)
                    if (hit) {
                        e.currentTarget.classList.add("hit")
                        e.currentTarget.innerText = "X"
                        totalHits++;

                        if (totalHits === 17) {
                            console.log(totalHits)
                            won()
                        }
                        updateCount()
                    }
                    else {
                        e.currentTarget.classList.add("miss")
                        e.currentTarget.innerText = ":("
                    }

                    // if hit
                    // add class to make red
                    // add to total hit counter
                    //if total hit counter = number of hittable spots, say player one



                    // if miss add class to add sad face
                }
            })

        }


    }
    squareMaker()



















})
