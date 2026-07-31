# Smart Doorbell – Finished Use Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Up, function () {
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
datalogger.onLogFull(function () {
    basic.showIcon(IconNames.Sad)
})
fwdSensors.pir1.onMovement(function () {
    Motion += 1
    datalogger.log(
    datalogger.createCV("Motion", Motion),
    datalogger.createCV("Sunlight", fwdSensors.solar1.lightLevel())
    )
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Yes)
    datalogger.deleteLog()
})
fwdButtons.touch1.onEvent(jacdac.ButtonEvent.Down, function () {
    music.ringTone(659)
})
let Motion = 0
fwdLights.ledRing1.setBrightness(10)
Motion = 0
let LightOn = 0
datalogger.setColumnTitles(
"Motion",
"Sunlight",
"LightOn"
)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
basic.forever(function () {
    if (fwdSensors.pir1.motionDetected()) {
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        LightOn += 1
        datalogger.log(datalogger.createCV("LightOn", LightOn))
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## 

This is a finished coding project, click ``|Done|`` to edit this code