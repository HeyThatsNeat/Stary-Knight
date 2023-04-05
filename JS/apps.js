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

const gameOverMusic = new Audio("../css/audio/33 - Game Over.mp3")
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

const gameOverScreenEl = document.createElement("div")
gameOverScreenEl.id = "overlay"
gameOverScreenEl.innerText = "GAME OVER"

const bodyEl = document.querySelector("body")
bodyEl.appendChild(gameOverScreenEl)

const resetButtonEl = document.createElement('button')
resetButtonEl.className = "reset-button"
resetButtonEl.innerText = "Restart?"

const muteButton1El = document.createElement("button")
muteButton1El.className = "mute-button"
muteButton1El.innerText = "Toggle Sound"

const gameoverMuteButtonEl = document.createElement("button")
gameoverMuteButtonEl.className = "game-over-mute-button"
gameoverMuteButtonEl.innerText = "Toggle Mute"

const gameOverResetButtonEl = document.createElement("button")
gameOverResetButtonEl.className = "game-over-reset-button"
gameOverResetButtonEl.innerText = "Try Again?"

const typeWriter1Animation = document.querySelector('.anim-typewriter')
const typeWriter2Animation = document.querySelector('.anim-typewriter2')
//need to make a mute audio button
/*----------------------------- Event Listeners ------------------------------*/

createContinueButtonEl.addEventListener("click", disableFirstMessageScreen)
skipButtonEl.addEventListener("click", disableFirstMessageScreen)
createStartButtonEl.addEventListener("click", disableMainScreen)
fightButtonEl.addEventListener("click", render)
resetButtonEl.addEventListener("click", resetButton)
gameOverResetButtonEl.addEventListener("click", resetButton)
muteButton1El.addEventListener("click", toggleMuted1)
gameoverMuteButtonEl.addEventListener("click", toggleMuted1)
/*-------------------------------- Objects -----------------------------------*/
const player = {hp: 50, turn: 1, get dmg() {
    return knightBaseDmg() + this.stars
}, stars: 0, win: false, alive: true}
/*-------------------------------- Functions ---------------------------------*/

// NEED TO FIX ENEMY DMG FROM STAYING THE SAME EVERY TIME
// NEED TO FIX THE RESET BUTTON NOT GIVING BACK ENEMY STARS


function init() {
    startGameMenu()
    win = false
    player.hp = 50
    currentEnemy.hp = 30
    turn = 1
    player.stars = 0

    // enemies.forEach(function(enemyObj) {
    //     enemyObj.hp = 30
    //     enemyObj.alive = true
    // })
    
    console.log("THIS IS THE INIT",player.stars)
    console.log(player.hp)
    console.log(turn)
    console.log(win)
    console.log(enemies)
    console.log(player)
}
init()



function render() {
    playerChoice()
    switchCharacterTurns()
    enemyChoice()
    aliveStatus()
    knightStars()
    checkIfWin()
    return
}


function enemyChoice() {
    if(currentEnemy.hp <= 0 || player.hp <= 0) {
        return
    }
    setTimeout(function() {
        if (player.hp > 0) {
            player.hp -= currentEnemy.dmg
            combatLogEl.innerHTML += `• The ${currentEnemy.name} did ${currentEnemy.dmg} damage and the player has ${player.hp} HP left.<br>`
            gameOver()
        if (player.alive !== false){
            combatLogEl.innerHTML +=  `• It's the player's turn!<br>`
        }
        }
    }, 1000)
}


