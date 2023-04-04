/*-------------------------------- Constants --------------------------------*/

const enemies = [
    {name: "enemy1", hp: 100, turn: -1, dmg: damage(3), stars: 1, alive: true}, 
    {name: "enemy2", hp: 100, turn: -1, dmg: damage(4), stars: 2, alive: true}, 
    {name: "enemy3", hp: 100, turn: -1, dmg: damage(6), stars: 3, alive: true}, 
    {name: "enemy4", hp: 100, turn: -1, dmg: damage(8), stars: 4, alive: true}, 
    {name: "enemy5", hp: 100, turn: -1, dmg: damage(10), stars: 5, alive: true}
]

const firstBattleMusic = new Audio("../css/audio/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3")

const winningTheme = new Audio("../css/audio/stinger-2021-08-17_-_8_Bit_Nostalgia_-_www.FesliyanStudios.com.mp3")

const mainMenuMusic = new Audio("../css/audio/Main-Menu.mp3")
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

const skipButtonEl = document.createElement("button")
skipButtonEl.className = "skip-button"
skipButtonEl.innerText = "Skip"


const combatLogEl = document.createElement("div")
combatLogEl.className = "combat-log"

const youWinMessageEl = document.createElement("h1")
youWinMessageEl.className = "you-win-message"
youWinMessageEl.innerText = "Congratulations! You get your stars back!"

const resetButtonEl = document.createElement('button')
resetButtonEl.className = "reset-button"
resetButtonEl.innerText = "Restart?"

const muteButton1El = document.createElement("button")
muteButton1El.className = "mute-button"
muteButton1El.innerText = "Toggle Sound"

//need to make a mute audio button
/*----------------------------- Event Listeners ------------------------------*/

createContinueButtonEl.addEventListener("click", disableFirstMessageScreen)
skipButtonEl.addEventListener("click", disableFirstMessageScreen)
createStartButtonEl.addEventListener("click", disableMainScreen)
fightButtonEl.addEventListener("click", render)
resetButtonEl.addEventListener("click", resetButton)
muteButton1El.addEventListener("click", toggleMuted1)
/*-------------------------------- Objects -----------------------------------*/
const player = {hp: 100, turn: 1, get dmg() {
    return knightBaseDmg() + this.stars
}, stars: 0, win: false}
/*-------------------------------- Functions ---------------------------------*/
function init() {
    startGameMenu()
    win = false
    player.hp = 100
    currentEnemy.hp = 100
    turn = 1
    player.stars = 0
}
init()


function render() {
    playerChoice()
    switchCharacterTurns()
    enemyChoice()
    aliveStatus()
    knightStars()
    checkIfWin()
    console.log(currentEnemy)
    console.log(player)
}


function enemyChoice() {
    if(currentEnemy.hp <= 0){
        return
    }
    setTimeout(function() {
        if (turn === currentEnemy.turn){
            player.hp -= currentEnemy.dmg
            combatLogEl.innerHTML += `• The ${currentEnemy.name} did ${currentEnemy.dmg} and the player has ${player.hp} left.<br>`
            return combatLogEl.innerHTML
        }},2000)
        }


function playerChoice() {
    if(currentEnemy.hp <= 0){
        return
    }
    if (turn === player.turn){
        currentEnemy.hp -= player.dmg
        combatLogEl.innerHTML += `• The player did ${player.dmg} and the ${currentEnemy.name} has ${currentEnemy.hp} left.<br>`
        return combatLogEl.innerHTML
    }
}

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
    if (currentEnemy.alive === false) {
        player.stars += currentEnemy.stars
        currentEnemy.stars = 0
        return player.stars
    }
}


function switchCharacterTurns() {
    if(currentEnemy.hp <= 0){
        return
    }
    turn *= -1
    if (turn === player.turn){
        return combatLogEl.innerHTML += `• It's player turn!<br>`
    } else {
        return combatLogEl.innerHTML += `• It's ${currentEnemy.name} turn!<br>`
    }
}

function aliveStatus() {
    if (currentEnemy.hp <= 0) {
        currentEnemy.alive = false
        combatLogEl.innerHTML += `• ${currentEnemy.name} is dead!!!<br>`
        return combatLogEl.innerHTML
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
        winningTheme.play()
        winningTheme.volume = 0.08
        firstBattleMusic.pause()
        firstBattleMusic.currentTime = 0
        fightButtonEl.style.zIndex = -1
        battleScreenEl.append(youWinMessageEl)
        
        return win = true
    } 
}

function toggleMuted1() {
    mainMenuMusic.muted = !mainMenuMusic.muted
    firstBattleMusic.muted = !firstBattleMusic.muted
    winningTheme.muted = !winningTheme.muted
}


function resetButton() {
    win = false
    player.hp = 100
    currentEnemy.hp = 100
    combatLog = ""
    turn = 1
    player.stars = 0
    enemies.forEach(function(enemy) {
        enemy.stars = 0
        enemy.alive = true
        enemy.hp = 100
    })
}


function playMainMenu() {
    mainMenuMusic.play()
    mainMenuMusic.loop = true
    mainMenuMusic.volume = .1
}

// HAPPENING ON CLICK
function startGameMenu() {
    createStartMenuImg.src="../css/Wallpaper-Shovel-Knight-Video-Games-Pixel-Art-Retro-Gam50.jpg"
    startScreenEl.append(createStartMenuImg)
    startScreenEl.append(createStartButtonEl)
    startScreenEl.append(menuTitleEl)
    startScreenEl.append(muteButton1El)
    return playMainMenu()
}


// HAPPENING ON CLICK
function disableMainScreen(evnt) {
    startScreenEl.remove()
    mainMenuMusic.pause() 
    mainMenuMusic.currentTime = 0
    firstMessageScreenEl.classList.add('play-animation')
    firstMessageScreenEl.append(createContinueButtonEl)
    firstMessageScreenEl.append(skipButtonEl)
    firstMessageScreenEl.append(resetButtonEl)
    firstMessageScreenEl.append(muteButton1El)
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
    firstBattleMusic.volume = 0.04
    firstBattleMusic.play()
    firstBattleMusic.loop = true
    battleScreenEl.append(combatLogEl)
    battleScreenEl.append(resetButtonEl)
    battleScreenEl.append(muteButton1El)
    evnt.stopPropagation()
}


//   level3Render() //to be implemented
