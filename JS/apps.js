/*-------------------------------- Constants --------------------------------*/

const enemies = [
    {name: "enemy1", hp: 100, turn: -1, dmg: damage(3), stars: 1, alive: false}, 
    {name: "enemy2", hp: 100, turn: -1, dmg: damage(4), stars: 2, alive: false}, 
    {name: "enemy3", hp: 100, turn: -1, dmg: damage(6), stars: 3, alive: false}, 
    {name: "enemy4", hp: 100, turn: -1, dmg: damage(8), stars: 4, alive: true}, 
    {name: "enemy5", hp: 100, turn: -1, dmg: damage(10), stars: 5, alive: true}
]

const firstBattleMusic = new Audio("../css/audio/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3")
/*---------------------------- Variables (state) ----------------------------*/

let gameLevel, win, playerHP, computerHp, combatLog, turn, startFight, actionMenu, stars  

let currentEnemy = enemies.find(function(enemy) {
    return enemy.alive === true || enemy.stars > 0
})

let playerCurrentStars = 0

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

const skipButtonEl = document.createElement("button")
skipButtonEl.className = "skip-button"
skipButtonEl.innerText = "Skip"


const combatLogEl = document.createElement("div")
combatLogEl.className = "combat-log"
//need to make a mute audio button
/*----------------------------- Event Listeners ------------------------------*/

createContinueButtonEl.addEventListener("click", disableFirstMessageScreen)
createStartButtonEl.addEventListener("click", disableMainScreen)
fightButtonEl.addEventListener("click", render)
/*-------------------------------- Objects -----------------------------------*/
let player = {hp: 100, turn: 1, get dmg() {
    return knightBaseDmg() + this.stars
}, stars: knightStars(), win: false}

/*-------------------------------- Functions ---------------------------------*/
function init() {
    startGameMenu();
    win = false;
    player.hp = 100
    currentEnemy.hp = 100    //depend on enemy obj. and how to reset them when you lose
    turn = 1
    player.stars = 0;
}
init()

function render() {
    playerChoice()
    // updateAfterPlayerCombatLog()
    switchCharacterTurns()
    aliveStatus()
    enemyChoice()
    // updateAfterEnemyCombatLog()
    aliveStatus()
    checkIfWin()
}

// render() {
//     fight()
//     playerChoice()
//     computerChoice()
//     updateCombatLog()
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

function enemyChoice() {
    setTimeout(function() {
        if (turn === currentEnemy.turn){
            player.hp -= currentEnemy.dmg
            combatLogEl.innerText = `The ${currentEnemy.name} did ${currentEnemy.dmg} and the player has ${player.hp} left.`
            fightButtonEl.style.visibility = "visible"
            return combatLogEl.innerText
        }}, 2000)
}

console.log(currentEnemy)

function playerChoice() {
    if (turn === player.turn){
        currentEnemy.hp -= player.dmg
        combatLogEl.innerText = `The player did ${player.dmg} and the ${currentEnemy.name} has ${currentEnemy.hp} left.`
        return combatLogEl.innerText
    }
}

// function updateAfterPlayerCombatLog() {
//     combatLogEl.innerText = `The player did ${player.dmg} and the ${currentEnemy} has ${currentEnemy.hp} left.`
// }

// function updateAfterEnemyCombatLog() {
//     combatLogEl.innerText = `The ${currentEnemy} did ${currentEnemy.dmg} and the player has ${player.hp} left.`
// }

// IN ENEMY OBJECTS
function damage(num) {
    return Math.floor(Math.random() * num)
}

// IN PLAYER OBJECT
function knightBaseDmg() {
    return 1 + Math.floor(Math.random() * 6)
}

// IN PLAYER OBJECT
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
    if (player.win !== true) {
        return;
    } else {
        return turn *= -1;
    }
}

function aliveStatus() {
    if (currentEnemy.hp <= 0) {
        currentEnemy.alive = false
        combatLogEl.innerText = `${currentEnemy.name} is dead!!!`
        return combatLogEl.innerText
    }
    if (player.hp <= 0) {
        return gameOver()
    }
}

function gameOver() {
    // show a game over page or message 
    // return back to the main menu
    init() ///// ???? maybe have that there
}

function checkIfWin(){
    if(currentEnemy.alive === false && currentEnemy.stars === 0) {
        return win = true
    } else {
        return
    }    
}

// function resetWin() {
//     return win = false
// }

// HAPPENING ON CLICK
function startGameMenu() {
    createStartMenuImg.src="../css/Wallpaper-Shovel-Knight-Video-Games-Pixel-Art-Retro-Gam50.jpg"
    startScreenEl.append(createStartMenuImg)
    startScreenEl.append(createStartButtonEl)
    startScreenEl.append(menuTitleEl)
}


// HAPPENING ON CLICK
function disableMainScreen(evnt) {
    startScreenEl.remove()
    firstMessageScreenEl.classList.add('play-animation')
    firstMessageScreenEl.append(createContinueButtonEl)
    firstMessageScreenEl.append(skipButtonEl)
    setTimeout(() => {
        createContinueButtonEl.style.visibility = 'visible';
    }, 7500);
    evnt.stopPropagation()
}

// HAPPENING ON CLICK
function disableFirstMessageScreen(evnt) {
    firstMessageScreenEl.remove()
    createFirstBattleImg.src="../css/CrystalCave1-1920x1080-2a8443ca448c40ef77c4da5d220c5e23.jpg"
    battleScreenEl.append(createFirstBattleImg)
    createKnightImg.src="../css/knight-animation.gif"
    battleScreenEl.append(createKnightImg)
    stoneGolemGif.src="../css/output-onlinegiftools (1).gif"
    battleScreenEl.append(stoneGolemGif)
    battleScreenEl.append(fightButtonEl)
    firstBattleMusic.volume = 0.03
    firstBattleMusic.play()
    firstBattleMusic.loop = true
    battleScreenEl.append(combatLogEl)
    evnt.stopPropagation()
}


//   level3Render() //to be implemented
