# Fire Alarm – Finished Use Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.1.1
```

```template
basic.forever(function () {
    if (fwdSensors.temperature1.isPastThreshold(30, fwdEnums.OverUnder.Over)) {
        for (let index = 0; index < 3; index++) {
            fwdLights.ledRing1.setAllPixelsColor(0xff0000)
            music.play(music.tonePlayable(523, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
            music.rest(music.beat(BeatFraction.Quarter))
        }
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
        music.rest(music.beat(BeatFraction.Breve))
    } else {
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
```

## 

This is a finished coding project, click ``|Done|`` to edit this code