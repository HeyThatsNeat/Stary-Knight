/*-------------------------------- Constants --------------------------------*/

const enemies = [
    {name: "enemy1", hp: 20, turn: -1, dmg: 0, stars: 1, alive: true}, 
    {name: "Bringer of Death", hp: 20, turn: -1, dmg: 0, stars: 2, alive: true}, 
    {name: "enemy3", hp: 20, turn: -1, dmg: 0, stars: 3, alive: true}, 
    {name: "enemy4", hp: 20, turn: -1, dmg: 0, stars: 4, alive: true}, 
    {name: "enemy5", hp: 20, turn: -1, dmg: 0, stars: 5, alive: true}
]

const player = {hp: 50, turn: 1, get dmg() {
    return knightBaseDmg() + this.stars
}, stars: 0, win: false, alive: true}

const firstBattleMusic = new Audio("../css/audio/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3")
const secondBattleMusic = new Audio("../css/audio/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3")

const winningTheme = new Audio("../css/audio/stinger-2021-08-17_-_8_Bit_Nostalgia_-_www.FesliyanStudios.com.mp3")

const mainMenuMusic = new Audio("../css/audio/Main-Menu.mp3")
mainMenuMusic.preload

const gameOverMusic = new Audio("../css/audio/33 - Game Over.mp3")

const firstMessageScreenMusic = new Audio("../css/audio/7.5second-typewriting-effect.mp3")
/*---------------------------- Variables (state) ----------------------------*/

let gameLevel, win, playerHP, computerHp, combatLog, turn, startFight, actionMenu, stars  

let currentEnemy = enemies.find(function(enemy) {
    return enemy.alive === true && enemy.stars > 0
})
console.log("INITIAL CURRENT ENEMY",currentEnemy)

// let continueButtonTimeout = setTimeout(() => {
//     if(startScreenEl.style.display === "none" && mainMenuMusic.paused && createContinueButtonEl.style.visibility === 'hidden') {
//     createContinueButtonEl.style.visibility = 'visible';
//     }
// }, 7500);

/*------------------------ Cached Element References ------------------------*/
const createStartMenuImg = document.createElement("img")
createStartMenuImg.className = "start-img"


const createStartButtonEl = document.createElement("button")
createStartButtonEl.className = "start-button"
createStartButtonEl.innerText = "Start Game!"


const createContinueButtonEl = document.createElement("button")
createContinueButtonEl.className = "continue-button"
createContinueButtonEl.innerText = "Continue"

const createContinueButton2El = document.createElement("button")
createContinueButton2El.className =  "continue-button2"
createContinueButton2El.innerText = "Continue"

const createContinueButton3El = document.createElement("button")
createContinueButton3El.className =  "continue-button3"
createContinueButton3El.innerText = "Continue"

const startScreenEl = document.querySelector(".start-screen")


const firstMessageScreenEl = document.querySelector(".first-message")
const secondMessageScreenEl = document.querySelector(".second-message")
const thirdMessageScreenEl = document.querySelector(".third-message")

const menuTitleEl = document.createElement("h1")
menuTitleEl.className = "menu-title"
menuTitleEl.innerText = "Starry Knight"


const createFirstBattleImg = document.createElement("img")
createFirstBattleImg.className = "first-battle-img"
const createSecondBattleImg = document.createElement("img")
createSecondBattleImg.className = "second-battle-img"

const createKnightImg = document.createElement("img")
createKnightImg.className = "knight"
const createKnight2Img = document.createElement("img")
createKnight2Img.className = "knight2"

const createKnightAttackImg = document.createElement("img")
createKnightAttackImg.className = "knight-attack"
const createKnight2AttackImg = document.createElement("img")
createKnight2AttackImg.className = "knight2-attack"

const battleScreenEl = document.querySelector(".battle-screen")
const battleScreen2El = document.querySelector(".battle-screen2")