function playerChoice() {
    if(currentEnemy.hp <= 0){
        return
    }
    if (player.hp > 0){
        currentEnemy.hp -= player.dmg
        combatLogEl.innerHTML += `• The player did ${player.dmg} damage and the ${currentEnemy.name} has ${currentEnemy.hp} HP left.<br>`
        gameOver()
    }
    if (player.alive !== false) {
        combatLogEl.innerHTML += `• It's ${currentEnemy.name} turn!<br>`
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
    return 
}


function switchCharacterTurns() {
    if(currentEnemy.hp <= 0 || player.hp <= 0){
        return
    }
    turn *= -1
}

function aliveStatus() {
    if (currentEnemy.hp <= 0) {
        currentEnemy.alive = false
        combatLogEl.innerHTML += `• ${currentEnemy.name} is dead!!!<br>`
        return combatLogEl.innerHTML
    }
    return
}

function gameOver() {
    if (player.hp < 1) {
        setTimeout(() => {
            gameOverOn()
            }, 1500)
        console.log("ALIVE STATUS",player.hp)
        firstBattleMusic.pause()
        gameOverMusic.play()
        gameOverMusic.volume = 0.5
        gameOverMusic.loop = true
        player.alive = false
        combatLogEl.innerHTML += `• You have been knocked out! <br>`
    }
}
    // show a game over page or message 
    // return back to the main menu


function gameOverOn() {
    gameOverScreenEl.style.display = "block";
    gameOverScreenEl.style.visibility = 'visible'
    gameOverScreenEl.style.zIndex = 5
}

function gameOverOff() {
    gameOverScreenEl.style.display = "none";
    gameOverScreenEl.style.zIndex = -10
}

function checkIfWin(){
    if(currentEnemy.alive === false && currentEnemy.stars === 0) {
        winningTheme.play()
        winningTheme.volume = 0.08
        firstBattleMusic.pause()
        firstBattleMusic.currentTime = 0
        fightButtonEl.style.zIndex = -1
        battleScreenEl.append(youWinMessageEl)
        youWinMessageEl.style.visibility = "visible"
        battleScreenEl.style.visibility = "visible"
    }
    return 
}

function toggleMuted1() {
    mainMenuMusic.muted = !mainMenuMusic.muted
    firstBattleMusic.muted = !firstBattleMusic.muted
    winningTheme.muted = !winningTheme.muted
    gameOverMusic.muted = !gameOverMusic.muted
}


function resetButton() {
    if (mainMenuMusic.muted === false) {
        mainMenuMusic.pause()
        mainMenuMusic.currentTime = 0
    }
    if (firstBattleMusic.muted === false) {
        firstBattleMusic.pause()
        firstBattleMusic.currentTime = 0
    }
    if (winningTheme.muted === false) {
        winningTheme.pause()
        winningTheme.currentTime = 0
    }
    if (gameOverMusic.muted === false) {
        gameOverMusic.pause()
        gameOverMusic.currentTime = 0
    }
    startScreenEl.style.display = 'inline'
    firstMessageScreenEl.style.display = 'flex'
    battleScreenEl.style.display = 'inline'

    createContinueButtonEl.style.visibility = 'hidden'
    skipButtonEl.style.visibility = 'hidden'
    resetButtonEl.style.visibility = 'hidden'

    createFirstBattleImg.style.visibility = 'hidden'
    createKnightImg.style.visibility = 'hidden'
    stoneGolemGif.style.visibility = 'hidden'
    fightButtonEl.style.visibility = 'hidden'
    combatLogEl.style.visibility = 'hidden'
    combatLogEl.innerHTML = ""
    youWinMessageEl.style.visibility = "hidden"
    
    gameOverOff()
    
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].stars = i + 1  
        enemies[i].alive = true
        enemies[i].hp = 30
    }

    init()
    
    console.log("THIS IS THE RESET",player.stars)
    console.log(player.hp)
    console.log(turn)
    console.log(win)
    console.log(enemies)
    console.log(player)
}

function resetFirstanimationScreen() {
    typeWriter1Animation.style.animation = 'none'
    typeWriter1Animation.offsetHeight
    typeWriter1Animation.style.animation = null 

    typeWriter2Animation.style.animation = 'none'
    typeWriter2Animation.offsetHeight
    typeWriter2Animation.style.animation = null 
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
    startScreenEl.style.display = 'none'
    mainMenuMusic.pause() 
    mainMenuMusic.currentTime = 0
    firstMessageScreenEl.classList.add('play-animation')
    resetFirstanimationScreen()
    firstMessageScreenEl.append(createContinueButtonEl)
    createContinueButtonEl.style.visibility = 'hidden'
    firstMessageScreenEl.append(skipButtonEl)
    skipButtonEl.style.visibility = 'visible'
    firstMessageScreenEl.append(resetButtonEl)
    resetButtonEl.style.visibility = 'visible'
    firstMessageScreenEl.append(muteButton1El)
    if (startScreenEl.style.display === "none" && mainMenuMusic.paused && createContinueButtonEl.style.visibility === 'hidden') {
    setTimeout(() => {
        if(startScreenEl.style.display === "none" && mainMenuMusic.paused && createContinueButtonEl.style.visibility === 'hidden') {
        createContinueButtonEl.style.visibility = 'visible';
        }
    }, 7500);
}
    evnt.stopPropagation()
}

// HAPPENING ON CLICK
function disableFirstMessageScreen(evnt) {
    firstMessageScreenEl.style.display = 'none'
    createFirstBattleImg.src="../css/CrystalCave1-1920x1080-2a8443ca448c40ef77c4da5d220c5e23.jpg"
    // createFirstBattleImg.style.visibility = "visible"
    battleScreenEl.append(createFirstBattleImg)
    createFirstBattleImg.style.visibility = 'visible'
    createKnightImg.src="../css/knight-animation.gif"
    battleScreenEl.append(createKnightImg)
    createKnightImg.style.visibility = 'visible'
    stoneGolemGif.src="../css/output-onlinegiftools (1).gif"
    battleScreenEl.append(stoneGolemGif)
    stoneGolemGif.style.visibility = 'visible'
    battleScreenEl.append(fightButtonEl)
    fightButtonEl.style.visibility = 'visible'
    firstBattleMusic.volume = 0.04
    firstBattleMusic.play()
    firstBattleMusic.loop = true
    battleScreenEl.append(combatLogEl)
    combatLogEl.style.visibility = 'visible'
    battleScreenEl.append(resetButtonEl)
    battleScreenEl.append(muteButton1El)
    evnt.stopPropagation()
}


gameOverScreenEl.append(gameoverMuteButtonEl)
gameOverScreenEl.append(gameOverResetButtonEl)

//   level3Render() //to be implemented
