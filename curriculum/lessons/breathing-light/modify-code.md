# Breathing Light – Finished Modify Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.8
```

```template
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (LightOn) {
        LightOn = false
    } else {
        LightOn = true
    }
})
let LightOn = false
let Inhale = true
LightOn = true
let Brightness = 0
let Loudness = 0
basic.forever(function () {
    if (LightOn) {
        Loudness = Math.map(input.soundLevel(), 0, 255, 0, 3)
        fwdLights.ledRing1.setBrightness(Brightness)
        if (Loudness <= 1.5) {
            fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
loops.everyInterval(100, function () {
    if (Inhale) {
        Brightness += 0.1
    } else {
        Brightness += -0.1
    }
    if (Brightness >= 3) {
        Inhale = false
    } else if (Brightness <= 0) {
        Inhale = true
    }
})
```

## 

This is a finished coding project, click ``|Done|`` to edit this code