let avg = 0
let sum = 0
let list: number[] = []
let strip: neopixel.Strip = null
let Start = 0
if (input.buttonIsPressed(Button.A)) {
    Start = 2
} else if (input.buttonIsPressed(Button.B)) {
    Start = 3
} else {
    Start = 1
    strip = neopixel.create(DigitalPin.C17, 24, NeoPixelMode.RGBW)
    strip.setBrightness(100)
    strip.showRainbow(1, 360)
    strip.show()
    for (let Index = 0; Index <= 9; Index++) {
        list.push(Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 23))
    }
}
basic.showNumber(Start)
basic.forever(function () {
    if (Start == 1) {
        basic.setLedColor(0x00ff00)
        strip.clear()
        list.shift()
        list.push(Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 23))
        sum = 0
        for (let Index = 0; Index <= 9; Index++) {
            sum = sum + list[Index]
        }
        avg = sum / 10
        strip.setPixelColor(avg, neopixel.colors(NeoPixelColors.White))
        strip.show()
    } else if (Start == 2) {
        basic.setLedColor(0xffff00)
    } else if (Start == 3) {
        basic.setLedColor(0xff0000)
    }
})
