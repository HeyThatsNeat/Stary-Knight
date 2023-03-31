/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let gameLevel, win, playerHP, computerHp, combatLog, turn, startFight, actionMenu, stars  
//depend on enemy obj. and how to reset them when you lose

/*------------------------ Cached Element References ------------------------*/
const createStartMenuImg = document.createElement("img")
createStartMenuImg.className = "start-img"
const createStartButtonEl = document.createElement("button")
createStartButtonEl.className = "start-button"
createStartButtonEl.innerText = "Start Game!"
const startScreenEl = document.querySelector(".start-screen")
const firstMessageScreenEl = document.querySelector(".first-message")
/*----------------------------- Event Listeners -----------------------------*/

firstMessageScreenEl.addEventListener("click", disableFirstMessageScreen)

/*-------------------------------- Functions --------------------------------*/

function init() {
    // startGameMenu();
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

function disableFirstMessageScreen() {
firstMessageScreenEl.remove()
startGameMenu()
}

function startGameMenu() {
    createStartMenuImg.src="../css/Wallpaper-Shovel-Knight-Video-Games-Pixel-Art-Retro-Gam50.jpg"
    startScreenEl.append(createStartMenuImg)
    startScreenEl.append(createStartButtonEl)
}

//   level3Render() //to be implemented
  
  
//   **different folder**
//   const enemies = [
//   {enemy 1},
//   {enemy 2},
//   ....,
//   {enemy 6},
//   ]
  