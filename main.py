X = 0
i = 0
strip: neopixel.Strip = None
Start = 0
if input.button_is_pressed(Button.A):
    Start = 2
elif input.button_is_pressed(Button.B):
    Start = 3
else:
    Start = 1
    strip = neopixel.create(DigitalPin.C17, 24, NeoPixelMode.RGBW)
    strip.set_brightness(100)
    strip.show_rainbow(1, 360)
    strip.show()
    i = 0
    X = 0
    X += X
    X += (X + X) / i
basic.show_number(Start)

def on_forever():
    if Start == 1:
        basic.set_led_color(0x00ff00)
        strip.clear()
        strip.set_pixel_color(Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 23),
            neopixel.colors(NeoPixelColors.WHITE))
        strip.show()
    elif Start == 2:
        basic.set_led_color(0xffff00)
    elif Start == 3:
        basic.set_led_color(0xff0000)
basic.forever(on_forever)
