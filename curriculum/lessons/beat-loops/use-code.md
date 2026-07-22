# Beat Box – Finished Use Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.7
```

```template
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Clockwise, function () {
    music.changeTempoBy(20)
})
fwdButtons.dial1.onRotated(fwdEnums.ClockwiseCounterclockwise.Counterclockwise, function () {
    music.changeTempoBy(-20)
})
fwdButtons.dialButton1.onEvent(jacdac.ButtonEvent.Down, function () {
    music.setTempo(200)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (On) {
        On = false
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    } else {
        On = true
        fwdLights.ledRing1.setAllPixelsColor(0xffffff)
    }
})
let On = false
music.setTempo(200)
On = true
fwdLights.ledRing1.setAllPixelsColor(0xffffff)
basic.forever(function () {
    if (On) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Half))
        music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Whole))
    }
})
```

## 

This is a finished coding project, click ``|Done|`` to edit this code