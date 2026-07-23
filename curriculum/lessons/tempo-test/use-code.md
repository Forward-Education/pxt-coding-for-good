# Theremin – Finished Use Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.8
```

```template
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    if (SoundOn) {
        SoundOn = false
        basic.showIcon(IconNames.No)
    } else {
        SoundOn = true
        basic.showIcon(IconNames.EighthNote)
    }
})
let SoundOn = false
let Pitch = 0
basic.showIcon(IconNames.EighthNote)
SoundOn = true
basic.forever(function () {
    Pitch = Math.map(fwdSensors.sonar1.distance(), 0, 0.5, 262, 523)
    if (SoundOn && fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
        fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        music.ringTone(Pitch)
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        music.stopAllSounds()
    }
})
```

## 

This is a finished coding project, click ``|Done|`` to edit this code