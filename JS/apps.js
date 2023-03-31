/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let gameLevel, win, playerHP, computerHp, combatLog, turn, startFight, actionMenu, stars  
//depend on enemy obj. and how to reset them when you lose

/*------------------------ Cached Element References ------------------------*/
const startMenu = document.createElement("img")
const startButton = document.createElement("button")
startButton.className = "start-button"
startButton.innerText = "Start Game!"

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

function init() {
    startGameMenu();
    gameLevel = 1;
    win = false;
    playerHP = 100;
    computerHp = 100;    //depend on enemy obj. and how to reset them when you lose
    combatLog = null;
    turn = null;
    startFight = false;
    actionMenu = false;
    stars = 0;
}
init()

// Fight() {
//     gameLevel = updateGameLevel()
//     win = false
//     playerHP = 100
//     computerHp = 100
//     combatLog = empty
//     turn = 1   //maybe random later
//     startFight = true
//     actionMenu = true
//     stars = updateStars()
// }


// render() {
//     Fight()
//     playerChoice()
//     computerChoice()
//     dmgCalculations()
//     updateCombatLog()
//     updateHp()
//     checkIfWin() {
//         if (win) {
//             updateStars()
//             winStatusMessage/effects()


//             //then onclick
//             menusInbetweenFights() {
//                 initFight()
//             }
//         }
//     updateTurn()
//     }
// }  

function startGameMenu() {
    startMenu.src=""
    document.body.appendChild(startMenu)
    document.body.appendChild(startButton)
}

//   level3Render() //to be implemented
  
  
//   **different folder**
//   const enemies = [
//   {enemy 1},
//   {enemy 2},
//   ....,
//   {enemy 6},
//   ]
  