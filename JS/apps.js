/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let gameLevel, win, playerHP, computerHp, combatLog, turn, startFight, actionMenu, stars  


/*------------------------ Cached Element References ------------------------*/
const createStartMenuImg = document.createElement("img")
createStartMenuImg.className = "start-img"
const createStartButtonEl = document.createElement("button")
createStartButtonEl.className = "start-button"
createStartButtonEl.innerText = "Start Game!"
const createContinueButtonEl = document.createElement("button")
createContinueButtonEl.className = "continue-button"
createContinueButtonEl.innerText = "Continue"
const startScreenEl = document.querySelector(".start-screen")
const firstMessageScreenEl = document.querySelector(".first-message")
const menuTitleEl = document.createElement("h1")
menuTitleEl.className = "menu-title"
menuTitleEl.innerText = "Starry Knight"
const createFirstBattleImg = document.createElement("img")
const battleScreenEl = document.querySelector(".battle-screen")
/*----------------------------- Event Listeners -----------------------------*/

createContinueButtonEl.addEventListener("click", disableFirstMessageScreen)
createStartButtonEl.addEventListener("click", disableMainScreen)
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


function disableMainScreen(evnt) {
    // menuTitleEl.remove()
    // createStartButtonEl.remove()
    // createStartMenuImg.remove()
    startScreenEl.remove()
    evnt.stopPropagation()
    firstMessageScreenEl.classList.add('play-animation')
    firstMessageScreenEl.append(createContinueButtonEl)
    setTimeout(() => {
        createContinueButtonEl.style.visibility = 'visible';
    }, 7500);
    createFirstBattleImg.src="../css/CrystalCave1-1920x1080-2a8443ca448c40ef77c4da5d220c5e23.jpg"
    battleScreenEl.append(createFirstBattleImg)
}

function disableFirstMessageScreen(evnt) {
    firstMessageScreenEl.remove()
    evnt.stopPropagation()
}

function startGameMenu() {
    createStartMenuImg.src="../css/Wallpaper-Shovel-Knight-Video-Games-Pixel-Art-Retro-Gam50.jpg"
    startScreenEl.append(createStartMenuImg)
    startScreenEl.append(createStartButtonEl)
    startScreenEl.append(menuTitleEl)
}

//   level3Render() //to be implemented
  
  
//   **different folder**
//   const enemies = [
//   {enemy 1},
//   {enemy 2},
//   ....,
//   {enemy 6},
//   ]
  