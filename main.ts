function actionMechant () {
    if (mechantY == 5) {
        mechantX = randint(0, 4)
        mechantY = -1
    }
    basic.pause(100)
    led.unplot(mechantX, mechantY)
    basic.pause(100)
    mechantY = mechantY + 1
    basic.pause(4)
    led.plot(mechantX, mechantY)
}
input.onButtonPressed(Button.A, function () {
    led.unplot(jugadorX, JUGADORY)
    jugadorX = jugadorX - 1
    led.plot(jugadorX, JUGADORY)
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
function acitonBala () {
    led.unplot(balaX, balaY)
    balaY = balaY - 1
    led.plot(balaX, balaY)
}
input.onButtonPressed(Button.B, function () {
    led.unplot(jugadorX, JUGADORY)
    jugadorX = jugadorX + 1
    led.plot(jugadorX, JUGADORY)
})
function chec_aouch () {
    if (jugadorX == mechantX && JUGADORY == mechantY) {
        music.ringTone(262)
    }
}
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
    actionMechant()
    acitonBala()
})
