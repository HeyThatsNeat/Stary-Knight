/*-------------------------------- Constants --------------------------------*/

const enemies = [
    {name: "enemy1", hp: 100, turn: -1, dmg: damage(3), stars: 1, alive: false}, 
    {name: "enemy2", hp: 100, turn: -1, dmg: damage(4), stars: 2, alive: false}, 
    {name: "enemy3", hp: 100, turn: -1, dmg: damage(6), stars: 3, alive: false}, 
    {name: "enemy4", hp: 100, turn: -1, dmg: damage(8), stars: 4, alive: true}, 
    {name: "enemy5", hp: 100, turn: -1, dmg: damage(10), stars: 5, alive: true}
]

/*---------------------------- Variables (state) ----------------------------*/

let gameLevel, win, playerHP, computerHp, combatLog, turn, startFight, actionMenu, stars  

let currentEnemy = enemies.find(function(enemy) {
    return enemy.alive === true || enemy.stars > 0
})

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


const createKnightImg = document.createElement("img")
createKnightImg.className = "knight"


const battleScreenEl = document.querySelector(".battle-screen")


const stoneGolemGif = document.createElement("img")
stoneGolemGif.className = "golem"

const fightButtonEl = document.createElement("button")
fightButtonEl.className = "fight-button"
fightButtonEl.innerText = "Fight"
let playerCurrentStars = 0
/*----------------------------- Event Listeners ------------------------------*/

createContinueButtonEl.addEventListener("click", disableFirstMessageScreen)
createStartButtonEl.addEventListener("click", disableMainScreen)
/*-------------------------------- Objects -----------------------------------*/
let player = {hp: 100, turn: 1, get dmg() {
    return knightBaseDmg() + this.stars
}, stars: knightStars()}
console.log(player.dmg)

/*-------------------------------- Functions ---------------------------------*/
function init() {
    startGameMenu();
    gameLevel = 1;
    win = false;
    playerHP = 100;
    computerHp = 100;    //depend on enemy obj. and how to reset them when you lose
    combatLog = null;
    turn = 1;
    startFight = false;
    actionMenu = false;
    stars = 0;
}
init()



// render() {
//     fight()
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
//                 fight()
//             }
//         }
//     updateTurn()
//     }
// }
                
// function fight() {
//     gameLevel = updateGameLevel()
//     playerHP = 100
//     computerHp = 100
//     combatLog = empty
//     turn = 1   //maybe random later
//     startFight = true
//     actionMenu = true
// }

function computerChoice() {
    return currentEnemy.dmg
}

console.log(setTimeout(computerChoice, 4000))

function damage(num) {
    return Math.floor(Math.random() * num)
}

function knightBaseDmg() {
    return 1 + Math.floor(Math.random() * 6)
}

function knightStars() {
    for (let i = 0; i < enemies.length; i++) {
    if (enemies[i].alive === false) {
        playerCurrentStars += enemies[i].stars
        enemies[i].stars = 0
    }
}
return playerCurrentStars
}

function switchCharacterTurns() {
    if (winner === true) {
        return;
    } else {
        turn *= -1;
    }
}

function checkIfWin(){
    if(currentEnemy.alive === false && currentEnemy.stars === 0) {
        return win = true
    }
}

function resetWin() {
    return win = false
}

function startGameMenu() {
    createStartMenuImg.src="../css/Wallpaper-Shovel-Knight-Video-Games-Pixel-Art-Retro-Gam50.jpg"
    startScreenEl.append(createStartMenuImg)
    startScreenEl.append(createStartButtonEl)
    startScreenEl.append(menuTitleEl)
}

function disableMainScreen(evnt) {
    startScreenEl.remove()
    firstMessageScreenEl.classList.add('play-animation')
    firstMessageScreenEl.append(createContinueButtonEl)
    setTimeout(() => {
        createContinueButtonEl.style.visibility = 'visible';
    }, 7500);
    evnt.stopPropagation()
}

function disableFirstMessageScreen(evnt) {
    firstMessageScreenEl.remove()
    createFirstBattleImg.src="../css/CrystalCave1-1920x1080-2a8443ca448c40ef77c4da5d220c5e23.jpg"
    battleScreenEl.append(createFirstBattleImg)
    createKnightImg.src="../css/knight-animation.gif"
    battleScreenEl.append(createKnightImg)
    stoneGolemGif.src="../css/output-onlinegiftools (1).gif"
    battleScreenEl.append(stoneGolemGif)
    battleScreenEl.append(fightButtonEl)
    evnt.stopPropagation()
}


//   level3Render() //to be implemented
  
  
//   **different folder**
//   const enemies = [
//   {enemy 1},
//   {enemy 2},
//   ....,
//   {enemy 6},
//   ]
  