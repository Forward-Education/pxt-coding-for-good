# Field Station – Finished Use Code

```package
fwd-coding-for-good=github:Forward-Education/pxt-coding-for-good#v1.0.3
```

```template
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Loud")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Loud") {
        fwdLights.ledRing1.setAllPixelsColor(0xff0000)
        basic.pause(1000)
        fwdLights.ledRing1.setAllPixelsColor(0x000000)
    }
})
radio.setGroup(1)
fwdLights.ledRing1.setAllPixelsColor(0x000000)
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
/* Reflect:
Q1:
Q2: */
```