const stoneGolemGif = document.createElement("img")
stoneGolemGif.className = "golem"
const bringerOfDeathGif = document.createElement("img")
bringerOfDeathGif.classList = "bringer-of-death"

const fightButtonEl = document.createElement("button")
fightButtonEl.className = "fight-button"
fightButtonEl.innerText = "Fight"

const skipButtonEl = document.createElement("button")
skipButtonEl.className = "skip-button"
skipButtonEl.innerText = "Skip"

const skipButton2El = document.createElement("button")
skipButton2El.className = "skip-button2"
skipButton2El.innerText = "Skip"

const skipButton3El = document.createElement("button")
skipButton3El.className = "skip-button3"
skipButton3El.innerText = "Skip"

const combatLogEl = document.createElement("div")
combatLogEl.className = "combat-log"
const combatLog2El = document.createElement("div")
combatLog2El.className = "combat-log2"

const youWinMessageEl = document.createElement("h1")
youWinMessageEl.className = "you-win-message"
youWinMessageEl.innerText = `Congratulations! You  get  your  stars  back!`

const gameOverScreenEl = document.createElement("div")
gameOverScreenEl.id = "overlay"



const gameOverMessageEl = document.createElement("p")
gameOverMessageEl.className = "game-over-message"
gameOverMessageEl.innerHTML = "GAME <br>OVER"
gameOverScreenEl.append(gameOverMessageEl)

const bodyEl = document.querySelector("body")
bodyEl.appendChild(gameOverScreenEl)

const resetButtonEl = document.createElement('button')
resetButtonEl.className = "reset-button"
resetButtonEl.innerText = "Restart?"

const resetButton2El = document.createElement('button')
resetButton2El.className = "reset-button2"
resetButton2El.innerText = "Restart?"

const muteButton1El = document.createElement("button")
muteButton1El.className = "mute-button"
muteButton1El.innerText = "Toggle Sound"

const muteButton2El = document.createElement("button")
muteButton2El.className = "mute-button2"
muteButton2El.innerText = "Toggle Sound"

const gameoverMuteButtonEl = document.createElement("button")
gameoverMuteButtonEl.className = "game-over-mute-button"
gameoverMuteButtonEl.innerText = "Toggle Mute"

const gameOverResetButtonEl = document.createElement("button")
gameOverResetButtonEl.className = "game-over-reset-button"
gameOverResetButtonEl.innerText = "Try Again?"

const forward1ButtonEl = document.createElement("button")
forward1ButtonEl.className = "forward1-button"
forward1ButtonEl.innerText = "Forward!"
const forward2ButtonEl = document.createElement("button")
forward2ButtonEl.className = "forward2-button"
forward2ButtonEl.innerText = "Forward!"

const typeWriter1Animation = document.querySelector('.anim-typewriter')
const typeWriter2Animation = document.querySelector('.anim-typewriter2')
const typeWriter3Animation = document.querySelector('.anim-typewriter3')
const typeWriter4Animation = document.querySelector('.anim-typewriter4')
const typeWriter5Animation = document.querySelector('.anim-typewriter5')
const typeWriter6Animation = document.querySelector('.anim-typewriter6')
//need to make a mute audio button
/*----------------------------- Event Listeners ------------------------------*/
createContinueButtonEl.addEventListener("click", disableFirstMessageScreen)
createContinueButton2El.addEventListener("click", disableSecondMessageScreen)
// createContinueButton3El.addEventListener("click", disableThirdMessageScreen)
skipButtonEl.addEventListener("click", disableFirstMessageScreen)
skipButton2El.addEventListener("click", disableSecondMessageScreen)
// skipButton3El.addEventListener("click", disableThirdMessageScreen)
createStartButtonEl.addEventListener("click", disableMainScreen)
fightButtonEl.addEventListener("click", render)
resetButtonEl.addEventListener("click", resetButton)
resetButton2El.addEventListener("click", resetButton)
gameOverResetButtonEl.addEventListener("click", resetButton)
muteButton1El.addEventListener("click", toggleMuted1)
muteButton2El.addEventListener("click", toggleMuted1)
gameoverMuteButtonEl.addEventListener("click", toggleMuted1)
forward1ButtonEl.addEventListener("click", disableFirstBattleScreen)
forward2ButtonEl.addEventListener("click", disabledSecondBattleScreen)

