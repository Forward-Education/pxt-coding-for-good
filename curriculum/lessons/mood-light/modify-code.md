# Mood Light – Finished Modify Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.7
```

```template
input.onButtonPressed(Button.A, function () {
    Mood = "Happy"
})
input.onButtonPressed(Button.AB, function () {
    Mood = "Excited"
    fwdLights.ledRing1.setAllPixelsColor(0xff8000)
    fwdLights.ledRing1.setPixelColor(fwdLights.LEDRingPixels.Pixel1, 0xff0080)
})
input.onButtonPressed(Button.B, function () {
    Mood = "Frustrated"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Mood = "Calm"
})
let Mood = ""
fwdLights.ledRing1.setBrightness(10)
basic.forever(function () {
    if (Mood == "Happy") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
    } else if (Mood == "Calm") {
        fwdLights.ledRing1.setAllPixelsColor(0x00ffff)
    } else if (Mood == "Frustrated") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
    } else if (Mood == "Excited") {
        fwdLights.ledRing1.rotate(1)
        basic.pause(100)
    }
})
// Change the colors and patterns on your Mood Light, deciding what each color should mean for your classroom community.
```

## 

This is a finished coding project, click ``|Done|`` to edit this code