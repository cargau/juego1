function actionMechant () {
    vieMechant()
    if (mechantY == 5) {
        spawnMechant()
    }
    basic.pause(4)
    led.unplot(mechantX, mechantY)
    basic.pause(16)
    mechantY = mechantY + 1
    basic.pause(100)
    led.plot(mechantX, mechantY)
}
function actionTout () {
    actionMechant()
    chec_aouch()
    acitonBala5()
}
function spawnMechant () {
    mechantY = 0
    mechantX = randint(2, 2)
}
function acitonBala5 () {
    led.unplot(balaX, balaY)
    balaY = balaY - 1
    basic.pause(1)
    led.plot(balaX, balaY)
}
input.onButtonPressed(Button.A, function () {
    if (jugadorX > 0) {
        led.unplot(jugadorX, JUGADORY)
        jugadorX = jugadorX - 1
        led.plot(jugadorX, JUGADORY)
    }
})
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
function vieMechant () {
    if (mechantX == balaX && mechantY == balaY) {
        led.unplot(mechantX, mechantY)
        music.playMelody("C - - - - - - - ", 106)
        spawnMechant()
    }
}
function chec_aouch () {
    if (jugadorX == mechantX && JUGADORY == mechantY) {
        music.playMelody("C - - - - - - - ", 598)
    }
}
input.onButtonPressed(Button.B, function () {
    if (jugadorX < 4) {
        led.unplot(jugadorX, JUGADORY)
        jugadorX = jugadorX + 1
        led.plot(jugadorX, JUGADORY)
    }
})
let mechantY = 0
let mechantX = 0
let balaY = 0
let balaX = 0
let JUGADORY = 0
let jugadorX = 0
let vies = 1
let poinVies = 16
jugadorX = 2
JUGADORY = 4
led.plot(jugadorX, JUGADORY)
balaX = 2
balaY = 4
mechantX = 2
mechantY = 0
led.plot(mechantX, 0)
basic.forever(function () {
    actionTout()
})
