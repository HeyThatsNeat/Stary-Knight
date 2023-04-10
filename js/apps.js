/*-------------------------------- Constants --------------------------------*/

const enemies = [
    {name: "Stone Golem", hp: 140, turn: -1, dmg: 0, stars: 1, alive: true}, 
    {name: "Bringer of Death", hp: 15, turn: -1, dmg: 0, stars: 2, alive: true}, 
    {name: "Fire Worm", hp: 15, turn: -1, dmg: 0, stars: 3, alive: true}, 
    {name: "Giant Ooze", hp: 15, turn: -1, dmg: 0, stars: 4, alive: true}, 
    {name: "Dragon", hp: 15, turn: -1, dmg: 0, stars: 5, alive: true}
]

const player = {hp: 50, turn: 1, get dmg() {
    return knightBaseDmg() + this.stars
}, stars: 0, win: false, alive: true}

const firstBattleMusic = new Audio("../css/audio/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3")
const secondBattleMusic = new Audio("../css/audio/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3")
const thirdBattleMusic = new Audio("../css/audio/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3")
const fourthBattleMusic = new Audio("../css/audio/2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3")
const fifthBattleMusic = new Audio("../css/audio/2021-08-30_-_Boss_Time_-_www.FesliyanStudios.com.mp3")
const wonGameSong = new Audio("../css/audio/20 Theme of Friendship Effort Victory (Credit Roll).mp3")

const winningTheme = new Audio("../css/audio/stinger-2021-08-17_-_8_Bit_Nostalgia_-_www.FesliyanStudios.com.mp3")

const mainMenuMusic = new Audio("../css/audio/Main-Menu.mp3")

const gameOverMusic = new Audio("../css/audio/33 - Game Over.mp3")

const firstMessageScreenMusic = new Audio("../css/audio/7.5second-typewriting-effect.mp3")
const secondMessageScreenMusic = new Audio("../css/audio/7.5second-typewriting-effect.mp3")
const thirdMessageScreenMusic = new Audio("../css/audio/7.5second-typewriting-effect.mp3")
const campfireMusic = new Audio("../css/audio/03. Be In Asleep.mp3")
const emptySilenceMusic = new Audio("../css/audio/7.5-seconds-of-silence.mp3")
const fifthMessageScreenMusic = new Audio("../css/audio/7.5second-typewriting-effect.mp3")
/*---------------------------- Variables (state) ----------------------------*/

let gameLevel, win, playerHP, computerHp, combatLog, turn, startFight, actionMenu, stars  

let currentEnemy = enemies.find(function(enemy) {
    return enemy.alive === true && enemy.stars > 0
})

/*------------------------ Cached Element References ------------------------*/
const createStartMenuImg = document.createElement("img")
createStartMenuImg.className = "start-img"

const starBackgroundImg = document.createElement("img")
starBackgroundImg.className = "star-background"
starBackgroundImg.src="../css/pictures/wallpaperflare.com_wallpaper.jpg"

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

const createContinueButton4El = document.createElement("button")
createContinueButton4El.className =  "continue-button4"
createContinueButton4El.innerText = "Continue"

const createContinueButton5El = document.createElement("button")
createContinueButton5El.className =  "continue-button5"
createContinueButton5El.innerText = "Continue"

const startScreenEl = document.querySelector(".start-screen")

const firstMessageScreenEl = document.querySelector(".first-message")
const secondMessageScreenEl = document.querySelector(".second-message")
const thirdMessageScreenEl = document.querySelector(".third-message")
const campfireSceneEl = document.querySelector(".campfire-scene")
const fifthMessageScreenEl = document.querySelector(".fifth-message")

const menuTitleEl = document.createElement("h1")
menuTitleEl.className = "menu-title"
menuTitleEl.innerText = "Starry Knight"

const createFirstBattleImg = document.createElement("img")
createFirstBattleImg.className = "first-battle-img"
const createSecondBattleImg = document.createElement("img")
createSecondBattleImg.className = "second-battle-img"
const createThirdBattleImg = document.createElement("img")
createThirdBattleImg.className = "third-battle-img"
const createFourthBattleImg = document.createElement("img")
createFourthBattleImg.className = "fourth-battle-img"
const createFifthBattleImg = document.createElement("img")
createFifthBattleImg.className = "fifth-battle-img"

const restSceneGif = document.createElement("img")
restSceneGif.className = "rest-scene-gif"

const createKnightImg = document.createElement("img")
createKnightImg.className = "knight"
const createKnight2Img = document.createElement("img")
createKnight2Img.className = "knight2"
const createKnight3Img = document.createElement("img")
createKnight3Img.className = "knight3"
const createKnight4Img = document.createElement("img")
createKnight4Img.className = "knight4"
const createKnight5Img = document.createElement("img")
createKnight5Img.className = "knight5"

const createKnightAttackImg = document.createElement("img")
createKnightAttackImg.className = "knight-attack"
const createKnight2AttackImg = document.createElement("img")
createKnight2AttackImg.className = "knight2-attack"
const createKnight3AttackImg = document.createElement("img")
createKnight3AttackImg.className = "knight3-attack"
const createKnight4AttackImg = document.createElement("img")
createKnight4AttackImg.className = "knight4-attack"
const createKnight5AttackImg = document.createElement("img")
createKnight5AttackImg.className = "knight5-attack"

const battleScreenEl = document.querySelector(".battle-screen")
const battleScreen2El = document.querySelector(".battle-screen2")
const battleScreen3El = document.querySelector(".battle-screen3")
const battleScreen4El = document.querySelector(".battle-screen4")
const battleScreen5El = document.querySelector(".battle-screen5")

const stoneGolemGif = document.createElement("img")
stoneGolemGif.className = "golem"
const bringerOfDeathGif = document.createElement("img")
bringerOfDeathGif.classList = "bringer-of-death"
const fireWormGif = document.createElement("img")
fireWormGif.classList = "fire-worm"
const oozeGif = document.createElement("img")
oozeGif.classList = "ooze-gif"
const bossGif = document.createElement("img")
bossGif.classList = "boss-gif"

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

