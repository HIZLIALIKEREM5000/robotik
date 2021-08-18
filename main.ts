music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
basic.pause(1000)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
basic.pause(1000)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
maqueen.motorStop(maqueen.Motors.M2)
basic.pause(1000)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
basic.pause(1000)
basic.showLeds(`
    . # # # .
    . # . # .
    . # . # .
    . # # # .
    . # . # .
    `)
basic.showLeds(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.pause(500)
basic.showNumber(12345678910)
basic.pause(1000)
basic.pause(1000)