/*-------------------------------- Functions ---------------------------------*/

// NEED TO FIX ENEMY DMG FROM STAYING THE SAME EVERY TIME



function init() {
    startGameMenu()
    win = false
    player.hp = 100
    currentEnemy.hp = 10
    turn = 1
    player.stars = 0
    player.alive = true

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
    currentEnemyDamage()
    enemyChoice()
    aliveStatus()
    knightStars()
    checkIfWin()
    return
}


function updateEnemy() {
    if (currentEnemy.alive === true) {
        return
    } else {
        currentEnemy = enemies.find(function(enemy) {
        return enemy.alive === true && enemy.stars > 0
        })
    }
}

function enemyChoice() {
    if(currentEnemy.hp <= 0 || player.hp <= 0) {
        return
    }
    fightButtonEl.disabled = true 
    fightButtonEl.style.visibility = "hidden"
    console.log("HIDDEN",fightButtonEl.style.visibility)
    setTimeout(function() {
        if (player.hp > 0) {
            player.hp -= currentEnemy.dmg
            combatLogEl.innerHTML += `• The ${currentEnemy.name} did ${currentEnemy.dmg} damage and you have ${player.hp} HP left.<br>`
            combatLog2El.innerHTML += `• The ${currentEnemy.name} did ${currentEnemy.dmg} damage and you have ${player.hp} HP left.<br>`
            gameOver()
        if (player.alive !== false){
            combatLogEl.innerHTML +=  `• It's your turn!<br>`
            combatLog2El.innerHTML +=  `• It's your turn!<br>`
            fightButtonEl.disabled = false
            if (firstBattleMusic.currentTime > 0.05 || secondBattleMusic.currentTime > 0.05) {
                fightButtonEl.style.visibility = "visible"
            }
        }
        }
    }, 2500)
}


function playerChoice() {
    if(currentEnemy.hp <= 0){
        return
    }

    if (player.hp > 0){
        currentEnemy.hp -= player.dmg
        createKnightImg.style.visibility = 'hidden'
        createKnight2Img.style.visibility = 'hidden'
        if (firstBattleMusic.currentTime > 0.05) { 
            createKnightAttackImg.style.visibility = "visible"
            console.log("is he visible?",createKnightAttackImg.style.visibility)
        }
        if (secondBattleMusic.currentTime > 0.05) {
            createKnight2AttackImg.style.visibility = "visible"
        }
        combatLogEl.innerHTML += `• You did ${player.dmg} damage and the ${currentEnemy.name} has ${currentEnemy.hp} HP left.<br>`
        combatLog2El.innerHTML += `• You did ${player.dmg} damage and the ${currentEnemy.name} has ${currentEnemy.hp} HP left.<br>`
        gameOver()
        setTimeout(() => {
            createKnightAttackImg.style.visibility = "hidden"
            createKnight2AttackImg.style.visibility = "hidden"
            if (firstBattleMusic.currentTime > 1) {
                createKnightImg.style.visibility = 'visible'
            }
            if (secondBattleMusic.currentTime > 1) {
                createKnight2Img.style.visibility = 'visible'
            }

        }, 1350)
    }
    if (player.alive !== false) {
        combatLogEl.innerHTML += `• It's ${currentEnemy.name} turn!<br>`
        combatLog2El.innerHTML += `• It's ${currentEnemy.name} turn!<br>`
    }
}

// IN ENEMY OBJECTS
function currentEnemyDamage() {
    currentEnemy.dmg = Math.floor(Math.random() * 1)
    console.log("FUNCTION DAMAGE WITH MATH FLOOR",currentEnemy.dmg)
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
        combatLog2El.innerHTML += `• ${currentEnemy.name} is dead!!!<br>`
    }
    return
}


