input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showString("BLOW")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `,30)
basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # # . # #
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    RPS = randint(1, 3)
    if (RPS == 1) {
        basic.showString("R")
    } else if (RPS == 2) {
        basic.showString("S")
    } else {
        basic.showString("P")
    }
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . # # .
        . . # . .
        . . # . .
        `)
})
let RPS = 0
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
basic.forever(function () {
    music.playMelody("C D C F G F A C5 ", 120)
})
control.inBackground(function () {
	
})