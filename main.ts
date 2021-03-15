function actionMechant () {
    if (mechantY == 5) {
        mechantX = randint(0, 4)
        mechantY = 0
    }
    led.unplot(mechantX, mechantY)
    mechantY = mechantY + 1
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
        mechantY = 4
    }
    led.plot(balaX, balaY)
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
let mechantY = 0
let mechantX = 0
let balaY = 0
let balaX = 0
let JUGADORY = 0
let jugadorX = 0
jugadorX = 2
JUGADORY = 4
led.plot(jugadorX, JUGADORY)
balaX = 2
balaY = 4
mechantX = 2
mechantY = 0
led.plot(mechantX, mechantY)
basic.forever(function () {
    actionMechant()
    acitonBala()
})