function gameOver() {
    if (player.hp < 1 || player.alive === false) {
        setTimeout(() => {
            gameOverOn()
            }, 4000)
            //2 KNIGHTS SEEM PROBLEMATIC!!!!!
        createKnightImg.classList.add('fadeOut')
        createKnight2Img.classList.add('fadeOut')
        firstBattleMusic.pause()
        secondBattleMusic.pause()
        gameOverMusic.play()
        gameOverMusic.volume = 0.5
        gameOverMusic.loop = true
        player.alive = false
        combatLogEl.innerHTML += `• You have been knocked out! <br>`
        combatLog2El.innerHTML += `• ${currentEnemy.name} is dead!!!<br>`
    }
    console.log(currentEnemy)
}


function gameOverOn() {
    gameOverScreenEl.style.display = "block";
    gameOverScreenEl.style.visibility = 'visible'
    gameOverScreenEl.style.zIndex = 5
    gameOverMessageEl.classList.add('play-game-over-animation')
}

function gameOverOff() {
    gameOverScreenEl.style.display = "none";
    gameOverScreenEl.style.zIndex = -10
}

function checkIfWin(){
    // FOR FIRST BATTLE
    if(currentEnemy.alive === false && currentEnemy.stars === 0 && firstBattleMusic.currentTime > 0.05) {
        setTimeout(() => {
            stoneGolemGif.classList.add('fadeOut')
        }, 1200)

        fightButtonEl.style.visibility = "hidden"

        setTimeout(() => {
            createKnightImg.style.visibility = "visible"
            winningTheme.play()
            winningTheme.volume = 0.08
            firstBattleMusic.pause()
            firstBattleMusic.currentTime = 0
            battleScreenEl.append(youWinMessageEl)
            youWinMessageEl.style.visibility = "visible"
            battleScreenEl.style.visibility = "visible"
            battleScreenEl.append(forward1ButtonEl)
            forward1ButtonEl.style.visibility = "visible"
        }, 3500)
    }
    // FOR SECOND BATTLE
    if(currentEnemy.alive === false && currentEnemy.stars === 0 && secondBattleMusic.currentTime > 0.05) {
            setTimeout(() => {
                bringerOfDeathGif.classList.add('fadeOut')
            }, 1200)
            // YOU MIGHT HAVE TO MAKE A 2ND FIGHT BUTTON IF THIS ONE IS GIVING YOU PROBLEMS
            fightButtonEl.style.visibility = "hidden"

            setTimeout(() => {
                createKnight2Img.style.visibility = "visible"
                winningTheme.play()
                winningTheme.volume = 0.08
                secondBattleMusic.pause()
                secondBattleMusic.currentTime = 0
                battleScreen2El.append(youWinMessageEl)
                youWinMessageEl.style.visibility = "visible"
                battleScreen2El.style.visibility = "visible"
                battleScreen2El.append(forward2ButtonEl)
                forward2ButtonEl.style.visibility = "visible"
            }, 3500)
    }
    return 
}

function toggleMuted1() {
    mainMenuMusic.muted = !mainMenuMusic.muted
    if (startScreenEl.style.display !== "none") {
        playMainMenu()  
    }
    firstBattleMusic.muted = !firstBattleMusic.muted
    winningTheme.muted = !winningTheme.muted
    gameOverMusic.muted = !gameOverMusic.muted
    firstMessageScreenMusic.muted = !firstMessageScreenMusic.muted
    secondBattleMusic.muted = !secondBattleMusic.muted
}


