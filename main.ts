input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showString("happy birthday ")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 30; index++) {
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
let RPS = 0
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
