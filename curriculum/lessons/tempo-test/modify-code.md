# Theremin – Finished Modify Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.8
```

```template
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    Effect = true
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    Effect = false
})
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    if (SoundOn) {
        SoundOn = false
        basic.showIcon(IconNames.No)
    } else {
        SoundOn = true
        basic.showIcon(IconNames.EighthNote)
    }
})
let Pitch = 0
let Effect = false
let SoundOn = false
basic.showIcon(IconNames.EighthNote)
SoundOn = true
Effect = true
basic.forever(function () {
    Pitch = Math.map(fwdSensors.sonar1.distance(), 0, 0.5, 262, 523)
    if (SoundOn && fwdSensors.sonar1.isPastThreshold(0.5, fwdEnums.OverUnder.Under)) {
        if (Effect) {
            music.play(music.createSoundExpression(
            WaveShape.Square,
            Pitch,
            Pitch,
            255,
            255,
            1000,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
            ), music.PlaybackMode.UntilDone)
            fwdLights.ledRing1.setAllPixelsColor(0x007fff)
        } else {
            music.ringTone(Pitch)
            fwdLights.ledRing1.setAllPixelsColor(0x00ff00)
        }
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        music.stopAllSounds()
    }
})
```

## 

This is a finished coding project, click ``|Done|`` to edit this code