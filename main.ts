function actionTout2 () {
	
}
function chec_aouch2 () {
	
}
function actionMechant () {
    if (mechantY == 5) {
        mechantY = 0
        mechantX = randint(0, 4)
    }
    basic.pause(4)
    led.unplot(mechantX, mechantY)
    basic.pause(16)
    mechantY = mechantY + 1
    basic.pause(100)
    led.plot(mechantX, mechantY)
}
function chec_aouch4 () {
	
}
function actionTout () {
    acitonBala()
    actionMechant()
    chec_aouch()
}
function vieMechant5 () {
	
}
function actionTout3 () {
	
}
function acitonBala4 () {
	
}
function acitonBala3 () {
	
}
function actionMechant5 () {
	
}
function acitonBala5 () {
	
}
input.onButtonPressed(Button.A, function () {
    if (jugadorX > 0) {
        led.unplot(jugadorX, JUGADORY)
        jugadorX = jugadorX - 1
        led.plot(jugadorX, JUGADORY)
    }
})
function vieMechant4 () {
	
}
function actionMechant2 () {
	
}
function actionMechant4 () {
	
}
function actionMechant3 () {
	
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
function vieMechant () {
    if (mechantX == balaX && mechantY == balaY) {
        led.unplot(mechantX, mechantY)
        music.playMelody("- - C5 C5 C5 C5 C5 C5 ", 598)
    }
}
function chec_aouch () {
    if (jugadorX == mechantX && JUGADORY == mechantY) {
        music.playMelody("C - - - - - - - ", 598)
    }
}
function chec_aouch5 () {
	
}
function vieMechant2 () {
	
}
function acitonBala () {
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
function vieMechant3 () {
	
}
function actionTout5 () {
	
}
function chec_aouch3 () {
	
}
function acitonBala2 () {
	
}
function actionTout4 () {
	
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
    actionTout()
})
