# Breathing Light – Finished Use Code

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
let Loudness = 0
LightOn = true
basic.forever(function () {
    if (LightOn) {
        Loudness = Math.map(input.soundLevel(), 0, 255, 0, 3)
        fwdLights.ledRing1.setBrightness(Loudness)
        if (Loudness <= 1.5) {
            fwdLights.ledRing1.setAllPixelsColor(0x0000ff)
        } else {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## 

This is a finished coding project, click ``|Done|`` to edit this code