function resetButton() {
        mainMenuMusic.pause()
        mainMenuMusic.currentTime = 0

        firstBattleMusic.pause()
        firstBattleMusic.currentTime = 0

        winningTheme.pause()
        winningTheme.currentTime = 0

        gameOverMusic.pause()
        gameOverMusic.currentTime = 0

        firstMessageScreenMusic.pause()
        firstMessageScreenMusic.currentTime = 0

        secondBattleMusic.pause()
        secondBattleMusic.currentTime = 0

    startScreenEl.style.display = 'inline'
    firstMessageScreenEl.style.display = 'flex'
    secondMessageScreenEl.style.display = 'flex'
    // thirdMessageScreenEl.style.display = 'flex'
    battleScreenEl.style.display = 'inline'
    battleScreen2El.style.display = 'inline'

    createContinueButtonEl.style.visibility = 'hidden'
    createContinueButton2El.style.visibility = 'hidden'
    createContinueButton3El.style.visibility = 'hidden'

    skipButtonEl.style.visibility = 'hidden'
    resetButtonEl.style.visibility = 'hidden'

    createFirstBattleImg.style.visibility = 'hidden'
    createSecondBattleImg.style.visibility = 'hidden'
    
    createKnightImg.style.visibility = 'hidden'
    createKnight2Img.style.visibility = 'hidden'
    createKnightAttackImg.style.visibility = 'hidden'
    createKnight2AttackImg.style.visibility = 'hidden'
    stoneGolemGif.style.visibility = 'hidden'
    bringerOfDeathGif.style.visibility = 'hidden'
    fightButtonEl.disabled = false
    fightButtonEl.style.visibility = 'hidden'
    combatLogEl.style.visibility = 'hidden'
    combatLogEl.innerHTML = ""
    combatLog2El.style.visibility = 'hidden'
    combatLog2El.innerHTML = ""
    
    youWinMessageEl.style.visibility = "hidden"
    forward1ButtonEl.style.visibility = "hidden"
    forward2ButtonEl.style.visibility = "hidden"

    skipButton2El.style.visibility = 'hidden'
    resetButton2El.style.visibility = 'hidden'

    skipButton3El.style.visibility = 'hidden'
    console.log(skipButton3El.style.visibility)

    createKnightImg.classList.remove('fadeOut')
    createKnight2Img.classList.remove('fadeOut')
    stoneGolemGif.classList.remove('fadeOut')
    bringerOfDeathGif.classList.remove('fadeOut')
    
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

function resetFirstAnimationScreen() {
    typeWriter1Animation.style.animation = 'none'
    typeWriter1Animation.offsetHeight
    typeWriter1Animation.style.animation = null 

    typeWriter2Animation.style.animation = 'none'
    typeWriter2Animation.offsetHeight
    typeWriter2Animation.style.animation = null 
}

function resetSecondAnimationScreen() {
    typeWriter3Animation.style.animation = 'none'
    typeWriter3Animation.offsetHeight
    typeWriter3Animation.style.animation = null 

    typeWriter4Animation.style.animation = 'none'
    typeWriter4Animation.offsetHeight
    typeWriter4Animation.style.animation = null 
}

function resetThirdAnimationScreen() {
    typeWriter5Animation.style.animation = 'none'
    typeWriter5Animation.offsetHeight
    typeWriter5Animation.style.animation = null 

    typeWriter6Animation.style.animation = 'none'
    typeWriter6Animation.offsetHeight
    typeWriter6Animation.style.animation = null 
}

function playMainMenu() {
    mainMenuMusic.play()
    mainMenuMusic.loop = true
    mainMenuMusic.volume = .1
}

// IN INIT
function startGameMenu() {
    createStartMenuImg.src="../css/Wallpaper-Shovel-Knight-Video-Games-Pixel-Art-Retro-Gam50.jpg"
    startScreenEl.append(createStartMenuImg)
    startScreenEl.append(createStartButtonEl)
    startScreenEl.append(menuTitleEl)
    startScreenEl.append(muteButton1El)
    return playMainMenu()
}



// HAPPENING ON CLICK & SWITCHES TO THE FIRST MESSAGE SCREEN
function disableMainScreen(evnt) {
    startScreenEl.style.display = 'none'
    mainMenuMusic.pause() 
    mainMenuMusic.currentTime = 0
    firstMessageScreenEl.classList.add('play-animation')
    // you have to put it here because it resets and the animation plays right away. If you put it in the resert button, the animation will start playing while youre in the start screen
    resetFirstAnimationScreen()
    createContinueButtonEl.style.visibility = 'hidden'
    firstMessageScreenEl.append(skipButtonEl)
    skipButtonEl.style.visibility = 'visible'
    firstMessageScreenEl.append(resetButtonEl)
    resetButtonEl.style.visibility = 'visible'
    firstMessageScreenEl.append(muteButton1El)
    firstMessageScreenMusic.addEventListener("ended", function() { 
        firstMessageScreenEl.append(createContinueButtonEl)   
        createContinueButtonEl.style.visibility = 'visible'
        console.log("animation end")
        })
    firstMessageScreenMusic.play()    
    evnt.stopPropagation()
}

// HAPPENING ON CLICK AND SWITCHES TO BATTLE SCREEN
function disableFirstMessageScreen(evnt) {
    firstMessageScreenEl.style.display = 'none'
    createFirstBattleImg.src="../css/ancient_gate_by_waltjan_deb9n6i-fullview (1).jpg"
    // createFirstBattleImg.style.visibility = "visible"
    battleScreenEl.append(createFirstBattleImg)
    createFirstBattleImg.style.visibility = 'visible'
    createKnightImg.src="../css/knight-animation.gif"
    createKnightAttackImg.src="../css/knight-attack.gif"
    battleScreenEl.append(createKnightImg)
    battleScreenEl.append(createKnightAttackImg)
    createKnightImg.style.visibility = 'visible'
    createKnightAttackImg.style.visibility = "hidden"
    stoneGolemGif.src="../css/output-onlinegiftools (1).gif"
    battleScreenEl.append(stoneGolemGif)
    stoneGolemGif.style.visibility = 'visible'
    battleScreenEl.append(fightButtonEl)
    fightButtonEl.style.visibility = 'visible'
    console.log(fightButtonEl.style.visibility)
    firstBattleMusic.volume = 0.04
    firstBattleMusic.play()
    firstBattleMusic.loop = true
    battleScreenEl.append(combatLogEl)
    combatLogEl.style.visibility = 'visible'
    battleScreenEl.append(resetButtonEl)
    battleScreenEl.append(muteButton1El)
    firstMessageScreenMusic.pause()
    firstMessageScreenMusic.currentTime = 0
    evnt.stopPropagation()
}

// GAME OVER SCREEN
gameOverScreenEl.append(gameoverMuteButtonEl)
gameOverScreenEl.append(gameOverResetButtonEl)

// HAPPENING ON CLICK AND SWITCHES OVER TO 2ND MESSAGE SCREEN
function disableFirstBattleScreen(evnt) {
    battleScreenEl.style.display = "none"
    updateEnemy()
    console.log(currentEnemy)
    firstBattleMusic.pause()
    firstBattleMusic.currentTime = 0
    secondMessageScreenEl.classList.add('play-animation2')
    resetSecondAnimationScreen()
    secondMessageScreenEl.append(skipButton2El)
    skipButton2El.style.visibility = 'visible'
    secondMessageScreenEl.append(resetButtonEl)
    resetButtonEl.style.visibility = 'visible'
    secondMessageScreenEl.append(muteButton1El)
    firstMessageScreenMusic.addEventListener("ended", function() { 
        secondMessageScreenEl.append(createContinueButton2El)   
        createContinueButton2El.style.visibility = 'visible'
        })
    firstMessageScreenMusic.play()
    winningTheme.pause()
    winningTheme.currentTime = 0
    combatLog2El.innerHTML = ""
    evnt.stopPropagation()
}

// HAPPENING ON CLICK AND SWITCHES OVER TO 2ND BATTLE SCREEN
function disableSecondMessageScreen(evnt) {
    secondMessageScreenEl.style.display = 'none'
    createSecondBattleImg.src="../css/ruins.jpg"
    battleScreen2El.append(createSecondBattleImg)
    createSecondBattleImg.style.visibility = 'visible'
    createKnight2Img.src="../css/knight-animation.gif"
    createKnight2AttackImg.src="../css/knight-attack.gif"
    battleScreen2El.append(createKnight2Img)
    battleScreen2El.append(createKnight2AttackImg)
    createKnight2Img.style.visibility = 'visible'
    createKnight2AttackImg.style.visibility = "hidden"
    bringerOfDeathGif.src="../css/bringer-of-death.gif"
    battleScreen2El.append(bringerOfDeathGif)
    bringerOfDeathGif.style.visibility = 'visible'
    battleScreen2El.append(fightButtonEl)
    fightButtonEl.style.visibility = 'visible'
    secondBattleMusic.volume = 0.04
    secondBattleMusic.play()
    secondBattleMusic.loop = true
    battleScreen2El.append(combatLog2El)
    combatLog2El.style.visibility = 'visible'
    battleScreen2El.append(resetButton2El)
    resetButton2El.style.visibility = 'visible'
    battleScreen2El.append(muteButton1El)
    firstMessageScreenMusic.pause()
    firstMessageScreenMusic.currentTime = 0
    evnt.stopPropagation()
}

function disabledSecondBattleScreen() {
    battleScreen2El.style.display = "none"
    updateEnemy()
    console.log(currentEnemy)
    secondBattleMusic.pause()
    secondBattleMusic.currentTime = 0
    thirdMessageScreenEl.classList.add('play-animation3')
    resetThirdAnimationScreen()
    thirdMessageScreenEl.append(skipButton3El)
    skipButton3El.style.visibility = 'visible'
    thirdMessageScreenEl.append(resetButtonEl)
    resetButtonEl.style.visibility = 'visible'
    thirdMessageScreenEl.append(muteButton2El)
    firstMessageScreenMusic.addEventListener("ended", function() { 
        thirdMessageScreenEl.append(createContinueButton3El)   
        createContinueButton3El.style.visibility = 'visible'
        console.log(createContinueButton3El.style.visibility)
        console.log("animation end")
        })
    firstMessageScreenMusic.play()
    winningTheme.pause()
    winningTheme.currentTime = 0
    combatLog2El.innerHTML = ""
    evnt.stopPropagation()
}

function disableThirdMessageScreen(evnt) {
    // secondMessageScreenEl.style.display = 'none'
    // createSecondBattleImg.src="../css/ruins.jpg"
    // battleScreen2El.append(createSecondBattleImg)
    // createSecondBattleImg.style.visibility = 'visible'
    // createKnight2Img.src="../css/knight-animation.gif"
    // createKnight2AttackImg.src="../css/knight-attack.gif"
    // battleScreen2El.append(createKnight2Img)
    // battleScreen2El.append(createKnight2AttackImg)
    // createKnight2Img.style.visibility = 'visible'
    // createKnight2AttackImg.style.visibility = "hidden"
    // bringerOfDeathGif.src="../css/bringer-of-death.gif"
    // battleScreen2El.append(bringerOfDeathGif)
    // bringerOfDeathGif.style.visibility = 'visible'
    // battleScreen2El.append(fightButtonEl)
    // fightButtonEl.style.visibility = 'visible'
    // secondBattleMusic.volume = 0.04
    // secondBattleMusic.play()
    // secondBattleMusic.loop = true
    // battleScreen2El.append(combatLog2El)
    // combatLog2El.style.visibility = 'visible'
    // battleScreen2El.append(resetButton2El)
    // resetButton2El.style.visibility = 'visible'
    // battleScreen2El.append(muteButton1El)
    // firstMessageScreenMusic.pause()
    // firstMessageScreenMusic.currentTime = 0
    evnt.stopPropagation()
}
//   level3Render() //to be implemented
//toggle button doesnt keep everything turned on after you hit it to play music onload
// DONT FORGET TO ADD STARS TO THE GAME
//dont forget to fix the enemy damage and the player hp