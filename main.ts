basic.forever(function () {
    basic.showNumber(input.compassHeading())
    if (input.compassHeading() < 45 || input.compassHeading() > 315) {
        music.playMelody("A F E F D G E F ", 120)
    } else {
        music.stopMelody(MelodyStopOptions.All)
    }
})