const skipButton4El = document.createElement("button")
skipButton4El.className = "skip-button4"
skipButton4El.innerText = "Skip"

const skipButton5El = document.createElement("button")
skipButton5El.className = "skip-button5"
skipButton5El.innerText = "Skip"

const combatLogEl = document.createElement("div")
combatLogEl.className = "combat-log"
const combatLog2El = document.createElement("div")
combatLog2El.className = "combat-log2"
const combatLog3El = document.createElement("div")
combatLog3El.className = "combat-log3"
const combatLog4El = document.createElement("div")
combatLog4El.className = "combat-log4"
const combatLog5El = document.createElement("div")
combatLog5El.className = "combat-log5"

const youWinMessageEl = document.createElement("h1")
youWinMessageEl.className = "you-win-message"
youWinMessageEl.innerText = `Congratulations! You  get  your  stars  back!`

const gameOverScreenEl = document.createElement("div")
gameOverScreenEl.id = "overlay"
const youWonTheGameScreenEl = document.createElement("div")
youWonTheGameScreenEl.id = "win-overlay"
const treasureRoomImg = document.createElement("img")
treasureRoomImg.className = "treasure-room"
treasureRoomImg.src="../css/pictures/Gold Treasures room.jpg"
youWonTheGameScreenEl.append(treasureRoomImg)

const gameOverMessageEl = document.createElement("p")
gameOverMessageEl.className = "game-over-message"
gameOverMessageEl.innerHTML = "GAME <br>OVER"
gameOverScreenEl.append(gameOverMessageEl)
const youWonTheGameMessageEl = document.createElement("p")
youWonTheGameMessageEl.className = "win-over-message"
youWonTheGameMessageEl.innerHTML = "YOU <br>WIN"
youWonTheGameScreenEl.append(youWonTheGameMessageEl)

const bodyEl = document.querySelector("body")
bodyEl.appendChild(gameOverScreenEl)
bodyEl.appendChild(youWonTheGameScreenEl)

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
const gameoverMuteButton2El = document.createElement("button")
gameoverMuteButton2El.className = "game-over-mute-button2"
gameoverMuteButton2El.innerText = "Toggle Mute"

const gameOverResetButtonEl = document.createElement("button")
gameOverResetButtonEl.className = "game-over-reset-button"
gameOverResetButtonEl.innerText = "Try Again?"
const gameOverResetButton2El = document.createElement("button")
gameOverResetButton2El.className = "game-over-reset-button2"
gameOverResetButton2El.innerText = "Try Again?"

const knockYourselfOutButton = document.createElement("button")
knockYourselfOutButton.className = "knock-yourself-out-button"
knockYourselfOutButton.innerText = "K.O. yourself"

const forward1ButtonEl = document.createElement("button")
forward1ButtonEl.className = "forward1-button"
forward1ButtonEl.innerText = "Forward!"
const forward2ButtonEl = document.createElement("button")
forward2ButtonEl.className = "forward2-button"
forward2ButtonEl.innerText = "Forward!"
const forward3ButtonEl = document.createElement("button")
forward3ButtonEl.className = "forward3-button"
forward3ButtonEl.innerText = "Forward!"
const forward4ButtonEl = document.createElement("button")
forward4ButtonEl.className = "forward4-button"
forward4ButtonEl.innerText = "Forward!"

const typeWriter1Animation = document.querySelector('.anim-typewriter')
const typeWriter2Animation = document.querySelector('.anim-typewriter2')
const typeWriter3Animation = document.querySelector('.anim-typewriter3')
const typeWriter4Animation = document.querySelector('.anim-typewriter4')
const typeWriter5Animation = document.querySelector('.anim-typewriter5')
const typeWriter6Animation = document.querySelector('.anim-typewriter6')
const typeWriter7Animation = document.querySelector('.anim-typewriter7')
const typeWriter8Animation = document.querySelector('.anim-typewriter8')
const typeWriter9Animation = document.querySelector('.anim-typewriter9')
const typeWriter10Animation = document.querySelector('.anim-typewriter10')

const star1Gif = document.createElement("img")
star1Gif.className = "star1"
star1Gif.src="/css/pictures/twinkle-stars.gif"
const star2Gif = document.createElement("img")
star2Gif.className = "star2"
star2Gif.src="/css/pictures/twinkle-stars.gif"
const star3Gif = document.createElement("img")
star3Gif.className = "star3"
star3Gif.src="/css/pictures/twinkle-stars.gif"
const star4Gif = document.createElement("img")
star4Gif.className = "star4"
star4Gif.src="/css/pictures/twinkle-stars.gif"
const star5Gif = document.createElement("img")
star5Gif.className = "star5"
star5Gif.src="/css/pictures/twinkle-stars.gif"
const star6Gif = document.createElement("img")
star6Gif.className = "star6"
star6Gif.src="/css/pictures/twinkle-stars.gif"
const star7Gif = document.createElement("img")
star7Gif.className = "star7"
star7Gif.src="/css/pictures/twinkle-stars.gif"
const star8Gif = document.createElement("img")
star8Gif.className = "star8"
star8Gif.src="/css/pictures/twinkle-stars.gif"
const star9Gif = document.createElement("img")
star9Gif.className = "star9"
star9Gif.src="/css/pictures/twinkle-stars.gif"
const star10Gif = document.createElement("img")
star10Gif.className = "star10"
star10Gif.src="/css/pictures/twinkle-stars.gif"
const star11Gif = document.createElement("img")
star11Gif.className = "star11"
star11Gif.src="/css/pictures/twinkle-stars.gif"
const star12Gif = document.createElement("img")
star12Gif.className = "star12"
star12Gif.src="/css/pictures/twinkle-stars.gif"
const star13Gif = document.createElement("img")
star13Gif.className = "star13"
star13Gif.src="/css/pictures/twinkle-stars.gif"
const star14Gif = document.createElement("img")
star14Gif.className = "star14"
star14Gif.src="/css/pictures/twinkle-stars.gif"
const star15Gif = document.createElement("img")
star15Gif.className = "star15"
star15Gif.src="/css/pictures/twinkle-stars.gif"


