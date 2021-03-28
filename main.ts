function actionMechant () {
    ouchMechant()
    if (mechantY == 5) {
        spawnMechant()
    }
    led.unplot(mechantX, mechantY)
    mechantY = mechantY + 1
    led.plot(mechantX, mechantY)
}
function actionTout () {
    actionMechant()
}
function spawnMechant () {
    mechantY = -1
    mechantX = randint(0, 4)
}
input.onButtonPressed(Button.A, function () {
    if (jugadorX > 0) {
        led.unplot(jugadorX, JUGADORY)
        jugadorX = jugadorX - 1
        led.plot(jugadorX, JUGADORY)
    }
})
function ouchMechant () {
    if (mechantX == balaX && mechantY == balaY) {
        led.unplot(mechantX, mechantY)
        music.playMelody("- - - - - - - C5 ", 106)
        spawnMechant()
    }
}
input.onButtonPressed(Button.AB, function () {
    balaX = jugadorX
    balaY = JUGADORY - 1
    led.unplot(balaX, balaY)
    if (balaY == 5) {
        mechantX = 0
        basic.pause(1)
        mechantY = 4
        basic.pause(1)
    }
    basic.pause(1)
    led.plot(balaX, balaY)
    basic.pause(1)
})
function chec_aouch () {
    if (jugadorX == mechantX && JUGADORY == mechantY) {
        music.playMelody("C - - - - - - - ", 598)
        led.plot(jugadorX, JUGADORY)
    }
}
function actionBala () {
    led.unplot(balaX, balaY)
    balaY = balaY - 1
    basic.pause(1)
    led.plot(balaX, balaY)
}
input.onButtonPressed(Button.B, function () {
    if (jugadorX < 4) {
        led.unplot(jugadorX, JUGADORY)
        jugadorX = jugadorX + 1
        led.plot(jugadorX, JUGADORY)
    }
})
let balaY = 0
let balaX = 0
let mechantY = 0
let mechantX = 0
let JUGADORY = 0
let jugadorX = 0
let vies = 1
let poinVies = 16
jugadorX = 2
JUGADORY = 4
led.plot(jugadorX, JUGADORY)
mechantX = 2
mechantY = 0
led.plot(mechantX, mechantY)
basic.forever(function () {
    actionTout()
})
