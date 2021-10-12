let neopixels = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    for (let index = 0; index <= 3; index++) {
        neopixels.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
        neopixels.show()
        basic.pause(100)
        neopixels.clear()
    }
})