/*----------------------------- Event Listeners ------------------------------*/
createContinueButtonEl.addEventListener("click", disableFirstMessageScreen)
createContinueButton2El.addEventListener("click", disableSecondMessageScreen)
createContinueButton3El.addEventListener("click", disableThirdMessageScreen)
createContinueButton4El.addEventListener("click", disableCampfireScene)
createContinueButton5El.addEventListener("click", disableFifthMessageScreen)
skipButtonEl.addEventListener("click", disableFirstMessageScreen)
skipButton2El.addEventListener("click", disableSecondMessageScreen)
skipButton3El.addEventListener("click", disableThirdMessageScreen)
skipButton4El.addEventListener("click", disableCampfireScene)
skipButton5El.addEventListener("click", disableFifthMessageScreen)
createStartButtonEl.addEventListener("click", disableMainScreen)
fightButtonEl.addEventListener("click", render)
resetButtonEl.addEventListener("click", resetButton)
resetButton2El.addEventListener("click", resetButton)
gameOverResetButtonEl.addEventListener("click", resetButton)
gameOverResetButton2El.addEventListener("click", resetButton)
muteButton1El.addEventListener("click", toggleMuted1)
muteButton2El.addEventListener("click", toggleMuted1)
gameoverMuteButtonEl.addEventListener("click", toggleMuted1)
gameoverMuteButton2El.addEventListener("click", toggleMuted1)
forward1ButtonEl.addEventListener("click", disableFirstBattleScreen)
forward2ButtonEl.addEventListener("click", disableSecondBattleScreen)
forward3ButtonEl.addEventListener("click", campfireScene)
forward4ButtonEl.addEventListener("click", disableFourthBattleScreen)
knockYourselfOutButton.addEventListener("click", knockYourselfOut)
/*-------------------------------- Functions ---------------------------------*/

function init() {
    startGameMenu()
    win = false
    player.hp = 100
    currentEnemy.hp = 5
    turn = 1
    player.stars = 0
    player.alive = true
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
    beatTheGame()
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
    setTimeout(function() {
        if (player.hp > 0) {
            player.hp -= currentEnemy.dmg
            combatLogEl.innerHTML += `• The ${currentEnemy.name} did ${currentEnemy.dmg} damage and you have ${player.hp} HP left.<br>`
            combatLog2El.innerHTML += `• The ${currentEnemy.name} did ${currentEnemy.dmg} damage and you have ${player.hp} HP left.<br>`
            combatLog3El.innerHTML += `• The ${currentEnemy.name} did ${currentEnemy.dmg} damage and you have ${player.hp} HP left.<br>`
            combatLog4El.innerHTML += `• The ${currentEnemy.name} did ${currentEnemy.dmg} damage and you have ${player.hp} HP left.<br>`
            combatLog5El.innerHTML += `• The ${currentEnemy.name} did ${currentEnemy.dmg} damage and you have ${player.hp} HP left.<br>`
            gameOver()
        if (player.alive !== false){
            combatLogEl.innerHTML +=  `• It's your turn!<br>`
            combatLog2El.innerHTML +=  `• It's your turn!<br>`
            combatLog3El.innerHTML +=  `• It's your turn!<br>`
            combatLog4El.innerHTML +=  `• It's your turn!<br>`
            combatLog5El.innerHTML +=  `• It's your turn!<br>`
            fightButtonEl.disabled = false
            if (firstBattleMusic.currentTime > 0.05 || secondBattleMusic.currentTime > 0.05 || thirdBattleMusic.currentTime > 0.05 || fourthBattleMusic.currentTime > 0.05 || fifthBattleMusic.currentTime > 0.05) {
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
        createKnight3Img.style.visibility = 'hidden'
        createKnight4Img.style.visibility = 'hidden'
        createKnight5Img.style.visibility = 'hidden'
        if (firstBattleMusic.currentTime > 0.05) { 
            createKnightAttackImg.style.visibility = "visible"
        }
        if (secondBattleMusic.currentTime > 0.05) {
            createKnight2AttackImg.style.visibility = "visible"
        }
        if (thirdBattleMusic.currentTime > 0.05) {
            createKnight3AttackImg.style.visibility = "visible"
        }
        if (fourthBattleMusic.currentTime > 0.05) {
            createKnight4AttackImg.style.visibility = "visible"
        }
        if (fifthBattleMusic.currentTime > 0.05) {
            createKnight5AttackImg.style.visibility = "visible"
        }
        combatLogEl.innerHTML += `• You did ${player.dmg} damage and the ${currentEnemy.name} has ${currentEnemy.hp} HP left.<br>`
        combatLog2El.innerHTML += `• You did ${player.dmg} damage and the ${currentEnemy.name} has ${currentEnemy.hp} HP left.<br>`
        combatLog3El.innerHTML += `• You did ${player.dmg} damage and the ${currentEnemy.name} has ${currentEnemy.hp} HP left.<br>`
        combatLog4El.innerHTML += `• You did ${player.dmg} damage and the ${currentEnemy.name} has ${currentEnemy.hp} HP left.<br>`
        combatLog5El.innerHTML += `• You did ${player.dmg} damage and the ${currentEnemy.name} has ${currentEnemy.hp} HP left.<br>`
        gameOver()
        setTimeout(() => {
            createKnightAttackImg.style.visibility = "hidden"
            createKnight2AttackImg.style.visibility = "hidden"
            createKnight3AttackImg.style.visibility = "hidden"
            createKnight4AttackImg.style.visibility = "hidden"
            createKnight5AttackImg.style.visibility = "hidden"
            if (firstBattleMusic.currentTime > 0.05) {
                createKnightImg.style.visibility = 'visible'
            }
            if (secondBattleMusic.currentTime > 0.05) {
                createKnight2Img.style.visibility = 'visible'
            }
            if (thirdBattleMusic.currentTime > 0.05) {
                createKnight3Img.style.visibility = 'visible'
            }
            if (fourthBattleMusic.currentTime > 0.05) {
                createKnight4Img.style.visibility = 'visible'
            }
            if (fifthBattleMusic.currentTime > 0.05) {
                createKnight5Img.style.visibility = 'visible'
            }
        }, 1350)
    }
    if (player.alive !== false) {
        combatLogEl.innerHTML += `• It's ${currentEnemy.name}'s turn!<br>`
        combatLog2El.innerHTML += `• It's ${currentEnemy.name}'s turn!<br>`
        combatLog3El.innerHTML += `• It's ${currentEnemy.name}'s turn!<br>`
        combatLog4El.innerHTML += `• It's ${currentEnemy.name}'s turn!<br>`
        combatLog5El.innerHTML += `• It's ${currentEnemy.name}'s turn!<br>`
    }
}

// IN ENEMY OBJECTS
function currentEnemyDamage() {
    currentEnemy.dmg = Math.floor(Math.random() * 4)
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
        combatLogEl.innerHTML += `• The ${currentEnemy.name} is dead!!!<br>`
        combatLog2El.innerHTML += `• The ${currentEnemy.name} is dead!!!<br>`
        combatLog3El.innerHTML += `• The ${currentEnemy.name} is dead!!!<br>`
        combatLog4El.innerHTML += `• The ${currentEnemy.name} is dead!!!<br>`
        combatLog5El.innerHTML += `• The ${currentEnemy.name} is dead!!!<br>`
    }
    return
}

function gameOver() {
    if (player.hp < 1 || player.alive === false) {
        setTimeout(() => {
            gameOverOn()
            }, 4000)
        createKnightImg.classList.add('fadeOut')
        createKnight2Img.classList.add('fadeOut')
        createKnight3Img.classList.add('fadeOut')
        createKnight4Img.classList.add('fadeOut')
        createKnight5Img.classList.add('fadeOut')
        firstBattleMusic.pause()
        secondBattleMusic.pause()
        thirdBattleMusic.pause()
        fourthBattleMusic.pause()
        fifthBattleMusic.pause()
        gameOverMusic.play()
        gameOverMusic.volume = 0.15
        gameOverMusic.loop = true
        player.alive = false
        combatLogEl.innerHTML += `• You have been knocked out! <br>`
        combatLog2El.innerHTML += `• You have been knocked out! <br>`
        combatLog3El.innerHTML += `• You have been knocked out! <br>`
        combatLog4El.innerHTML += `• You have been knocked out! <br>`
        combatLog5El.innerHTML += `• You have been knocked out! <br>`
    }
}

function knockYourselfOut(){
    player.hp = -1
    gameOver()
}

function gameOverOn() {
    gameOverScreenEl.style.display = "block"
    gameOverScreenEl.style.visibility = 'visible'
    gameOverScreenEl.style.zIndex = 5
    gameOverMessageEl.classList.add('play-game-over-animation')
}

function gameOverOff() {
    gameOverScreenEl.style.display = "none"
    gameOverScreenEl.style.zIndex = -10
}

function youBeatTheGameOff() {
    youWonTheGameScreenEl.style.display = "none"
    youWonTheGameScreenEl.style.zIndex = -10
}

function checkIfWin(){
    // FOR FIRST BATTLE
    if(currentEnemy.alive === false && currentEnemy.stars === 0 && firstBattleMusic.currentTime > 0.05) {
        setTimeout(() => {
            stoneGolemGif.classList.add('fadeOut')
        }, 1200)

        fightButtonEl.style.visibility = "hidden"

        setTimeout(() => {
            if (firstBattleMusic.currentTime > 0.05) {
                createKnightImg.style.visibility = "visible"
                winningTheme.play()
                winningTheme.volume = 0.08
                battleScreenEl.append(star1Gif)
                star1Gif.style.visibility = 'visible'
                firstBattleMusic.pause()
                firstBattleMusic.currentTime = 0
                battleScreenEl.append(youWinMessageEl)
                youWinMessageEl.style.visibility = "visible"
                battleScreenEl.style.visibility = "visible"
                battleScreenEl.append(forward1ButtonEl)
                forward1ButtonEl.style.visibility = "visible"
            }
        }, 3500)
    }
    // FOR SECOND BATTLE
    if(currentEnemy.alive === false && currentEnemy.stars === 0 && secondBattleMusic.currentTime > 0.05) {
            setTimeout(() => {
                bringerOfDeathGif.classList.add('fadeOut')
            }, 1200)

            fightButtonEl.style.visibility = "hidden"

            setTimeout(() => {
                if (secondBattleMusic.currentTime > 0.05) {
                    createKnight2Img.style.visibility = "visible"
                    winningTheme.play()
                    winningTheme.volume = 0.08
                    secondBattleMusic.pause()
                    secondBattleMusic.currentTime = 0
                    battleScreen2El.append(star2Gif)
                    star2Gif.style.visibility = 'visible'
                    battleScreen2El.append(star3Gif)
                    star3Gif.style.visibility = 'visible'
                    battleScreen2El.append(youWinMessageEl)
                    youWinMessageEl.style.visibility = "visible"
                    battleScreen2El.style.visibility = "visible"
                    battleScreen2El.append(forward2ButtonEl)
                    forward2ButtonEl.style.visibility = "visible"
                }
            }, 3500)
    }
    if(currentEnemy.alive === false && currentEnemy.stars === 0 && thirdBattleMusic.currentTime > 0.05) {
        setTimeout(() => {
            fireWormGif.classList.add('fadeOut')
        }, 1200)

        fightButtonEl.style.visibility = "hidden"

        setTimeout(() => {
            if (thirdBattleMusic.currentTime > 0.05) {
                createKnight3Img.style.visibility = "visible"
                winningTheme.play()
                winningTheme.volume = 0.08
                thirdBattleMusic.pause()
                thirdBattleMusic.currentTime = 0
                battleScreen3El.append(star4Gif)
                star4Gif.style.visibility = 'visible'
                battleScreen3El.append(star5Gif)
                star5Gif.style.visibility = 'visible'
                battleScreen3El.append(star6Gif)
                star6Gif.style.visibility = 'visible'
                battleScreen3El.append(youWinMessageEl)
                youWinMessageEl.style.visibility = "visible"
                battleScreen3El.style.visibility = "visible"
                battleScreen3El.append(forward3ButtonEl)
                forward3ButtonEl.style.visibility = "visible"
            }
        }, 3500)
    }
    if(currentEnemy.alive === false && currentEnemy.stars === 0 && fourthBattleMusic.currentTime > 0.05) {
        setTimeout(() => {
            oozeGif.classList.add('fadeOut')
        }, 1200)

        fightButtonEl.style.visibility = "hidden"

        setTimeout(() => {
            if (fourthBattleMusic.currentTime > 0.05) {
                createKnight4Img.style.visibility = "visible"
                winningTheme.play()
                winningTheme.volume = 0.08
                fourthBattleMusic.pause()
                fourthBattleMusic.currentTime = 0
                battleScreen4El.append(star7Gif)
                star7Gif.style.visibility = 'visible'
                battleScreen4El.append(star8Gif)
                star8Gif.style.visibility = 'visible'
                battleScreen4El.append(star9Gif)
                star9Gif.style.visibility = 'visible'
                battleScreen4El.append(star10Gif)
                star10Gif.style.visibility = 'visible'
                battleScreen4El.append(youWinMessageEl)
                youWinMessageEl.style.visibility = "visible"
                battleScreen4El.style.visibility = "visible"
                battleScreen4El.append(forward4ButtonEl)
                forward4ButtonEl.style.visibility = "visible"
            }
        }, 3500)
    }
    if(currentEnemy.alive === false && currentEnemy.stars === 0 && fifthBattleMusic.currentTime > 0.05) {
        setTimeout(() => {
            bossGif.classList.add('fadeOut')
        }, 1200)

        fightButtonEl.style.visibility = "hidden"

        setTimeout(() => {
            if (fifthBattleMusic.currentTime > 0.05) {
                createKnight5Img.style.visibility = "visible"
                winningTheme.play()
                winningTheme.volume = 0.08
                fifthBattleMusic.pause()
                fifthBattleMusic.currentTime = 0
                battleScreen5El.append(star11Gif)
                star11Gif.style.visibility = 'visible'
                battleScreen5El.append(star12Gif)
                star12Gif.style.visibility = 'visible'
                battleScreen5El.append(star13Gif)
                star13Gif.style.visibility = 'visible'
                battleScreen5El.append(star14Gif)
                star14Gif.style.visibility = 'visible'
                battleScreen5El.append(star15Gif)
                star15Gif.style.visibility = 'visible'
                battleScreen5El.append(youWinMessageEl)
                youWinMessageEl.style.visibility = "visible"
                battleScreen5El.style.visibility = "visible"
                battleScreen5El.append(forward5ButtonEl)
                forward5ButtonEl.style.visibility = "visible"
            }
        }, 3500)
    }
    return 
}

function beatTheGame() {
    if (enemies[4].alive === false) {
        player.win = true
    setTimeout(() => {
        wonGameSong.play() 
        wonGameSong.volume = 0.1
        wonGameSong.loop = true
        youWonTheGameScreenEl.style.display = "block"
        youWonTheGameScreenEl.style.visibility = 'visible'
        youWonTheGameScreenEl.style.zIndex = 5
        youWonTheGameMessageEl.classList.add('play-game-over-animation')
    }, 8000)
    }
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
    thirdBattleMusic.muted = !thirdBattleMusic.muted
    fourthBattleMusic.muted = !fourthBattleMusic.muted
    fifthBattleMusic.muted = !fifthBattleMusic.muted
    secondMessageScreenMusic.muted = !secondMessageScreenMusic.muted
    thirdMessageScreenMusic.muted = ! thirdMessageScreenMusic.muted 
    fifthMessageScreenMusic.muted = ! fifthMessageScreenMusic.muted 
    campfireMusic.muted = !campfireMusic.muted
    emptySilenceMusic.muted = !emptySilenceMusic.muted
    wonGameSong.muted = !wonGameSong.muted
}

function resetButton() {
    mainMenuMusic.pause()
    mainMenuMusic.currentTime = 0

    firstBattleMusic.pause()
    firstBattleMusic.currentTime = 0

    secondBattleMusic.pause()
    secondBattleMusic.currentTime = 0

    thirdBattleMusic.pause()
    thirdBattleMusic.currentTime = 0

    fourthBattleMusic.pause()
    fourthBattleMusic.currentTime = 0
    fifthBattleMusic.pause()
    fifthBattleMusic.currentTime = 0

    winningTheme.pause()
    winningTheme.currentTime = 0

    gameOverMusic.pause()
    gameOverMusic.currentTime = 0

    firstMessageScreenMusic.pause()
    firstMessageScreenMusic.currentTime = 0

    secondMessageScreenMusic.pause()
    secondMessageScreenMusic.currentTime = 0

    thirdMessageScreenMusic.pause()
    thirdMessageScreenMusic.currentTime = 0

    fifthMessageScreenMusic.pause()
    fifthMessageScreenMusic.currentTime = 0

    campfireMusic.pause()
    campfireMusic.currentTime = 0

    emptySilenceMusic.pause()
    emptySilenceMusic.currentTime = 0

    wonGameSong.pause()
    wonGameSong.currentTime = 0

    startScreenEl.style.display = 'inline'
    firstMessageScreenEl.style.display = 'flex'
    secondMessageScreenEl.style.display = 'flex'
    thirdMessageScreenEl.style.display = 'flex'
    fifthMessageScreenEl.style.display = 'flex'
    campfireSceneEl.style.display = 'flex'
    battleScreenEl.style.display = 'inline'
    battleScreen2El.style.display = 'inline'
    battleScreen3El.style.display = 'inline'
    battleScreen4El.style.display = 'inline'
    battleScreen5El.style.display = 'inline'

    createContinueButtonEl.style.visibility = 'hidden'
    createContinueButton2El.style.visibility = 'hidden'
    createContinueButton3El.style.visibility = 'hidden'
    createContinueButton4El.style.visibility = 'hidden'
    createContinueButton5El.style.visibility = 'hidden'

    skipButtonEl.style.visibility = 'hidden'
    skipButton2El.style.visibility = 'hidden'
    skipButton3El.style.visibility = 'hidden'
    skipButton4El.style.visibility = 'hidden'
    skipButton5El.style.visibility = 'hidden'

    knockYourselfOutButton.style.visibility = 'hidden'

    resetButtonEl.style.visibility = 'hidden'
    resetButton2El.style.visibility = 'hidden'

    muteButton1El.style.visibility = 'hidden'
    muteButton2El.style.visibility = 'hidden'

    createFirstBattleImg.style.visibility = 'hidden'
    createSecondBattleImg.style.visibility = 'hidden'
    
    createKnightImg.style.visibility = 'hidden'
    createKnight2Img.style.visibility = 'hidden'
    createKnight3Img.style.visibility = 'hidden'
    createKnight4Img.style.visibility = 'hidden'
    createKnight5Img.style.visibility = 'hidden'

    createKnightAttackImg.style.visibility = 'hidden'
    createKnight2AttackImg.style.visibility = 'hidden'
    createKnight3AttackImg.style.visibility = 'hidden'
    createKnight4AttackImg.style.visibility = 'hidden'
    createKnight5AttackImg.style.visibility = 'hidden'

    stoneGolemGif.style.visibility = 'hidden'
    star1Gif.style.visibility = 'hidden'
    bringerOfDeathGif.style.visibility = 'hidden'
    star2Gif.style.visibility = 'hidden'
    star3Gif.style.visibility = 'hidden'
    fireWormGif.style.visibility = 'hidden'
    star4Gif.style.visibility = 'hidden'
    star5Gif.style.visibility = 'hidden'
    star6Gif.style.visibility = 'hidden'
    oozeGif.style.visibility = 'hidden'
    star7Gif.style.visibility = 'hidden'
    star8Gif.style.visibility = 'hidden'
    star9Gif.style.visibility = 'hidden'
    star10Gif.style.visibility = 'hidden'
    bossGif.style.visibility = 'hidden'
    star11Gif.style.visibility = 'hidden'
    star12Gif.style.visibility = 'hidden'
    star13Gif.style.visibility = 'hidden'
    star14Gif.style.visibility = 'hidden'
    star15Gif.style.visibility = 'hidden'

    restSceneGif.style.visibility = 'hidden'

    fightButtonEl.disabled = false
    fightButtonEl.style.visibility = 'hidden'

    combatLogEl.style.visibility = 'hidden'
    combatLogEl.innerHTML = ""
    combatLog2El.style.visibility = 'hidden'
    combatLog2El.innerHTML = ""
    combatLog3El.style.visibility = 'hidden'
    combatLog3El.innerHTML = ""
    combatLog4El.style.visibility = 'hidden'
    combatLog4El.innerHTML = ""
    combatLog5El.style.visibility = 'hidden'
    combatLog5El.innerHTML = ""
    
    youWinMessageEl.style.visibility = "hidden"

    forward1ButtonEl.style.visibility = "hidden"
    forward2ButtonEl.style.visibility = "hidden"
    forward3ButtonEl.style.visibility = "hidden"
    forward4ButtonEl.style.visibility = "hidden"

    createKnightImg.classList.remove('fadeOut')
    createKnight2Img.classList.remove('fadeOut')
    createKnight3Img.classList.remove('fadeOut')
    createKnight4Img.classList.remove('fadeOut')
    createKnight5Img.classList.remove('fadeOut')

    stoneGolemGif.classList.remove('fadeOut')
    bringerOfDeathGif.classList.remove('fadeOut')
    fireWormGif.classList.remove('fadeOut')
    oozeGif.classList.remove('fadeOut')
    bossGif.classList.remove('fadeOut')
    
    gameOverOff()

    youBeatTheGameOff()
    
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].stars = i + 1  
        enemies[i].alive = true
        enemies[i].hp = 5
    }
    currentEnemy = enemies[0]

    init()
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

function resetFourthAnimationScreen() {
    typeWriter7Animation.style.animation = 'none'
    typeWriter7Animation.offsetHeight
    typeWriter7Animation.style.animation = null 

    typeWriter8Animation.style.animation = 'none'
    typeWriter8Animation.offsetHeight
    typeWriter8Animation.style.animation = null 
}

function resetFifthAnimationScreen() {
    typeWriter9Animation.style.animation = 'none'
    typeWriter9Animation.offsetHeight
    typeWriter9Animation.style.animation = null 

    typeWriter10Animation.style.animation = 'none'
    typeWriter10Animation.offsetHeight
    typeWriter10Animation.style.animation = null 
}

function playMainMenu() {
    mainMenuMusic.play()
    mainMenuMusic.loop = true
    mainMenuMusic.volume = .1
}

// IN INIT
function startGameMenu() {
    createStartMenuImg.src="../css/pictures/Wallpaper-Shovel-Knight-Video-Games-Pixel-Art-Retro-Gam50.jpg"
    startScreenEl.append(createStartMenuImg)
    startScreenEl.append(createStartButtonEl)
    startScreenEl.append(menuTitleEl)
    startScreenEl.append(muteButton1El)
    muteButton1El.style.visibility = 'visible'
}

// HAPPENING ON CLICK & SWITCHES TO THE FIRST MESSAGE SCREEN
function disableMainScreen(evnt) {
    startScreenEl.style.display = 'none'
    mainMenuMusic.pause() 
    mainMenuMusic.currentTime = 0
    firstMessageScreenEl.classList.add('play-animation')
    // you have to put it here because it resets and the animation plays right away. If you put it in the reset button, the animation will start playing while youre in the start screen. DONT MOVE THIS FOR FUTURE USE!
    resetFirstAnimationScreen()
    createContinueButtonEl.style.visibility = 'hidden'
    firstMessageScreenEl.append(skipButtonEl)
    skipButtonEl.style.visibility = 'visible'
    firstMessageScreenEl.append(resetButtonEl)
    resetButtonEl.style.visibility = 'visible'
    firstMessageScreenEl.append(muteButton1El)
    muteButton1El.style.visibility = 'visible'
    firstMessageScreenMusic.addEventListener("ended", function() { 
        firstMessageScreenEl.append(createContinueButtonEl)   
        createContinueButtonEl.style.visibility = 'visible'
        })
    firstMessageScreenMusic.play()    
    evnt.stopPropagation()
}

// HAPPENING ON CLICK AND SWITCHES TO BATTLE SCREEN
function disableFirstMessageScreen(evnt) {
    firstMessageScreenEl.style.display = 'none'
    createFirstBattleImg.src="../css/pictures/ancient_gate_by_waltjan_deb9n6i-fullview (1).jpg"
    battleScreenEl.append(createFirstBattleImg)
    createFirstBattleImg.style.visibility = 'visible'
    createKnightImg.src="../css/pictures/knight-animation.gif"
    createKnightAttackImg.src="../css/pictures/knight-attack.gif"
    battleScreenEl.append(createKnightImg)
    battleScreenEl.append(createKnightAttackImg)
    createKnightImg.style.visibility = 'visible'
    createKnightAttackImg.style.visibility = "hidden"
    stoneGolemGif.src="../css/pictures/output-onlinegiftools (1).gif"
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
    muteButton1El.style.visibility = 'visible'
    firstMessageScreenMusic.pause()
    firstMessageScreenMusic.currentTime = 0
    battleScreenEl.append(knockYourselfOutButton)
    knockYourselfOutButton.style.visibility = 'visible'
    
    evnt.stopPropagation()
}

// GAME OVER SCREEN
gameOverScreenEl.append(gameoverMuteButtonEl)
gameOverScreenEl.append(gameOverResetButtonEl)
gameOverScreenEl.append(starBackgroundImg)

youWonTheGameScreenEl.append(gameoverMuteButton2El)
youWonTheGameScreenEl.append(gameOverResetButton2El)

// HAPPENING ON CLICK AND SWITCHES OVER TO 2ND MESSAGE SCREEN
function disableFirstBattleScreen(evnt) {
    battleScreenEl.style.display = "none"
    updateEnemy()
    firstBattleMusic.pause()
    firstBattleMusic.currentTime = 0
    secondMessageScreenEl.classList.add('play-animation2')
    resetSecondAnimationScreen()
    secondMessageScreenEl.append(skipButton2El)
    skipButton2El.style.visibility = 'visible'
    secondMessageScreenEl.append(resetButtonEl)
    resetButtonEl.style.visibility = 'visible'
    secondMessageScreenEl.append(muteButton1El)
    muteButton1El.style.visibility = 'visible'
    secondMessageScreenMusic.addEventListener("ended", function() { 
        secondMessageScreenEl.append(createContinueButton2El)   
        createContinueButton2El.style.visibility = 'visible'
        })
    secondMessageScreenMusic.play()
    winningTheme.pause()
    winningTheme.currentTime = 0
    combatLog2El.innerHTML = ""
    evnt.stopPropagation()
}

// HAPPENING ON CLICK AND SWITCHES OVER TO 2ND BATTLE SCREEN
function disableSecondMessageScreen(evnt) {
    secondMessageScreenEl.style.display = 'none'
    createSecondBattleImg.src="../css/pictures/ruins.jpg"
    battleScreen2El.append(createSecondBattleImg)
    createSecondBattleImg.style.visibility = 'visible'
    createKnight2Img.src="../css/pictures/knight-animation.gif"
    createKnight2AttackImg.src="../css/pictures/knight-attack.gif"
    battleScreen2El.append(createKnight2Img)
    battleScreen2El.append(createKnight2AttackImg)
    createKnight2Img.style.visibility = 'visible'
    createKnight2AttackImg.style.visibility = "hidden"
    bringerOfDeathGif.src="../css/pictures/bringer-of-death.gif"
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
    muteButton1El.style.visibility = 'visible'
    secondMessageScreenMusic.pause()
    secondMessageScreenMusic.currentTime = 0
    
    evnt.stopPropagation()
}



function disableSecondBattleScreen(evnt) {
    battleScreen2El.style.display = "none"
    updateEnemy()
    secondBattleMusic.pause()
    secondBattleMusic.currentTime = 0
    thirdMessageScreenEl.classList.add('play-animation3')
    resetThirdAnimationScreen()
    thirdMessageScreenEl.append(skipButton3El)
    skipButton3El.style.visibility = 'visible'
    thirdMessageScreenEl.append(resetButtonEl)
    resetButtonEl.style.visibility = 'visible'
    thirdMessageScreenEl.append(muteButton2El)
    muteButton2El.style.visibility = 'visible'
    thirdMessageScreenMusic.addEventListener("ended", function() { 
        thirdMessageScreenEl.append(createContinueButton3El)   
        createContinueButton3El.style.visibility = 'visible'
        })
    thirdMessageScreenMusic.play()
    winningTheme.pause()
    winningTheme.currentTime = 0
    combatLog2El.innerHTML = ""
    evnt.stopPropagation()
}

function disableThirdMessageScreen(evnt) {
    thirdMessageScreenEl.style.display = 'none'
    createThirdBattleImg.src="../css/pictures/walk_in_elsweyr___lair_by_khajiitsawyer_d5gk0nr.png"
    battleScreen3El.append(createThirdBattleImg)
    createThirdBattleImg.style.visibility = 'visible'
    createKnight3Img.src="../css/pictures/knight-animation.gif"
    createKnight3AttackImg.src="../css/pictures/knight-attack.gif"
    battleScreen3El.append(createKnight3Img)
    battleScreen3El.append(createKnight3AttackImg)
    createKnight3Img.style.visibility = 'visible'
    createKnight3AttackImg.style.visibility = "hidden"
    fireWormGif.src="../css/pictures/fire-worm.gif"
    battleScreen3El.append(fireWormGif)
    fireWormGif.style.visibility = 'visible'
    battleScreen3El.append(fightButtonEl)
    fightButtonEl.style.visibility = 'visible'
    thirdBattleMusic.volume = 0.04
    thirdBattleMusic.play()
    thirdBattleMusic.loop = true
    battleScreen3El.append(combatLog3El)
    combatLog3El.innerHTML = ""
    combatLog3El.style.visibility = 'visible'
    battleScreen3El.append(resetButtonEl)
    resetButtonEl.style.visibility = 'visible'
    battleScreen3El.append(muteButton1El)
    thirdMessageScreenMusic.pause()
    thirdMessageScreenMusic.currentTime = 0
    evnt.stopPropagation()
}

//  DISABLE THIRD BATTLE SCREEN
function campfireScene(evnt) {
    battleScreen3El.style.display = "none"
    updateEnemy()
    thirdBattleMusic.pause()
    thirdBattleMusic.currentTime = 0
    restSceneGif.src='../css/pictures/rest-scene.gif'
    restSceneGif.style.visibility = "visible"
    campfireSceneEl.append(restSceneGif)
    campfireSceneEl.classList.add('play-animation4')
    resetFourthAnimationScreen()
    campfireSceneEl.append(skipButton4El)
    skipButton4El.style.visibility = 'visible'
    campfireSceneEl.append(resetButtonEl)
    resetButtonEl.style.visibility - 'visible'
    campfireSceneEl.append(muteButton1El)
    muteButton1El.style.visibility = 'visible'
    emptySilenceMusic.play()
    emptySilenceMusic.addEventListener("ended", function() { 
        if (emptySilenceMusic.currentTime > 0.5) {
            campfireSceneEl.append(createContinueButton4El)   
            createContinueButton4El.style.visibility = 'visible'
        }
    })
    campfireMusic.play()
    campfireMusic.volume = 0.5
    campfireMusic.loop = true
    winningTheme.pause()
    winningTheme.currentTime = 0
    combatLog3El.innerHTML = ""
    evnt.stopPropagation()
}

// DISABLE MESSAGE SCREEN
function disableCampfireScene(evnt) {
    campfireSceneEl.style.display = 'none'
    createFourthBattleImg.src="../css/pictures/skull_cave_by_misssaber444_deb8jki (1).jpg"
    battleScreen4El.append(createFourthBattleImg)
    createFourthBattleImg.style.visibility = 'visible'
    createKnight4Img.src="../css/pictures/knight-animation.gif"
    createKnight4AttackImg.src="../css/pictures/knight-attack.gif"
    battleScreen4El.append(createKnight4Img)
    battleScreen4El.append(createKnight4AttackImg)
    createKnight4Img.style.visibility = 'visible'
    createKnight4AttackImg.style.visibility = "hidden"
    oozeGif.src="../css/pictures/ooze.gif"
    battleScreen4El.append(oozeGif)
    oozeGif.style.visibility = 'visible'
    battleScreen4El.append(fightButtonEl)
    fightButtonEl.style.visibility = 'visible'
    fourthBattleMusic.volume = 0.04
    fourthBattleMusic.play()
    fourthBattleMusic.loop = true
    battleScreen4El.append(combatLog4El)
    combatLog4El.innerHTML = ""
    combatLog4El.style.visibility = 'visible'
    battleScreen4El.append(resetButtonEl)
    resetButtonEl.style.visibility = 'visible'
    battleScreen4El.append(muteButton1El)
    campfireMusic.pause()
    campfireMusic.currentTime = 0
    
    evnt.stopPropagation()
}

// DISABLE COMBAT SCREEN
function disableFourthBattleScreen(evnt) {
    battleScreen4El.style.display = "none"
    updateEnemy()
    fourthBattleMusic.pause()
    fourthBattleMusic.currentTime = 0
    fifthMessageScreenEl.classList.add('play-animation5')
    resetFifthAnimationScreen()
    fifthMessageScreenEl.append(skipButton5El)
    skipButton5El.style.visibility = 'visible'
    fifthMessageScreenEl.append(resetButtonEl)
    resetButtonEl.style.visibility - 'visible'
    fifthMessageScreenEl.append(muteButton1El)
    muteButton1El.style.visibility = 'visible'
    fifthMessageScreenMusic.addEventListener("ended", function() { 
        if (fifthMessageScreenMusic.currentTime > 0.5) {
            fifthMessageScreenEl.append(createContinueButton5El)  
        }
    })
    fifthMessageScreenMusic.play()
    fifthMessageScreenMusic.volume = 0.5
    winningTheme.pause()
    winningTheme.currentTime = 0
    combatLog4El.innerHTML = ""
    evnt.stopPropagation()
}

// DISABLE MESSAGE SCREEN
function disableFifthMessageScreen(evnt) {
    fifthMessageScreenEl.style.display = 'none'
    createFifthBattleImg.src="../css/pictures/obrin-7.jpg"
    battleScreen5El.append(createFifthBattleImg)
    createFifthBattleImg.style.visibility = 'visible'
    createKnight5Img.src="../css/pictures/knight-animation.gif"
    createKnight5AttackImg.src="../css/pictures/knight-attack.gif"
    battleScreen5El.append(createKnight5Img)
    battleScreen5El.append(createKnight5AttackImg)
    createKnight5Img.style.visibility = 'visible'
    createKnight5AttackImg.style.visibility = "hidden"
    bossGif.src="../css/pictures/boss.gif"
    battleScreen5El.append(bossGif)
    bossGif.style.visibility = 'visible'
    battleScreen5El.append(fightButtonEl)
    fightButtonEl.style.visibility = 'visible'
    fifthBattleMusic.volume = 0.04
    fifthBattleMusic.play()
    fifthBattleMusic.loop = true
    battleScreen5El.append(combatLog5El)
    combatLog5El.innerHTML = ""
    combatLog5El.style.visibility = 'visible'
    battleScreen5El.append(resetButtonEl)
    resetButtonEl.style.visibility = 'visible'
    battleScreen5El.append(muteButton1El)
    fifthMessageScreenMusic.pause()
    fifthMessageScreenMusic.currentTime = 0
    evnt.stopPropagation()
}

//toggle button doesnt keep everything turned on after you hit it to play music onload
// DONT FORGET TO ADD STARS GIF TO THE GAME
//dont forget to fix the enemy damage and the player hp